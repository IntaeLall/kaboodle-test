import EventModel from "../../models/Event";
import transformEvent, { MongooseEvent } from "../transformers/transformEvent";

const getAllEvents = async () => {
    try {
        const events = await EventModel.find({}).sort({
            createdAt: 'desc'
        })
        const response = events.map((event) => transformEvent(event.toObject()))
        return response
    } catch (e: unknown) {
        throw e;
    }
}

export default getAllEvents