
//one
// const [color, setColor] = useState("pink")

// setColor("blue")


//two
// const [color, setColor] = useState("pink")

// setColor(prevColor => prevColor === "pink" ? "blue" : "pink")


//three
// const [people, setPeople] = useState([
// 	{
// 		firstName: "John",
// 		lastName: "Smith"
// 	}
// ])

// let newPerson = [{
//     firstName: "bill",
//     lastName: "smith"

// }]

// setPeople(prevPeople => ([
//     ...prevPeople,
//     {...newPerson
// }]))

// console.log(people)

//four
//a
// const [colors, setColors] = setState(["pink", "blue"])

// setColors(prevColors => ( [...prevColors, "green"] ) )

//b
// const [countObject, setCountObject] = setState({
// 	count: 0
// })

// setCountObject(prevState => ({count: prevState.count + 1}))

//5
// const [person, setPerson] = useState({
//     firstName: "John",
//     lastName: "Smith"
// })

// setPerson(prevPerson => ({
//     ...prevPerson,
//     age: 30
// }))

//6
// const [colors, setColors] = useState(["pink", "blue"])

// setColors("green")
// this overwrites the previous values in colors and changes them to be only green. data type changed from array to string