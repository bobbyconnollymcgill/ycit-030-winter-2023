import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { increasePopulation, reset } from "./store-redux-toolkit"

export function App() {
    const [popSelValue, setPopSelValue] = useState(1)

    const { bears, birds } = useSelector((state) => state.counter)

    const dispatch = useDispatch()

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
            <button
                onClick={() =>
                    dispatch(
                        increasePopulation({
                            amount: popSelValue,
                            animal: "bears",
                        })
                    )
                }
            >
                Increase Bears
            </button>
            <button
                onClick={() =>
                    dispatch(
                        increasePopulation({
                            amount: popSelValue,
                            animal: "birds",
                        })
                    )
                }
            >
                Increase Birds
            </button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}
