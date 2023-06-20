import React, {useState, useContext} from "react";
import { UglyContext } from "./UglyContext";

export default function Body(props){

    const {
        uglyArray,
        uglyThing,
        setUglyArray,
        handleChange,
        handleEdit,
        handleDelete
    } = useContext(UglyContext)

    const [edit, setEdit] = useState(true)

    const [itemDetails, SetItemDetails] = useState({
        imgUrl: props.imgUrl,
        title: props.title,
        description: props.description
    })

    function toggleEdit() {
        setEdit(!edit)
    }

    function handleEditChange(e) {
        const {name, value} = e.target
        SetItemDetails(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        }
        )
    }

    function handleEditSubmit(e) {
        e.preventDefault()
        setEdit(!edit)
        handleEdit(itemDetails, props.id)
    }

    function handleDeleteSubmit(e) {
        e.preventDefault()
        handleDelete(props.id)
    }

    // console.log(itemDetails, "state")

    return (
        <>
            <div className="list">
                
                <div className="list-objects">
                { edit ? (
                    <>
                        {edit ? <h1 className="list-title">{itemDetails.title}</h1> : <input/>}
                        <img className="list-img" src={itemDetails.imgUrl} />
                        <h3 className="list-description">{itemDetails.description}</h3>
                        <button onClick={toggleEdit}>
                            edit
                        </button>
                        <button onClick={handleDeleteSubmit}>delete</button>
                    </>
                ) : (
                    <>
                        <input onChange={handleEditChange} value={itemDetails.title} name="title" />
                        <input onChange={handleEditChange} value={itemDetails.description} name="description" />
                        <input onChange={handleEditChange} value={itemDetails.imgUrl} name="imgUrl" />
                        <button onClick={handleEditSubmit}>
                            save
                        </button>
                    </>
                    )}
                </div>
            </div>
        </>
    )
}

