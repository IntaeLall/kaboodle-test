const getEvents = async () => {
    const endpoint = import.meta.env.VITE_API_URL

    const response = await fetch(`${endpoint}/events`);
    
    return response.json();
};

export default getEvents