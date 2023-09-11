import { object, string, date, array } from "yup";
import ticketSchema from "./ticket";

const eventSchema = object({
    name: string().required(),
    date: date().required().min(new Date(), "Date should be in the future"),
    description: string().required(),
    tickets: array().required().of(ticketSchema)
});

export default eventSchema