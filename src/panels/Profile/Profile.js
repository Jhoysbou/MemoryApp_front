import React from 'react';

import View from '@vkontakte/vkui/dist/components/View/View';
import {
    Panel, PanelHeader, Header, Group, Card, CardGrid,
    InfoRow, List, Cell, Avatar, Progress, Counter, CardScroll
} from "@vkontakte/vkui";

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

                        </Group>
                    </Group>
                    <Group header={<Header mode="secondary">Статистика</Header>}>
                        <List>
                            <Cell>
                                <InfoRow header="Достижения">
                                    <CardScroll>
                                        <Medal medalType={Medals.photo_10}/>
                                        <Medal medalType={Medals.photo_20}/>
                                        <Medal medalType={Medals.story_5}/>
                                        <Medal medalType={Medals.story_10}/>
                                    </CardScroll>
                                </InfoRow>
                            </Cell>
                            <Cell>
                                <CardGrid>
                                    {/*TODO make achievements*/}
                                    <Card className={classes.card} size="l" mode="shadow">
                                        <div style={{height: 96}}>
                                            50 фото
                                        </div>
                                    </Card>
                                    <Card className={classes.card1} size="m" mode="shadow">
                                        <div style={{height: 96}}>
                                            14 страниц
                                        </div>
                                    </Card>
                                    <Card className={classes.card2} size="m" mode="shadow">
                                        <div style={{height: 96}}>
                                            3 друга
                                        </div>
                                    </Card>
                                    <Card className={classes.card3} size="s" mode="shadow">
                                        <div style={{height: 96}}>
                                            50 фото
                                        </div>
                                    </Card>
                                    <Card className={classes.card4} size="s" mode="shadow">
                                        <div style={{height: 96}}/>
                                    </Card>
                                    <Card className={classes.card5} size="s" mode="shadow">
                                        <div style={{height: 96}}>
                                            7 историй
                                        </div>
                                    </Card>
                                    <Card className={classes.card6} size="l" mode="shadow">
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