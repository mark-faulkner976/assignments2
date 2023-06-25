import React, { useEffect } from "react";
import Issue from "./Issue";

export default function IssueList( props ) {


    const { issues, getUserIssues } = props

    useEffect( () => {
        getUserIssues
    }, [] )

    return (
        <div>
            { issues.map( issue => <Issue { ...issue } key={ issue._id } />) }
        </div>
    )
}