import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: { count }</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <p>(Clicking the button increases the count)</p>
        </div>
    );
};