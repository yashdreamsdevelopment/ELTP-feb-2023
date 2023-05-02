import { Component, ReactNode } from "react";
import { IProps } from "./Friend.types";

// IProps define the shape of the props object
// const Friend = (props: IProps) => {
//     console.log(props);

//     return <p>{props.name}</p>
// }

class Friend extends Component<IProps> {

    render(): ReactNode {
       return <p>{this.props.name}</p>
    }
}

export default Friend;