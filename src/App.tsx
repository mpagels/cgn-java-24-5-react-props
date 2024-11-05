import './App.css'

type Person = {
    name: string,
    description: string,
    age: number
}

const persons: Person[] = [
    {
        name: "Martin",
        description: "Martin is a teacher",
        age: 37,
    },
    {
        name: "Marcell",
        description: "Marcell is a coach",
        age: 37,
    },
    {
        name: "Robert",
        description: "Robert is a student",
        age: 27,
    },
];

function App() {

    function clickMe(name:string) {
        console.log("Hello " + name)
    }

  return (
    <>
        {persons.map((person: Person) => {
            return <Person key={person.name}
            name={person.name}
            description={person.description}
            age={person.age} myFunc={clickMe}
        />})}
    </>
  )
}

export default App

type PersonType = {
    name: string,
    description: string,
    age: number
    myFunc: (name:string) => void
}
function Person(props:PersonType) {

    console.log("props object")
    console.log(props)
    return <>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>Age: {props.age}</p>
        <button onClick={() => props.myFunc(props.name)}>Click</button>
    </>
}