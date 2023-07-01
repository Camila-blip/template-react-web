import { useState } from "react";
import useMyHook from "../src/hooks/useMyHook";

export default function App() {
    const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(1000);
    const [incrementor, setIncrementor] = useState(100);

    useMyHook(() => setCounter((c) => c + 1), delay);

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <h1>Delay: {delay}</h1>
            <button
                onClick={() => {
                    setDelay((d) => d + incrementor);
                }}
            >
                +{incrementor}
            </button>
            <button
                onClick={() => {
                    setDelay((d) => d - incrementor);
                }}
            >
                -{incrementor}
            </button>
            <input
                type="number"
                value={incrementor}
                onChange={(e) => setIncrementor(Number(e.target.value))}
            />
        </div>
    );
}
