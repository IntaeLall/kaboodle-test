import { Database } from "../../database";
import { EventResponse } from "../../types/responses";

const getEventById = async (database: Database, eventId: string): Promise<EventResponse| null> => {
    try {
        const event = await database.getEventById(eventId);
        return event;
    } catch (e: unknown) {
        throw (e);
    }
};

export default getEventById