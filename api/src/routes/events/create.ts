import { Request, Response } from "express"
import { Database } from "../../database"
import createEvent from "../../handlers/events/create"

const createEventRoute = (database: Database) => async(req: Request, res: Response) => { 
    try {
        const event = await createEvent({
            database,
            requestBody: req.body
        })
        return res.status(201).send({
            data: event
        })
    } catch(e) {
        return res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

export default createEventRoute