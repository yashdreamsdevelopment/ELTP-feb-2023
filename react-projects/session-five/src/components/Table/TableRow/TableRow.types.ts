import { IPerson } from "../../../People.data";

export interface ITableRowProps {
    person: IPerson;
    onEdit: () => void;
    onDelete: () => void;
}