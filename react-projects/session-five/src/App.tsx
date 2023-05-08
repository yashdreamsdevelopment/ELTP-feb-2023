import Table from "./components/Table/Table";
import "./App.css";
import { people } from "./People.data";
import { useState } from "react";

const App = () => {

  // []
  const [peopleData, setPeople] = useState(people);
  // useState return an array of 2 elements
  // [currentValue, setterFunction]
  // currentValue -> current state of the array
  // setterFunction -> modifies the array
  // tells react to re render the component

  const deletePerson = (id: string) => {
    console.log(id);
    const newArr = [...peopleData];
    const personIndex = newArr.findIndex(p => p.id === id);
    if(personIndex === -1) return;

    newArr.splice(personIndex, 1);
    // []
    setPeople(newArr);
  }

  return (
    <div className="Table">
      <Table 
        people={peopleData}
        onEdit={() => {}}
        onDelete={deletePerson}
      />
    </div>
  )
}

export default App;