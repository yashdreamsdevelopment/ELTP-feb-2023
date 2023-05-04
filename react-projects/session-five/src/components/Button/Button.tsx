import { IButtonProps } from "./Button.types"
import styles from "./Button.module.scss";

const Button = ({ children, ...restOfProps }: IButtonProps) => {
    return <button className={styles.Button} {...restOfProps}>{children}</button>
}

export default Button;