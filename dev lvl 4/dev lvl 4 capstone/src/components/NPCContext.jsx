import React from 'react'

const NPCContext = React.createContext()

function NPCContextProvider(props) {

    const [NPCArray, setNPCArray] = React.useState([])

    React.useEffect(() => {
        fetch('https://eldenring.fanapis.com/api/npcs')
        .then(res => res.json())
        .then(data => setNPCArray(data.data))
    }, [NPCArray.length])


    console.log(NPCArray)

    return(
        <NPCContext.Provider 
        // this value needs to be {{}} style for some raisin. its an object that contains an array, so one {} to JS and another to remove the object and send only the array
            value={{
                NPCArray
            }}
        >
            {props.children}
        </NPCContext.Provider>
    )
}

export {NPCContext, NPCContextProvider}