import { IModalProps } from "./Modal.types";
import styles from "./Modal.module.scss"

const Modal = ({ children }: IModalProps) => {
    return (
        <div className={styles.ModalOverlay}>
            <div className={styles.Modal}>
                <span className={styles.ModalCloser}>x</span>
                {children}
            </div>
        </div>
    )
}

export default Modal;