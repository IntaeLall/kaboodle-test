import EventModel from "../../models/Event";
import transformEvent from "../transformers/transformEvent";

const getEventById = async (id: string) => {
    try {
        const event = await EventModel.findById(id)
        if(event === null){
            return null
        }
        return transformEvent(event.toObject())
    } catch (e: unknown) {
        throw e;
    }
}

export default getEventById