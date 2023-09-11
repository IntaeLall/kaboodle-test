import request from "supertest";
import initApp from "../../../app";
import { eventFactory } from "../../mocks";
import { database } from "../../../database";
import dbClient from "../../dbClient";
import { TicketType } from "../../../types/models";
import { EventResponse } from "../../../types/responses";
import createEvent from "../../../database/events/create";

describe("Clients", () => {
    let app: Express.Application;

    const buildExpectedResponse = (eventData: any): EventResponse => ({
        id: expect.any(String),
        ...eventData,
        date: expect.any(String),
        tickets: eventData.tickets.map((ticket: TicketType) => ({
            id: expect.any(String),
            ...ticket,
        })),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
    });

    beforeAll(async () => {
        app = await initApp({
            database: database,
            dbClient
        });
    });

    beforeEach(() => {
        if (dbClient.clearDatabase) {
            dbClient.clearDatabase();
        }
    });

    afterAll(async () => {
        if (dbClient.disconnect) {
            dbClient.disconnect();
        }
    });

    describe(("/events"), () => {

        describe("POST", () => {
            it("should return 201 with the new event given the correct params", async () => {
                const createEventRequest = (data: any) => request(app).post('/events').send(data);

                const eventInput = eventFactory();

                const response = await createEventRequest(eventInput);

                expect(response.statusCode).toBe(201);
                expect(response.body).toEqual({ data: buildExpectedResponse(eventInput) });
            });
        });

        describe("GET", () => {
            it("should return 200 with the list of events in descending order", async () => {
                const getAllEventsRequest = () => request(app).get('/events');
                
                const [mockEvent1, mockEvent2] = [eventFactory(), eventFactory()];

                await Promise.all([
                    createEvent(mockEvent1),
                    createEvent(mockEvent2)
                ]);

                const response = await getAllEventsRequest();

                const expectedResponse = [mockEvent1, mockEvent2].map(buildExpectedResponse);

                expect(response.statusCode).toBe(200);
                expect(response.body.data).toHaveLength(2);
                expect(response.body).toEqual({ data: expectedResponse });
            });
        });

        describe("GET /{id}", () => {
            it("should return 200 with the correct event", async () => {
                const getEventByIdRequest = (id: string) => request(app).get(`/events/${id}`);

                const mockEvent1 = eventFactory()
                const createMockEventResponse = await createEvent(mockEvent1)

                const response = await getEventByIdRequest(createMockEventResponse.id)

                const expectedResponse = buildExpectedResponse(mockEvent1)

                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual({ data: expectedResponse });
            });
        });
    })
});
