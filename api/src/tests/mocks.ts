import { faker } from "@faker-js/faker"
import { EventType } from "../types/models"

export const eventFactory = (): EventType => {
    const eventName = `${faker.word.words(2)} 2023`
    return {
      name: eventName,
      date: faker.date.future(),
      description: faker.word.words(10),
      tickets: [
        {
          name: `${eventName} First Release`,
          type: "adult",
          price: 100,
          bookingFee: 5,
          availability: "available"
        },
        {
          name: `${eventName} First Release`,
          type: "child",
          price: 50,
          bookingFee: 5,
          availability: "sold out"
        }
      ]
    }
  }
  
export const mockCreateEventOutput = (id: string, event: EventType) => ({
    id,
    ...event,
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString()
})