import { IIncrementProps } from "./Incrementer.types"
import styles from "./Incrementer.module.scss"

const Incrementer = ({ count, onIncrement }: IIncrementProps) => {
    return (
        <div className={styles.IncrementerContainer}>
            <span>{count}</span>
            <button onClick={onIncrement}>increment</button>
        </div>
    )
}

export default Incrementer;