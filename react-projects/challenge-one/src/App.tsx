import { Component, ReactNode } from "react";
import Friend from "./components/Friend/Friend";


// const App = () => {
//   return <>
//     <Friend />
//     <Friend />
//     <Friend />
//   </>
// }

class App extends Component {
  render(): ReactNode {
    return <>
      <Friend />
      <Friend />
      <Friend />
    </>
  }
}

export default App;