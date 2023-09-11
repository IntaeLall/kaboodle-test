import { Request, Response } from "express"
import { Database } from "../../database"
import getEventById from "../../handlers/events/getById"

const getEventByIdRoute = (database: Database) => async(req: Request, res: Response) => { 
    try {
        const events = await getEventById(database, req.params.id)
        return res.status(200).send({
            data: events
        })
    } catch(e) {
        return res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

export default getEventByIdRoute