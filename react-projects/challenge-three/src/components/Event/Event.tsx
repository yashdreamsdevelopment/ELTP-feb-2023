import "./Event.css"
import { IEventProps } from "./Event.types";

const Event = (props: IEventProps) => {
    return (
        <div className="event">
            <div>
                <span>{props.title}</span>
                <span>{props.date}</span>
            </div>
            <div>
                <span>{props.address.city}</span>
                <span>{props.address.country}</span>
            </div>
            <div>
                <img src={props.imgUrl} alt="" />
            </div>
        </div>
    )
}

export default Event;