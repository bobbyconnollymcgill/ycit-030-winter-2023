import { useState } from "react"
import { useBearsStore } from "./store-zustand"

export function App() {
    const [popSelValue, setPopSelValue] = useState(1)

    const bearsStore = useBearsStore()

    // console.log("bearsState", bearsState)

    return (
        <div>
            <h2>bears count: {bearsStore.bears}</h2>
            <h2>birds count: {bearsStore.birds}</h2>
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
            <button
                onClick={() =>
                    bearsStore.increasePopulation(popSelValue, "bears")
                }
            >
                Increase Bears
            </button>
            <button
                onClick={() =>
                    bearsStore.increasePopulation(popSelValue, "birds")
                }
            >
                Increase Birds
            </button>
            <button onClick={() => bearsStore.reset()}>Reset</button>
        </div>
    )
}
