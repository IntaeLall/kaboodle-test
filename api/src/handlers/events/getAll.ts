import { Database } from "../../database";
import { EventResponse } from "../../types/responses";

const getAllEvents = async ({ database }: { database: Database }): Promise<EventResponse[]> => {
    try {
        const events = await database.getAllEvents();
        return events;
    } catch (e: unknown) {
        throw (e);
    }
};

export default getAllEvents