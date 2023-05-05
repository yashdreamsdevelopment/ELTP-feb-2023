import Button from "../../Button/Button"
import { ITableRowProps } from "./TableRow.types";
import styles from './TableRow.module.scss';

const TableRow = ({ person, onDelete, onEdit }: ITableRowProps) => {
    const tableRowClass = !person.isGood ? styles.TableRow__Bad : '';
    return (
        <tr className={tableRowClass}>
            <td>{person.name}</td>
            <td>{person.email}</td>
            <td>{person.age}</td>
            <td>
                <Button onClick={onEdit}>Edit</Button>
                <Button onClick={onDelete}>Delete</Button>
            </td>
        </tr>
    )
}

export default TableRow;