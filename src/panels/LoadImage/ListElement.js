import React from "react";
import {CellButton, Root, Separator, View} from "@vkontakte/vkui";
import classes from './ListElement.module.css';

class NewsElement extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={classes.listElementWrapper}>
                <img className={classes.image}
                     src='https://roadheroes.storage.yandexcloud.net/de3758ec9b1b4d6c2406674298923af7_origin.jpg'>
                </img>
                <div className={classes.textBody}>
                    <span>
                        Тюкалов Поликарп Дорофеевич, ст. лейтенант
                    </span>
                    <Separator className={classes.separator}/>
                    <span>
                        369 стр.див. 1227 стр.полк: 1). На Калининском фронте - автоматчик с мая 42 по окт.43; 2). На 1м
                        Белорусском фронте - старшина автоматной роты с окт.43 по дек. 43; 35 гв.стр.див. 102 гв.стр.пол:
                        на 1м Белорусскиом фронте - ком.пулеметного взвода с авг.44 по апр.45 и ком.пулеметной роты
                        с февр.45 по май 45ордена "Красного Знамени", "Отечественная война 2 ст.", междали: "За отвагу",
                        "За боевые заслуги", "За освобождение Варшавы", "За взятие Берлина", "За победу над германией"
                    </span>
                </div>
                <Separator className={classes.separator}/>
            </div>
        )
    }
}

export default NewsElement;