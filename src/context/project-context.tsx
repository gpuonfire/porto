import { createContext } from "react";

// Create Context
export const ProjectContext = createContext({
    simpleHello: ""
})

// Create Provider
export default function ProjectContextProvider : Conte () {
    const simpleHello = "Hello!"


    // Init Value
    const initContextVal = {
        simpleHello: "He"
    }
    return <ProjectContext.Provider value={initContextVal}></ProjectContext.Provider>
}

// Initialize

// export Provider

