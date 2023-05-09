import Button from "../Button/Button"
import Modal from "../Modal/Modal"
import styles from "./DeleteModal.module.scss"

const DeleteModal = () => {
    return (
        <Modal>
            <div className={styles.Section}>
                <p>Are you sure you want to delete?</p>
            </div>
            <div className={styles.Section}>
                <Button className="Button__Primary">Ok</Button>
                <Button className="Button__Secondary">Cancel</Button>
            </div>
        </Modal>
    )
}

export default DeleteModal;