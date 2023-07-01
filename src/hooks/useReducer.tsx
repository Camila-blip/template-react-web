import { useReducer } from "react";

const globalState = {
    title: "o titulo que contexto",
    body: "o body  do contexto",
    counter: 0,
};

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "muda":
            console.log("muda");
            return { ...state, title: "mudou" };
        case "inverter": {
            const { title } = state;
            return { ...state, title: title.split("").reverse().join() };
        }
    }
    return { ...state };
};

export default function Reducer() {
    /** recebe uma funcao de reducer e o estado inicial */
    /** retorna o estado que passei e a funcao dispatch (dispar ações) */
    const [state, dispatch] = useReducer(reducer, globalState);
    return (
        <div className="App">
            <h1>{state.title}</h1>
            <button onClick={() => dispatch({ type: "muda" })}>Click</button>
            <button onClick={() => dispatch({ type: "inverter" })}>
                Click
            </button>
        </div>
    );
}
