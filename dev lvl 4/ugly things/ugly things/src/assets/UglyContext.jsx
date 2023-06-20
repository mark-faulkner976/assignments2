import React, { useState } from 'react'
import axios from 'axios'

const UglyContext = React.createContext()

function UglyContextProvider(props) {

    

    const [uglyThing, setUglyThing] = useState({
        title: "",
        description: "",
        imgUrl: "",
        id: ""
    })

    const [uglyArray, setUglyArray] = useState([])

    React.useEffect(() => {
        fetch("https://api.vschool.io/markf/thing")
          .then(res => res.json())
          .then(data => setUglyArray(data))
        }, [uglyArray.length])

    React.useEffect(() => {
        setUglyThing({
            imgUrl: '',
            title: '',
            description: '',
            id: ''
        })
    }, [uglyArray.length])

    function handleChange(event) {
      const {name, value} = event.target
      setUglyThing(prevUgly => ({
          ...prevUgly,
          [name]:value
      }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setUglyArray(prevItems => {
            return [
                ...prevItems,
                uglyThing
            ]
        })

        axios.post("https://api.vschool.io/markf/thing", uglyThing)
            .then(response => {
                console.log(response)
                setUglyThing(prevState => {
                    return {
                        ...prevState,
                        id: response.data._id
                    }
                })
            })
            .catch(error => console.log(error))
    }

    function handleEdit(edits, id) {
        console.log(id)
        axios.put(`https://api.vschool.io/markf/thing/${id}`, edits)
        .then((res) => setUglyArray(prevUglyArray => {
            return prevUglyArray.map(thing => {
                return thing._id === id ? res.data : thing
            })
        }))
        .catch((err) => console.log(err))
    }

    // handles the axios request and is passed to the body in context in order to rcv the appropriate _id
    function handleDelete(id) {
        console.log(id)
        axios.delete(`https://api.vschool.io/markf/thing/${id}`)
        .then((res) => setUglyArray(prevUglyArray => {
            return prevUglyArray.filter(thing => {
                thing._id !== id
            })
        }))
        .catch((err) => console.log(err))
    }

    return(
        <UglyContext.Provider value={ uglyThing && {
            uglyArray,
            uglyThing,
            setUglyArray,
            handleChange,
            handleSubmit,
            handleEdit,
            handleDelete
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, UglyContextProvider}