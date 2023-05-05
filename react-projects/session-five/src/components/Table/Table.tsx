import styles from "./Table.module.scss";
import { ITableProps } from "./Table.types";
import TableRow from "./TableRow/TableRow";

const Table = ({ people, onEdit, onDelete }: ITableProps) => {
    return (
        <table className={styles.Table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    people.map(person => {
                        return <TableRow 
                            key={person.id}
                            person={person}
                            onEdit={() => onEdit(person.id)}
                            onDelete={() => onDelete(person.id)}
                        />
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;