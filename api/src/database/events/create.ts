import EventModel from "../../models/Event";
import { EventType } from "../../types/models";
import { EventResponse } from "../../types/responses";
import transformEvent from "../transformers/transformEvent";

const createEvent = async (params: EventType): Promise<EventResponse> => {
    try {
        const event = await EventModel.create(params);
        return transformEvent(event.toObject());
    } catch (e: unknown) {
        throw e;
    }
}

export default createEvent;
