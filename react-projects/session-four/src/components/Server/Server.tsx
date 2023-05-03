import { IServerProps } from "./Server.types";
import "./Server.css";

const Server = (props: IServerProps) => {

    const statusClass = `Status ${props.status === "OFFLINE" ? 'Status__Offline' : 'Status__Online'}`

    return (
        <div className="Server">
            <h2>{props.name}</h2>
            <span className={statusClass}>{props.status}</span>
            <span>{props.ip} - {props.port}</span>
        </div>
    );
}

export default Server;