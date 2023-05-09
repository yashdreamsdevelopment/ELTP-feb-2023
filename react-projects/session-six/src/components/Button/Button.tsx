import { IButtonProps } from "./Button.type"
import styles from "./Button.module.scss";

const Button = ({children, ...props}: IButtonProps) => {

    const className = `${styles.Button} ${props.className}`;

    return (
        <>
            <button {...props} className={className}>{children}</button>
        </>
    );
}

export default Button;