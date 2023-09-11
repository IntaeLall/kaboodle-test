import { EventResponse } from "../types";

const getEventById = async (eventId: string): Promise<{
    data: EventResponse
}> => {
    const endpoint = import.meta.env.VITE_API_URL

    const response = await fetch(`${endpoint}/events/${eventId}`);
    
    return response.json();
};

export default getEventById