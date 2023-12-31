import React from "react";

export default function LoginForm( props ) {
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props

    return (
        <form onSubmit={handleSubmit}>
        <input 
            required
            type="text"
            value={username}
            name="username"
            onChange={handleChange}
            placeholder="Username"/>
            <input 
            required
            type="text"
            value={password}
            name="password"
            onChange={handleChange}
            placeholder="Password"/>
            <button>{ btnText }</button>
            <p style={{color: "red"}}>{ errMsg }</p>
        </form>
    )
}