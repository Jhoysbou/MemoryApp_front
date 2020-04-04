import React from "react";
import vkBridge from '@vkontakte/vk-bridge';
import {View, Panel, PanelHeader, CellButton, ConfigProvider, PanelHeaderBack, Group} from "@vkontakte/vkui";

import AddNewHeroComponent from './addNewHero.component'
import classes from './LoadImage.module.css';
import ExtendedView from "./ExtendedView.component";
import ListElement from "./ListElement.component.js";


class LoadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            hero: {},
            activePanel: "feed",
            history: ['feed'],
        };

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
    }

    openListElement = (hero_id, hero_name) => {


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
                    <CellButton onClick={() => {this.setState({name_onExtendedView: "Тюкалов Поликарп Дорофеевич", hero_id: 1, activePanel: 'extended'})}}>
                        <ListElement
                            img="https://roadheroes.storage.yandexcloud.net/de3758ec9b1b4d6c2406674298923af7_origin.jpg"
                            name="Тюкалов Поликарп Дорофеевич"
                            rank="ст. лейтенант"
                            date="08.03.1922 – 5.6.1985"
                        />
                    </CellButton>
                    {/*<ExtendedView id={this.props.id}/>*/}
                    <AddNewHeroComponent />
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