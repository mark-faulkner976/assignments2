import React, { useContext, useEffect } from "react";
import { PublicContext } from "../context/PublicProvider";
import Issue from "./Issue";

export default function Public() {
    const {
        publicIssues,
        getPublicIssues
    } = useContext( PublicContext )

    console.log(publicIssues)

    function sortie( a, b ) {
        if ( a.upVote.length === b.upVote.length ) {
            return 0
        } else if ( a.upVote.length > b.upVote.length ) {
            return -1
        } else {
            return 1
        }
    }

    publicIssues.sort( sortie )
    

    return (
        <div>
            <h1>Public Page</h1>
            { publicIssues.map( issue => <Issue deleteToggle={ false } {...issue} key={issue._id} /> ) }
        </div>
    )
}