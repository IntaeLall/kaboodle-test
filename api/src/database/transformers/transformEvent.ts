import { Document } from "mongoose";
import { EventType, TicketType } from "../../types/models";
import { EventResponse } from "../../types/responses";

interface MongooseTicket extends TicketType {
    _id: Document["_id"];
}

export interface MongooseEvent extends Omit<EventType, "tickets"> {
    _id?: Document["_id"];
    __v?: number;
    tickets: MongooseTicket[];
    createdAt: Date,
    updatedAt: Date
}

const transformTicket = (ticket: MongooseTicket): TicketType & { id: string } => {
    const { _id, ...restOfTicket } = ticket;
    return {
        ...restOfTicket,
        id: _id.toString()
    };
}

const transformEvent = (event: MongooseEvent ): EventResponse => {
    const { _id, __v, tickets, ...restOfEvents } = event;

    const response = {
        ...restOfEvents,
        tickets: tickets.map(transformTicket),
        id: _id.toString(),
        date: restOfEvents.date.toString(),
        createdAt: restOfEvents.createdAt.toString(),
        updatedAt: restOfEvents.createdAt.toString(),
    }
    return response
}

export default transformEvent