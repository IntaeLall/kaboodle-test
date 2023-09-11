import { EventType } from "../types";

const createEvent = async (eventData: EventType) => {
    const endpoint = import.meta.env.VITE_API_URL
    
    const response = await fetch(`${endpoint}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });

    return response.json();
};

export default createEvent