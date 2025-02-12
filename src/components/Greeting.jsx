export default function Greeting() {
    return (
        <div>
            <h1>Hello, Welcome to React!</h1>
            <p style={{ color: "blue", fontSize: "18px", fontStyle: "italic" }}>
                Today is {new Date().toDateString()}.
            </p>
        </div>
    );
};