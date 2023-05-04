import Button from "../../Button/Button"

const TableRow = () => {
    return (
        <tr>
            <td>Wamika</td>
            <td>whichstarbucks@party.com</td>
            <td>21</td>
            <td>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </td>
        </tr>
    )
}

export default TableRow;