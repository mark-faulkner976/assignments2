import { NPCContext } from "./NPCContext"
import React from 'react'
import { Link } from 'react-router-dom'

// this is building the list of NPCs

export default function NPCList() {
    const { NPCArray } = React.useContext(NPCContext)

    console.log(NPCArray)

    const NPCs = NPCArray.map(npc => (
        <h3 key={npc.id}>
            <Link to={`/npclist/${npc.id}`}>{npc.name}</Link>
        </h3>
    ))

    return(
        <>
            <h1>List of NPCs</h1>
            {NPCs}
        </>
    )
}