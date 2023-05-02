import Friend from "./components/Friend/Friend";

const App = () => {
  const friend1 = 'Abhishek';
  const friend2 = 'Wamika';
  const friend3 = 'Rifshah';

  return <>
    {/* 
    const attr = {name: "Abhishek"};
    Friend(attr); 
  */}
    <Friend
      name={friend1}
    />

    {/* 
    const attr = {name: "Wamika"};
    Friend(attr); 
  */}
    <Friend
      name={friend2}
    />

    {/* 
    const attr = {name: "Rifshah"};
    Friend(attr); 
  */}
    <Friend
      name={friend3}
    />

    {/* id is an attribute */}
    {/* className is an attribute */}
    <div id="some-id" className="abcd">
      <p>this is a div</p>
    </div>
  </>;
}

export default App;