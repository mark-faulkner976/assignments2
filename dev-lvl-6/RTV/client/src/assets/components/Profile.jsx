import React, { useContext, useEffect } from "react";
import IssueForm from "./IssueForm";
import IssueList from "./IssueList";
import { UserContext } from "../context/UserProvider";

export default function Profile() {
    const {
        user: { username },
        addIssue,
        issues,
        getUserIssues,
        token,
        deleteIssue } = useContext( UserContext )

        useEffect( () => {
            getUserIssues()
        }, [] )
        
    return (
        <div>
            <h1>Welcome { username }</h1>
            <h3>Add An Issue That Needs Attention</h3>
            <IssueForm addIssue={ addIssue } />
            <h3>Your Posted Issues</h3>
            <IssueList 
            issues={ issues }
            username={ username }
            token={ token }
            deleteIssue={ deleteIssue } />
        </div>
    )
}