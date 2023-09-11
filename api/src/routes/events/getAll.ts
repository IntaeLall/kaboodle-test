import { Request, Response } from "express"
import { Database } from "../../database"
import getAllEvents from "../../handlers/events/getAll"

const getAllEventsRoute = (database: Database ) =>  async(_req: Request, res: Response) => { 
    try {
        const events = await getAllEvents({ database })
        return res.status(200).send({
            data: events
        })
    } catch(e) {
        return res.status(500).send({
            message: "Internal Server Error"
        })
    }
}

export default getAllEventsRoute