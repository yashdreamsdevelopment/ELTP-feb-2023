import styles from "./Table.module.scss";
import TableRow from "./TableRow/TableRow";

const Table = () => {
    console.log(styles)
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
                <TableRow />
                <TableRow />
                <TableRow />
            </tbody>
        </table>
    )
}

export default Table;