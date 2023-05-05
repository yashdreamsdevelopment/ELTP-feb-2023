import Table from "./components/Table/Table";
import "./App.css";
import { people } from "./People.data";
import { useState } from "react";

const App = () => {

  // []
  const peopleState = useState(people);
  // useState return an array of 2 elements
  // [currentValue, setterFunction]
  // currentValue -> current state of the array
  // setterFunction -> modifies the array
  // tells react to re render the component

  const deletePerson = (id: string) => {
    console.log(id);
    const newArr = [...peopleState[0]];
    const personIndex = newArr.findIndex(p => p.id === id);
    if(personIndex === -1) return;

    newArr.splice(personIndex, 1);
    // []
    peopleState[1](newArr);
  }

  return (
    <div className="Table">
      <Table 
        people={people}
        onEdit={() => {}}
        onDelete={deletePerson}
      />
    </div>
  )
}

export default App;