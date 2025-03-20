import { useState } from "react";

export default function Greeting({ name }) {
    const [greeting, setGreeting] = useState("Hello");

    const changeGreeting = () => {
        setGreeting(greeting === "Hello" ? "Welcome" : "Hello");
    };

    return (
        <div>
            <h1>{greeting}, {name}! Welcome to React!</h1>
            <p style={{ color: "blue", fontSize: "18px", fontStyle: "italic" }}>
                Today is {new Date().toDateString()}.
            </p>
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
}
