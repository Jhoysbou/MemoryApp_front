import React from "react";
import classes from "./ListElement.module.css";
import { Separator } from "@vkontakte/vkui";

class ListElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: props.img,
            name: props.name,
            rank: props.rank,
            date: props.date,
        }

    }

    render() {
        return (
            <div className={classes.elementWrapper}>
                <img className={classes.image}
                     src={this.state.img}>
                </img>
                <p>
                    {this.state.name}
                    <br/>
                    {this.state.rank}
                    <br/><br/>
                    {this.state.date}
                    <br/>
                    <span className={classes.tip}>
                        Нажмите, чтобы увидеть подробную информацию
                    </span>
                </p>
                <Separator className={classes.separator} />
            </div>
        )
    }
}

export default ListElement;