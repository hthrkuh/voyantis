import React, { useEffect, useState } from "react";
import { fetchQueues, fetchNextMessage } from "../services/apiService";

function QueueList() {
    const [queues, setQueues] = useState([]);
    const [selectedQueue, setSelectedQueue] = useState(null);
    const [nextMessage, setNextMessage] = useState(null);
    const [timeout, setTimeout] = useState(10000); // Default timeout
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [isMounted, setIsMounted] = useState(true);
    const [messagesNotFound, setMessagesNotFound] = useState(false); // Messages not found state

    const loadQueues = async () => {
        setIsLoading(true); // Set loading to true when starting to fetch
        try {
            const data = await fetchQueues();
            if (isMounted) {
                setQueues(data || []);
            }
        } catch (error) {
            console.error(error);
            if (isMounted) {
                alert("Error fetching queues");
            }
        } finally {
            setIsLoading(false); // Set loading to false once fetch is complete
        }
    };

    const handleGoClick = async () => {
        if (selectedQueue) {
            setIsLoading(true); // Set loading to true when starting to fetch message
            setMessagesNotFound(false); // Reset messages not found state
            try {
                const message = await fetchNextMessage(
                    selectedQueue.name,
                    timeout
                );
                if (message === null) {
                    setMessagesNotFound(true); // Set messages not found state if no message is available
                    setNextMessage(null);
                    // Update the queue count to 0
                    setQueues((prevQueues) =>
                        prevQueues.map((queue) =>
                            queue.name === selectedQueue.name
                                ? { ...queue, count: 0 }
                                : queue
                        )
                    );
                } else {
                    setNextMessage(message);
                }
            } catch (error) {
                console.error(error);
                alert("Error fetching the next message");
            } finally {
                setIsLoading(false); // Set loading to false once fetch is complete
            }
        }
    };

    useEffect(() => {
        loadQueues();

        return () => {
            setIsMounted(false);
        };
    }, []);

    return (
        <div className="queue-list">
            {queues.length > 0 ? (
                <div>
                    <div className="queue-selection">
                        <label>Select Queue:</label>
                        <select
                            onChange={(e) =>
                                setSelectedQueue(
                                    queues.find(
                                        (q) => q.name === e.target.value
                                    )
                                )
                            }
                            value={selectedQueue ? selectedQueue.name : ""}
                        >
                            <option value="">--Select a queue--</option>
                            {queues.map((queue) => (
                                <option key={queue.name} value={queue.name}>
                                    {queue.name} ({queue.count} messages)
                                </option>
                            ))}
                        </select>
                        <label htmlFor="timeout">Timeout (ms):</label>
                        <input
                            id="timeout"
                            type="number"
                            value={timeout}
                            onChange={(e) =>
                                setTimeout(parseInt(e.target.value, 10))
                            }
                            min="1000" // Minimum value of 1 second
                        />
                        {isLoading ? (
                            <div className="loading-text">Fetching...</div>
                        ) : (
                            <button onClick={handleGoClick}>Go</button>
                        )}
                    </div>
                    {messagesNotFound && (
                        <div className="messages-not-found">
                            Messages not found
                        </div>
                    )}
                    {nextMessage && !messagesNotFound && (
                        <div className="message-display">
                            <h3>Next Message:</h3>
                            <pre>{JSON.stringify(nextMessage, null, 2)}</pre>
                        </div>
                    )}
                </div>
            ) : (
                <p>No queues available</p>
            )}
        </div>
    );
}

export default QueueList;
