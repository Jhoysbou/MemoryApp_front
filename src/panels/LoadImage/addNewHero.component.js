import React from "react";
import classes from './LoadImage.module.css'
import { Separator } from "@vkontakte/vkui";


class AddNewHeroComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classes.add_new}>
                content
                <Separator className={classes.separator} />
            </div>
        )
    }
}

export default AddNewHeroComponent;