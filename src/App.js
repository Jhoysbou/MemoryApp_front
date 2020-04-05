import React, {useState, useEffect} from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';


import {Epic, Tabbar, TabbarItem, Panel, PanelHeader, Header, Separator, Link, Counter} from "@vkontakte/vkui";
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28PlaceOutline from '@vkontakte/icons/dist/28/place_outline';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';
import Icon28PictureStackOutline from '@vkontakte/icons/dist/28/picture_stack_outline';

import LoadImage from "./panels/LoadImage/LoadImage.js";
import Profile from "./panels/Profile/Profile.js";
import Map from "./panels/Map/Map.js";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStory: 'map'
        };

        this.onStoryChange = this.onStoryChange.bind(this);
        // Sends event to client
        bridge.send('VKWebAppGetUserInfo')
            .then(data => {
                this.setState({
                    user: data
                });
            })
            .catch(error => {
                console.log(error);
            })

        // Subscribes to event, sended by client
        bridge.subscribe(e => console.log(e));
    }

    onStoryChange(e) {
        this.setState({activeStory: e.currentTarget.dataset.story})
    }

    render() {

        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'feed'}
                        data-story="feed"
                        text="Новости"
                    ><Icon28NewsfeedOutline/></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'map'}
                        data-story="map"
                        label="3"
                        text="Карта"
                    ><Icon28PlaceOutline/></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'photoLoader'}
                        data-story="photoLoader"
                        text="Загрузить"
                    ><Icon28PictureStackOutline/></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'profile'}
                        data-story="profile"
                        text="Профиль"
                    ><Icon28Profile/></TabbarItem>
                </Tabbar>
            }>
                <View id="feed" activePanel="feed">
                    <Panel id="feed">
                        <PanelHeader>Новости</PanelHeader>
                    </Panel>
                </View>
                
				<Map id="map" activePanel="map"/>
				
                <LoadImage id="photoLoader" activePanel="photoLoader" user={this.state.user}/>

                <Profile id="profile" activePanel="profile" user={this.state.user}>
                </Profile>
            </Epic>
        )
    }
}

export default App;