import { Schema, model } from "mongoose";
import { EventType } from "../types/models";

const eventSchema = new Schema<EventType>(
  {
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tickets: [
      {
        name: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          enum: ['adult', 'family', 'child'],
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        bookingFee: {
          type: Number,
          required: true,
        },
        availability: {
          type: String,
          enum: ['available', 'sold out'],
          required: true,
        },
      }
    ]
  },
  { timestamps: true }
);

const EventModel = model<EventType>("Event", eventSchema);

export default EventModel;
