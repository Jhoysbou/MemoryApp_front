import React from 'react';

import View from '@vkontakte/vkui/dist/components/View/View';
import {
    Panel, PanelHeader, Header, Group, Card, CardGrid,
    InfoRow, List, Cell, Avatar, Progress, Counter, CardScroll
} from "@vkontakte/vkui";

import SERVER_URL from "../../SERVER_URL";

import Medal from './Medal.component.js';
import {Medals} from './Medals.enum.ts'
// style
import classes from './Profile.module.css';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.user)
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
                        <Group header={<Header mode="secondary">Информация о пользователе</Header>}>
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
                            <img className={classes.dog} src={"https://media.giphy.com/media/WU14E6y5alywgWhaeN/giphy.gif"}/>
                        </Group>
                    </Group>
                    <Group header={<Header mode="secondary">Статистика</Header>}>
                        <List>
                            <Cell>
                                <InfoRow header="Достижения">
                                    <CardScroll>
                                        <Medal medalType={SERVER_URL + Medals.photo_10}/>
                                        <Medal medalType={SERVER_URL + Medals.photo_20}/>
                                        <Medal medalType={SERVER_URL + Medals.story_5}/>
                                        <Medal medalType={SERVER_URL + Medals.story_10}/>
                                    </CardScroll>
                                </InfoRow>
                            </Cell>
                            <Cell>
                                <CardGrid>
                                    {/*TODO make achievements*/}
                                    <Card className={`${classes.card} ${classes.textInBLocks}`} size="l" mode="shadow">
                                        <div style={{height: 96}}>
                                            6 профилей
                                        </div>
                                    </Card>
                                    <Card className={`${classes.card5} ${classes.textInBLocks}`} size="m" mode="shadow">
                                        <div style={{height: 96}}>
                                            14 страниц
                                        </div>
                                    </Card>
                                    <Card className={`${classes.card2} ${classes.textInBLocks}`} size="m" mode="shadow">
                                        <div style={{height: 96}}>
                                            3 друга
                                        </div>
                                    </Card>
                                    <Card className={`${classes.card6} ${classes.textInBLocks}`} size="s" mode="shadow">
                                        <div style={{height: 96}}>
                                            50 фото
                                        </div>
                                    </Card>
                                    <Card className={`${classes.card4} ${classes.textInBLocks}`} size="s" mode="shadow">
                                        <div style={{height: 96}}>
                                            4 медали
                                        </div>

                                    </Card>
                                    <Card className={`${classes.card5} ${classes.textInBLocks}`} size="s" mode="shadow">
                                        <div style={{height: 96}}>
                                            7 историй
                                        </div>
                                    </Card>
                                    <Card className={`${classes.card6} ${classes.textInBLocks}`} size="l" mode="shadow">
                                        <div style={{height: 96}}>
                                            4 медали
                                        </div>
                                    </Card>
                                </CardGrid>
                            </Cell>
                        </List>
                    </Group>
                </Panel>
            </View>
        )
    }
}

export default Profile;