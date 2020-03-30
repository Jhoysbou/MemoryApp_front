import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';


import {Epic, Tabbar, TabbarItem, Panel, PanelHeader} from "@vkontakte/vkui";
import Icon28NewsfeedOutline from '@vkontakte/icons/dist/28/newsfeed_outline';
import Icon28SearchOutline from '@vkontakte/icons/dist/28/search_outline';
import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28More from '@vkontakte/icons/dist/28/more';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            activeStory: 'more'
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
                        selected={this.state.activeStory === 'discover'}
                        data-story="discover"
                        text="Поиск"
                    ><Icon28SearchOutline /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'messages'}
                        data-story="messages"
                        label="12"
                        text="Сообщения"
                    ><Icon28MessageOutline /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'notifications'}
                        data-story="notifications"
                        text="Уведомлен."
                    ><Icon28Notifications /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'more'}
                        data-story="more"
                        text="Ещё"
                    ><Icon28More /></TabbarItem>
                </Tabbar>
            }>
                <View id="feed" activePanel="feed">
                    <Panel id="feed">
                        <PanelHeader>Новости</PanelHeader>
                    </Panel>
                </View>
                <View id="discover" activePanel="discover">
                    <Panel id="discover">
                        <PanelHeader>Поиск</PanelHeader>
                    </Panel>
                </View>
                <View id="messages" activePanel="messages">
                    <Panel id="messages">
                        <PanelHeader>Сообщения</PanelHeader>
                    </Panel>
                </View>
                <View id="notifications" activePanel="notifications">
                    <Panel id="notifications">
                        <PanelHeader>Уведомления</PanelHeader>
                    </Panel>
                </View>
                <View id="more" activePanel="more">
                    <Panel id="more">
                        <PanelHeader>Ещё</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}

export default App;