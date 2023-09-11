
import { EventType } from "../types/models";
import { EventResponse } from "../types/responses";
import createEvent from "./events/create";
import getAllEvents from "./events/getAll";
import getEventById from "./events/getById";

export type Database = {
  createEvent: (event: EventType) => Promise<EventResponse>,
  getAllEvents: () => Promise<EventResponse[]>,
  getEventById: (id: string) => Promise<EventResponse | null>
}

export const database: Database = {
  createEvent,
  getAllEvents,
  getEventById
};