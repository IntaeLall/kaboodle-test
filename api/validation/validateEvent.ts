import eventSchema from "./schema/event";

const validateEvent = async (params: Record<string, any>) => {
    return await eventSchema.validate(params, { abortEarly: false });
}

export default validateEvent

