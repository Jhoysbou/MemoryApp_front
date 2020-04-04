import React from "react";
import vkBridge from '@vkontakte/vk-bridge';
import {View, Panel, PanelHeader, CellButton, PanelHeaderBack} from "@vkontakte/vkui";

import AddNewHeroComponent from './addNewHero.component'
import classes from './LoadImage.module.css';
import ExtendedView from "./ExtendedView.component";
import ListElement from "./ListElement.component.js";


class LoadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            activePanel: "feed",
            history: ['feed'],
        };

    }

    componentDidMount() {
        const heroes = fetch('https://a830c179.ngrok.io/api/v1/hero/getlist/')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
            })
        this.setState({heroes: heroes})
    }

    goBack = () => {
        console.log('goBack()')
        const history = this.state.history;
        history.pop();
        const activePanel = history[history.length - 1];
        if (activePanel === 'feed') {
            vkBridge.send('VKWebAppDisableSwipeBack');
        }
        console.log('setState()')
        this.setState({history, activePanel});
    };


    async renderHeroes(heroes) {
        let heroes_tags = "";
        for (let hero in heroes) {
            let hero_name = hero.name +' '+ hero.surname + ' ' + hero.father_name
            heroes_tags += `<CellButton onClick={() => {
                        this.setState({
                            name_onExtendedView: ${hero_name},
                            activePanel: 'extended'
                        })
                    }}>
                        <ListElement
                            img="https://roadheroes.storage.yandexcloud.net/de3758ec9b1b4d6c2406674298923af7_origin.jpg"
                            name=${hero_name}
                            rank="ст. лейтенант"
                            date=${hero.bd} – ${hero.dd}"
                        />
                    </CellButton>`;
        }
        return heroes_tags;

    }


    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({image: reader.result})
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };


    render() {
        return (
            <View
                activePanel={this.state.activePanel}
                onSwipeBack={this.goBack}
                history={this.state.history}
            >

                <Panel id="feed" className={`${classes.contentWrapper} ${classes.listElement}`}>
                    <PanelHeader>
                        Моя история
                    </PanelHeader>
                    {this.renderHeroes(this.state.heroes)}
                    {/*<ExtendedView id={this.props.id}/>*/}
                    <AddNewHeroComponent/>
                </Panel>
                <Panel id="extended">
                    <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({activePanel: 'feed'})}/>}>
                        {this.state.name_onExtendedView}
                    </PanelHeader>
                    <ExtendedView hero_id={this.state.hero_id}/>
                </Panel>

                {/*<FormLayout>*/}
                {/*    <File top="Загрузите ваше фото" before={<Icon24Camera />} size="xl" accept="image/*" onChange={this.onSelectFile}>*/}
                {/*        Открыть галерею*/}
                {/*    </File>*/}
                {/*    <img className={classes.image} style={{ maxWidth: '100%' }} src={this.state.image}/>*/}
                {/*</FormLayout>*/}
            </View>
        )
    }
}

export default LoadImage;