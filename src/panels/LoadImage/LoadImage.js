import React from "react";
import vkBridge from '@vkontakte/vk-bridge';
import {View, Panel, PanelHeader, CellButton, PanelHeaderBack, ScreenSpinner} from "@vkontakte/vkui";

import AddNewHeroButtonComponent from './addNewHeroButton.component'
import classes from './LoadImage.module.css';
import ExtendedView from "./ExtendedView.component";
import ListElement from "./ListElement.component.js";
import NewHero from './NewHero.component';


class LoadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: props.user.id,
            id: 1,
            activePanel: "feed",
            history: ['feed'],
            isLoading: true
        };

        fetch('https://a830c179.ngrok.io/api/v1/user/get_heroes/' + this.state.user_id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({heroes: data, isLoading: false})
            })
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


    renderHeroes(heroes) {
        return (
            <>
                {heroes.map(hero => <CellButton onClick={() => {
                        this.setState({name_onExtendedView: `${hero.name + ' ' + hero.surname + ' ' + hero.father_name}`, activePanel: 'extended'})}}>
                        <ListElement img="https://roadheroes.storage.yandexcloud.net/de3758ec9b1b4d6c2406674298923af7_origin.jpg"
                        name={hero.name + ' ' + hero.surname + ' ' + hero.father_name}
                        rank="ст. лейтенант"
                        date={hero.bd + '–' + hero.dd}/>
                        </CellButton>
                    )}
            </>
        );
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
                    {
                        this.state.isLoading ?
                            <ScreenSpinner/> :
                                this.renderHeroes(this.state.heroes)
                    }

                    <AddNewHeroButtonComponent
                        onClick={() => !this.state.isLoading ? this.setState({activePanel: 'new_hero'}): "do nothing"}/>
                </Panel>
                <Panel id="extended">
                    <PanelHeader
                        left={<PanelHeaderBack
                            onClick={() => !this.state.isLoading ? this.setState({activePanel: 'feed'}): "do nothing"}/>}>
                        {this.state.name_onExtendedView}
                    </PanelHeader>
                    <ExtendedView
                        hero_name={this.state.name_onExtendedView}
                        heroes = {this.state.heroes} />
                </Panel>
                <Panel id="new_hero">
                    <PanelHeader
                        left={<PanelHeaderBack
                            onClick={() => !this.state.isLoading ? this.setState({activePanel: 'feed'}): "do nothing"}/>}>
                        Создать профиль
                    </PanelHeader>
                    <NewHero />
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