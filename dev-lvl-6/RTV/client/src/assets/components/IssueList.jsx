import React, { useEffect } from "react";
import Issue from "./Issue";

export default function IssueList( props ) {


    const { issues, getUserIssues } = props

    useEffect( () => {
        getUserIssues
    }, [] )

    function sortie( a, b ) {
        if ( a.upVote.length === b.upVote.length ) {
            return 0
        } else if ( a.upVote.length > b.upVote.length ) {
            return -1
        } else {
            return 1
        }
    }

    issues.sort( sortie )

    return (
        <div>
            { issues.map( issue => <Issue deleteToggle={ true } { ...issue } key={ issue._id } />) }
        </div>
    )
}