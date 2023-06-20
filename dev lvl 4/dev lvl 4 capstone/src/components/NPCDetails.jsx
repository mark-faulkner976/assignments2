import { useParams } from 'react-router-dom'
import React from 'react'
import { NPCContext } from './NPCContext'

export default function NPCDetails() {

    // tbh dont totally understand the useParams thing but this works 
    const { NPCArray } = React.useContext(NPCContext)
    const { npcID } = useParams()
    const chosenNPC = NPCArray.find(npc => npc.id === npcID)

    console.log(useParams)
    console.log(chosenNPC + 'chosennpc')
    console.log(npcID +'npcID')

    return (
        <>
            <h1>i work, im the individual npc detail</h1>
            <h2>{chosenNPC.name}</h2>
            <img src={chosenNPC.image} />
            <h2>Location in game</h2>
            <h3>{chosenNPC.location}</h3>
            <h2>Iconic quote</h2>
            <h3>{chosenNPC.quote}</h3>

        </>
    )
}