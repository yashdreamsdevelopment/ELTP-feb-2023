import { Component, ReactNode } from "react";
import Name from "./components/Name/Name";

// components need to be capitalized
// const app = () => {
//   return <div>
//     <p>this is the app component</p>
//   </div>
// }
// export default app;


// ONLY ONE TOP LEVEL ELEMENT CAN BE RETURNED FROM A COMPONENT
// const App = () => {
//   return (
//   <div>
//     <p>this is the first div</p>
//   </div>
//   <div>
//     <p>this is the second div</p>
//   </div>
//   )
// }
// export default App;


// const App = () => {
//   return (
//     // <></> is called a fragment tag
//     // fragments are not rendered in the dom
//     // fragments cannot have attributes 
//     <>
//       <div>
//         <p>this is the first div</p>
//       </div>
//       <div>
//         <p>this is the second div</p>
//       </div>
//     </>
//   )
// }
// export default App;

class App extends Component {

  render(): ReactNode {
    return (
      <>
        <div>
          <p>this is the first div</p>
        </div>
        <div>
          <p>this is the second div</p>
        </div>
        <Name />
      </>
    )
  }
}

export default App;