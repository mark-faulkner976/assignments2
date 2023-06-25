import React, { useContext } from "react";
import CommentForm from "./CommentForm";
import { UserContext } from "../context/UserProvider";

export default function Issue( props ) {
    const {
        user: { username },
        addIssue,
        issues,
        getUserIssues,
        token,
        deleteIssue } = useContext( UserContext )

    const { title, description, imgUrl, _id } = props
    return (
        <div>
            <h1>{ title }</h1>
            <h3>{ description }</h3>
            <img src={ imgUrl } alt={ imgUrl } width={ 300 } />
            <button onClick={ () => deleteIssue( _id ) }>Delete Issue</button>
            <CommentForm />
        </div>
    )
}