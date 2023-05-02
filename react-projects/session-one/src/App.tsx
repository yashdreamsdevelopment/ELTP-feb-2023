import { Component, ReactNode } from "react";


// 1. functional component
// returns the jsx
export const App = () => {
  return <p>this is App functional component</p>
}


// 2. class based component
// this class needs to be a component
// it needs to extend functionality of the Component class
// Component class defined by react for us
class AppComponent extends Component {

  // overwrite the render method
  render(): ReactNode {
    return <p>this is AppComponent</p>
  }
}

export default AppComponent