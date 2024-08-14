import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import QueueList from "./QueueList";
import AddQueueForm from "./AddQueueForm";
const Styles = styled.div`
    padding: 1rem;
    width: 100%;
`;
export const UserContext = React.createContext();

export default function Main() {
    const [isLoading, setisLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const handleQueueAdded = () => {
        setReload(!reload); // Trigger reload of queue list
    };

    return (
        <main style={{ minHeight: "150vh", justifySelf: "center" }}>
            <article>
                <Styles>
                    <div className="App">
                        <h1>Queue Manager</h1>
                        <AddQueueForm onQueueAdded={handleQueueAdded} />
                        <QueueList key={reload} />{" "}
                        {/* Reload QueueList component */}
                    </div>
                </Styles>
            </article>
        </main>
    );
}
