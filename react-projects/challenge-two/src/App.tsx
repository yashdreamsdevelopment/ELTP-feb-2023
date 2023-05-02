import Player from "./components/Player/Player";


const App = () => {
  return <>
    <Player 
      name="Ronaldo"
      rating={7.8}
    />

    <Player 
      name="Messi"
      rating={8.8}
    />
    
    <Player 
      name="Virat"
      rating={8}
    />

    <Player 
      name="Dhoni"
      rating={1.8}
    />
  </>;
}

export default App;