import React from "react";
import vkBridge from '@vkontakte/vk-bridge';
import {View, Panel, PanelHeader, CellButton, PanelHeaderBack, ScreenSpinner, ConfigProvider} from "@vkontakte/vkui";

import AddNewHeroButtonComponent from './addNewHeroButton.component'
import classes from './LoadImage.module.css';
import ExtendedView from "./ExtendedView.component";
import ListElement from "./ListElement.component.js";
import NewHero from './NewHero.component';

import SERVER_URL from "../../SERVER_URL";


class LoadImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: props.user.id,
            id: 1,
            activePanel: "feed",
            isLoading: true,
            noAnswer: false
        };


        fetch(SERVER_URL + '/api/v1/user/get_heroes/' + this.state.user_id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({heroes: data, isLoading: false})
            })
            .catch(() => this.setState({noAnswer: true}))
    }


    renderHeroes(heroes) {
        return (
            <>
                {heroes.map(hero => <CellButton onClick={() => {
                        this.setState({
                            name_onExtendedView: `${hero.name + ' ' + hero.surname + ' ' + hero.father_name}`,
                            selectedIdHero: hero.id,
                            activePanel: 'extended'
                        })
                    }}>
                        <ListElement img={SERVER_URL + hero.avatar}
                                     name={hero.name + ' ' + hero.surname + ' ' + hero.father_name}
                                     rank="ст. лейтенант"
                                     date={hero.bd + ' – ' + hero.dd}/>
                    </CellButton>
                )}
            </>
        );
    }

    render() {
        return (
            <ConfigProvider isWebView={true}>
                <View activePanel={this.state.activePanel}>

                    <Panel id="feed" className={`${classes.contentWrapper} ${classes.listElement}`}>
                        <PanelHeader>
                            Моя история
                        </PanelHeader>
                        {
                            this.state.isLoading ?
                                <ScreenSpinner/> :
                                this.renderHeroes(this.state.heroes)
                        }

                        <AddNewHeroButtonComponent
                            onClick={() => !this.state.isLoading ? this.setState({activePanel: 'new_hero'}) : "do_nothing"}/>
                    </Panel>
                    <Panel id="extended">
                        <PanelHeader
                            left={<PanelHeaderBack
                                onClick={() => !this.state.isLoading ? this.setState({activePanel: 'feed', }) : "do_nothing"}/>}>
                            {this.state.name_onExtendedView}
                        </PanelHeader>
                        <ExtendedView
                            hero_name={this.state.selectedIdHero}
                            hero={this.state.heroes}/>
                    </Panel>
                    <Panel id="new_hero">
                        <PanelHeader
                            left={<PanelHeaderBack
                                onClick={() => !this.state.isLoading ? this.setState({activePanel: 'feed'}) : "do_nothing"}/>}>
                            Создать профиль
                        </PanelHeader>
                        <NewHero />
                    </Panel>
                </View>
            </ConfigProvider>
        )
    }
}

export default LoadImage;