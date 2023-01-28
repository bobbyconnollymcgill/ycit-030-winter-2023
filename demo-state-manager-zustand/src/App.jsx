import { useState } from "react"
import { useBearsStore } from "./store-zustand"

export function App() {
    const [popSelValue, setPopSelValue] = useState(1)

    const { birds, bears, increasePopulation, reset } = useBearsStore()

    // console.log("bearsState", bearsState)

    return (
        <div>
            <h2>bears count: {bears}</h2>
            <h2>birds count: {birds}</h2>
            <div>
                <input
                    type="number"
                    value={popSelValue}
                    onChange={(e) => setPopSelValue(e.target.value)}
                    style={{
                        fontSize: "30px",
                        width: "60px",
                        marginLeft: "20px",
                    }}
                />
            </div>
            <button onClick={() => increasePopulation(popSelValue, "bears")}>
                Increase Bears
            </button>
            <button onClick={() => increasePopulation(popSelValue, "birds")}>
                Increase Birds
            </button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}
