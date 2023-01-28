import { create } from "zustand"

export const useBearsStore = create((set) => {
    console.log("hey store is being created. Hang tight")

    // Don't put any logic in this body besides returning the "state" object

    return {
        bears: 0,
        birds: 0,
        increasePopulation: (amount = 1, animal = "birds") => {
            set((state) => {
                switch (animal) {
                    case "bears":
                        const newBearsCount = state.bears + Number(amount)

                        return {
                            bears: newBearsCount,
                        }

                    case "birds":
                        const newBirdsCount = state.birds + Number(amount)

                        return {
                            birds: newBirdsCount,
                        }
                }
            })
        },
        reset: () => {
            set({
                bears: 0,
                birds: 0,
            })
        },
    }
})
