import { Database } from "../../../../database"
import getAllEvents from "../../../../handlers/events/getAll"
import { EventType } from "../../../../types/models"
import { EventResponse } from "../../../../types/responses"
import { eventFactory, mockCreateEventOutput } from "../../../mocks"

const createEventInput = eventFactory()

const mockDatabase: Partial<Database> = {
  getAllEvents: jest.fn().mockReturnValue([
    mockCreateEventOutput('event-001', createEventInput),
    mockCreateEventOutput('event-002', createEventInput)
  ])
}

describe("getAllEvents handler", () => {
    let data: EventResponse[]
    beforeEach(async () => {
      data = await getAllEvents({
        database: mockDatabase as Database,
      })
    })

    it('should call database.getAllEvents', () => {
      expect(mockDatabase.getAllEvents).toBeCalled()
    });

    it('should return all the events in the response', () => {
      expect(data).toEqual([
        expect.objectContaining({
            id: 'event-001'
        }),
        expect.objectContaining({
            id: 'event-002'
        })
      ])
    })
})