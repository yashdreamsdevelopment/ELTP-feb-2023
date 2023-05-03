import { IFriendProps } from "./Friend.types";
import "./Friend.css";

const Friend = (props: IFriendProps) => {

    const friendClass = `Friend ${props.isClose ? 'Friend__Close' : ''}`;

    return (
        <div className={friendClass}>
            <h2>{props.name}</h2>
            <span>{props.email}</span>
            <button>{props.isClose ? 'Distance Friend' : 'Make Close Friend'}</button>
        </div>
    )
}

export default Friend;