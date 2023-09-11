import express, { Application } from 'express';
import dotenv from 'dotenv';
import { Database } from './database';
import { DbClient } from './types/dbClient';
import cors from 'cors';
import createEventRoute from './routes/events/create';
import getAllEventsRoute from './routes/events/getAll';
import getEventByIdRoute from './routes/events/getById';
import { eventFactory } from './tests/mocks';

dotenv.config()

const initApp = async({
    database,
    dbClient
}: {
    database: Database
    dbClient: DbClient
}) => {
    const app: Application = express();

    await dbClient.connect()

    await database.createEvent(eventFactory())

    app.use(cors({
        origin: true
    }))

    app.use(express.json());

    app.post('/events', createEventRoute(database));

    app.get('/events', getAllEventsRoute(database));

    app.get('/events/:id', getEventByIdRoute(database));

    return app
}

export default initApp