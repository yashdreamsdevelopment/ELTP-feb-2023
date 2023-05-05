import { People } from "../../People.data";

export interface ITableProps {
    people: People;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}