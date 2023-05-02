import { IProps } from "./Friend.types";

// IProps define the shape of the props object
const Friend = (props: IProps) => {
    console.log(props);

    return <p>{props.name}</p>
}

export default Friend;