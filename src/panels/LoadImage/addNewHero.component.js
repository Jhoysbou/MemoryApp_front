import React from "react";
import classes from './LoadImage.module.css'
import {CellButton} from "@vkontakte/vkui";


class AddNewHeroComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classes.add_new}>
                <CellButton onClick={() => {}}
                            className={classes.btn}
                            size="l"
                            mode="secondary">

                   <div>Добавить героя войны</div>
                </CellButton>
            </div>

        )
    }
}

export default AddNewHeroComponent;