import { Database } from "../../../../database"
import createEvent from "../../../../handlers/events/create"
import { EventResponse } from "../../../../types/responses"
import { eventFactory, mockCreateEventOutput } from "../../../mocks"

const createEventInput = eventFactory()

const mockDatabase: Partial<Database> = {
  createEvent: jest.fn().mockReturnValue(mockCreateEventOutput('event-001', createEventInput)),
}

const mockValidateEvent = jest.fn()

describe("createEvent handler", () => {
    let data: EventResponse

    beforeEach(async () => {
        data = await createEvent({
        database: mockDatabase as Database,
        requestBody: createEventInput,
        schema: mockValidateEvent
        })
    })

    it('should call validateEvent', () => {
        expect(mockValidateEvent).toBeCalled()
    })

    it('should call database.createEvent', () => {
        expect(mockDatabase.createEvent).toBeCalled()
    });

    it('should return the newly created event in the response', () => {
        expect(data).toEqual({
        ...createEventInput,
        id: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        })
    })
})