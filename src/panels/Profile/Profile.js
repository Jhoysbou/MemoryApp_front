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
            progress: 95
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
                                className={classes.userImage}
                                size="l"
                                before={<Avatar src={this.state.user.photo_100} size={80}/>}
                                multiline
                            >
                                <div className={classes.name}>
                                    {`${this.state.user.first_name}  ${this.state.user.last_name}`}
                                </div>
                                <div className={classes.level_counter}>
                                    <Counter size="s" mode="primary">5</Counter>
                                </div>
                                {/*{`${this.state.user.city.id === 0 ? '' : this.state.user.city.title}`}*/}

                                <InfoRow header="Ваш уровень">
                                    <Progress value={this.state.progress}/>
                                </InfoRow>
                                <p>Загружайте больше фотографий и информации о героях войны, чтобы повысить ваш
                                    уровень</p>
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