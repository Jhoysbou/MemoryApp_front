import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';


import {Epic, Tabbar, TabbarItem, Panel, PanelHeader} from "@vkontakte/vkui";
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            activeStory: 'map'
        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }

    onStoryChange (e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    render () {

        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'feed'}
                        data-story="feed"
                        text="Новости"
                    ><Icon28NewsfeedOutline /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'map'}
                        data-story="map"
                        label="3"
                        text="Карта"
                    ><Icon28PlaceOutline /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'profile'}
                        data-story="profile"
                        text="Профиль"
                    ><Icon28Profile /></TabbarItem>
                </Tabbar>
            }>
                <View id="feed" activePanel="feed">
                    <Panel id="feed">
                        <PanelHeader>Новости</PanelHeader>
                    </Panel>
                </View>
                <View id="map" activePanel="map">
                    <Panel id="map">
                        <PanelHeader>Карта</PanelHeader>
                    </Panel>
                </View>
                <View id="profile" activePanel="profile">
                    <Panel id="profile">
                        <PanelHeader>Профиль</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}

export default App;