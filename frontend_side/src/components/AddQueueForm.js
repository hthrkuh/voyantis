import React, { useState } from "react";
import { addMessageToQueue } from "../services/apiService";

function AddQueueForm({ onQueueAdded }) {
    const [queueName, setQueueName] = useState("");
    const [message, setMessage] = useState("");

    const handleAddQueue = async () => {
        if (!queueName) {
            alert("Queue name is required");
            return;
        }

        try {
            await addMessageToQueue(queueName, { text: message });
            alert(`Queue "${queueName}" created with message`);
            setQueueName("");
            setMessage("");
            onQueueAdded(); // Refresh the queue list after adding a new queue
        } catch (error) {
            console.error(error);
            alert("Error adding the queue");
        }
    };

    return (
        <div className="add-queue-form">
            <h3>Add New Queue</h3>
            <input
                type="text"
                value={queueName}
                onChange={(e) => setQueueName(e.target.value)}
                placeholder="Queue name"
            />
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="First message (optional)"
            />
            <button onClick={handleAddQueue}>Add Queue</button>
        </div>
    );
}

export default AddQueueForm;
