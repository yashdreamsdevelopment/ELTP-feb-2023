import { useState } from "react"
import Incrementer from "./components/Incrementer/Incrementer"
import styles from './App.module.scss';

const App = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = () => setCount1(count1 + 1);
  const incrementCount2 = () => setCount2(count2 + 1);

  return (
    <div className={styles.main}>
      <Incrementer
        count={count1}
        onIncrement={incrementCount2}
      />

      <Incrementer
        count={count2}
        onIncrement={incrementCount1}
      />
    </div>
  )
}

export default App;