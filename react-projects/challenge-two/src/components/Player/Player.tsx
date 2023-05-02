import { IProps } from "./Player.types";

const Player = (props: IProps) => {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.rating}</span>
            <span>
                <button>Unfavorite</button>
            </span>
        </div>
    )
}

export default Player;