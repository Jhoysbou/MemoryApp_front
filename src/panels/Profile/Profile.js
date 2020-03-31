import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';


import {Panel, PanelHeader, Header, Group, Div, InfoRow, List, Cell, Avatar, Progress, Counter} from "@vkontakte/vkui";

// style
import classes from './Profile.module.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            progress: 67,
            level: 5
        };
        //    TODO: load user's progress
    }

    render() {
        return (
            <View activePanel="info-row">
                <Panel id="info-row">
                    <PanelHeader>
                        Профиль
                    </PanelHeader>
                    <Group>
                        <Group header={<Header mode="secondary">Placeholder</Header>}>
                            <Cell
                                size="l"
                                before={<Avatar src={this.state.user.photo_100} size={80}/>}
                                multiline
                            >
                                <div className={classes.userImage}>
                                    <div className={classes.name}>
                                        {`${this.state.user.first_name}  ${this.state.user.last_name}`}
                                    </div>
                                    <div className={classes.level_counter}>
                                        <Counter size="m" mode="primary">{this.state.level}</Counter>
                                    </div>
                                    {/*{`${this.state.user.city.id === 0 ? '' : this.state.user.city.title}`}*/}
                                    <InfoRow className={classes.progressBar} header="Ваш уровень">
                                        <Progress value={this.state.progress}/>
                                        <p>
                                            Загружайте больше фотографий и информации о героях войны, чтобы повысить ваш
                                            уровень
                                        </p>
                                    </InfoRow>
                                </div>
                            </Cell>

                        </Group>
                    </Group>
                    <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
                        <List>
                            <Cell>
                                <InfoRow header="Achievements">
                                    Достижения
                                </InfoRow>
                            </Cell>
                            <Cell>
                                <InfoRow header="data_2">
                                    Placeholder
                                </InfoRow>
                            </Cell>
                            <Cell>
                                <InfoRow header="data_2">
                                    data_2
                                </InfoRow>
                            </Cell>
                        </List>
                    </Group>
                </Panel>
            </View>
        )
    }
}

export default Profile;