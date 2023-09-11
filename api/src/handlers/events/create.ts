import validateEvent from "../../../validation/validateEvent";
import { Database } from "../../database";
import { EventType } from "../../types/models";
import { EventResponse } from "../../types/responses";

const createEvent = async ({
    database,
    requestBody,
    schema = validateEvent
}: {
    database: Database,
    requestBody: Record<string, unknown>,
    schema?: (requestBody: Record<string, unknown>) => Promise<EventType>
}): Promise<EventResponse> => {
    try {
        const validatedEventInput = await schema(requestBody);
        const createdEvent = await database.createEvent(validatedEventInput);
        return createdEvent
    } catch (e: unknown) {
        throw (e);
    }
};

export default createEvent
