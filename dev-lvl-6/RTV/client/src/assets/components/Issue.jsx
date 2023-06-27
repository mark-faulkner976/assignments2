import React, { useContext } from "react";
import CommentList from './CommentList'
import CommentForm from "./CommentForm";
import { UserContext } from "../context/UserProvider";
import { PublicContext } from "../context/PublicProvider";

export default function Issue( props ) {
    const {
        user: { username },
        addIssue,
        issues,
        getUserIssues,
        token,
        deleteIssue } = useContext( UserContext )

    const {
        upVoteIssue,
        downVoteIssue
    } = useContext( PublicContext )

    const { title, description, imgUrl, _id, upVote, downVote, deleteToggle } = props

    function upVotes() {
        upVoteIssue( _id )
        getUserIssues()
    }

    function downVotes() {
        downVoteIssue( _id )
        getUserIssues()
    }

    return (
        <div>
            <h1>{ title }</h1>
            <h3>{ description }</h3>
            <img src={ imgUrl } alt={ imgUrl } width={ 300 } />
            { deleteToggle && <button onClick={ () => deleteIssue( _id ) }>Delete Issue</button>}
            <p>{ upVote.length }</p>
            <button onClick={ upVotes } >upvote</button>
            <p>{ downVote.length }</p>
            <button onClick={ downVotes } >downvote</button>
            <CommentList
            issueId={ _id } />
            <CommentForm 
            issueId={ _id } />
        </div>
    )
}