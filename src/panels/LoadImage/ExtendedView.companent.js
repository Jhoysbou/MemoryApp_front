import React from "react";
import { Separator } from "@vkontakte/vkui";
import classes from './ExtendedView.module.css';

class NewsElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero_id: props.hero_id,
        }
    }


    render() {
        return (
            <div>
                <img className={classes.image}
                     src='https://roadheroes.storage.yandexcloud.net/de3758ec9b1b4d6c2406674298923af7_origin.jpg'>
                </img>
                <div className={classes.textBody}>
                    <span>
                        Тюкалов Поликарп Дорофеевич, ст. лейтенант
                    </span>
                    <Separator className={classes.separator}/>
                    <span className={classes.shortStory}>
                       "Красного Знамени", "Отечественная война 2 ст.", междали: "За отвагу",
                        "За боевые заслуги"
                    </span>
                </div>
            </div>

        )
    }
}

export default NewsElement;