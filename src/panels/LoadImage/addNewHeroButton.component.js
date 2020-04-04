import React from "react";
import classes from './LoadImage.module.css'
import { CellButton } from "@vkontakte/vkui";


class AddNewHeroButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onClick: props.onClick,
        }
    }

    render() {
        return (
            <div className={classes.add_new}>
                <CellButton onClick={this.state.onClick}
                            className={classes.btn}
                            size="l"
                            mode="secondary">

                   <div>Добавить героя войны</div>
                </CellButton>
            </div>

        )
    }
}

export default AddNewHeroButtonComponent;