import React from "react";
import {Separator} from "@vkontakte/vkui";
import classes from './ExtendedView.module.css';

import SERVER_URL from "../../SERVER_URL";
import {get} from "leaflet/src/dom/DomUtil";

class NewsElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hero_name: props.hero_name,
            hero: props.hero,

        };

        let getHero = '';
        for (let i = 0; i < this.state.hero.length; i++) {
            if (this.state.hero[i].id == this.state.hero_name) {
                getHero = this.state.hero[i];
                break;
            }
        }

        this.hero = getHero;
    }



    render() {
        return (
            <div>
                <img className={classes.image}
                     src={SERVER_URL + this.hero.avatar}>
                </img>
                <div className={classes.textBody}>
                    <span>
                        {/*{`${hero.name + ' ' + hero.surname + ' ' + hero.father_name}`}*/}
                        {`${this.hero.name}  ${this.hero.surname} ${this.hero.father_name}`}
                    </span>
                    <Separator className={classes.separator}/>
                    <span className={classes.shortStory}>
                        {this.hero.info}
                    </span>
                </div>
                <Separator className={classes.separator}/>
            </div>

        )
    }
}

export default NewsElement;