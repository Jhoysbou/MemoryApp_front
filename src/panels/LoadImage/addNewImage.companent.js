import React from "react";
import classes from './LoadImage.module.css'
import { Div, Separator } from "@vkontakte/vkui";


class AddNewImageCompanent extends React.Component {
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

export default AddNewImageCompanent;