export default function Greeting(username) {
    return (
        <div>
            <h1>Hello, { username.name } Welcome to React!</h1>
            <p style={{ color: "blue", fontSize: "18px", fontStyle: "italic" }}>
                Today is {new Date().toDateString()}.
            </p>
        </div>
    );
};