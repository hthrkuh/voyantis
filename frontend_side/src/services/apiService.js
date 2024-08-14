import http from "./httpService";

const API_URL = "http://localhost:4000/api";

export async function fetchQueues() {
    try {
        const response = await http.get(`${API_URL}/queues`);
        return response.data; // Axios automatically parses JSON
    } catch (error) {
        // Handle the error in the interceptor or return an empty array
        return [];
    }
}

// Fetch the next message from the specified queue with optional timeout
export async function fetchNextMessage(queueName, timeout) {
    try {
        const response = await http.get(
            `${API_URL}/${queueName}?timeout=${timeout}`
        );
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 204) {
            return null; // No message available
        }
    } catch (error) {
        console.error("Error fetching next message:", error);
        throw error;
    }
}

export async function addMessageToQueue(queueName, message) {
    try {
        const response = await http.post(`${API_URL}/${queueName}`, message);
        return response.data; // Axios automatically parses JSON
    } catch (error) {
        // Handle the error in the interceptor
        throw new Error("Failed to add message to queue");
    }
}
