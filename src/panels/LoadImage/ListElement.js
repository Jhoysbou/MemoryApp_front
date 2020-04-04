import React from "react";
import {Div, Separator} from "@vkontakte/vkui";
import classes from './ListElement.module.css';

class NewsElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <img className={classes.image}
                     src='https://roadheroes.storage.yandexcloud.net/de3758ec9b1b4d6c2406674298923af7_origin.jpg'>
                </img>
                <div className={classes.textBody}>
                    <span>
                       Тюкалов Поликарп Дорофеевич
                    </span>
                </div>
                <Separator className={classes.separator}/>
            </div>
        )
    }
}

export default NewsElement;