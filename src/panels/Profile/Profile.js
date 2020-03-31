import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';


import {
    Panel, PanelHeader, Header, Group, Card, CardGrid,
    InfoRow, List, Cell, Avatar, Progress, Counter, CardScroll
} from "@vkontakte/vkui";

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
                                        {/*TODO make medals*/}
                                        <Card size="s">
                                            <img src="https://lh3.googleusercontent.com/proxy/d4CUe0LewPrc14tbfWfIiyVLSK1CbWeg05hkIDo5fyEAJSTRWQ4Exqyfb3-Qx9zZUEF0f28ypI-gdrj-OKbKGxFFH4LP0fYcnram-dWxxwDCmWydC5-be9a0"
                                            height="144" width="144"></img>
                                            <div style={{width: 144, height: 15}}/>
                                        </Card>
                                        <Card size="s">
                                            <img src="https://files.voenpro.ru/products/medal-veteran-truda-rossii-21.655x459.jpg"
                                                 height="144" width="144"></img>
                                            <div style={{width: 144, height: 15}}/>
                                        </Card>
                                        <Card size="s">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSENi5Br1tFHWDiBNzlRZ2_OQlXW0tPGy2c23A6ApQZZC9aoibU&usqp=CAU"
                                                 height="144" width="144"></img>
                                            <div style={{width: 144, height: 15}}/>
                                        </Card>
                                        <Card size="s">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/%D0%9C%D0%B5%D0%B4%D0%B0%D0%BB%D1%8C_%D0%92%D0%BE%D0%BB%D0%BE%D0%B3%D0%BE%D0%B4%D1%81%D0%BA%D0%BE%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%B8_%C2%AB%D0%9C%D0%B5%D0%B4%D0%B0%D0%BB%D1%8C_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D1%82%D0%B2%D0%B0%C2%BB_1_%D1%81%D1%82%D0%B5%D0%BF%D0%B5%D0%BD%D0%B8.png"
                                                 height="144" width="96"></img>
                                            <div style={{width: 144, height: 15}}/>
                                        </Card>
                                    </CardScroll>
                                </InfoRow>
                            </Cell>
                            <Cell>
                                <CardGrid>
                                    <Card className={classes.card} size="l">
                                        <div style={{ height: 96 }}>
                                            50 фото
                                        </div>
                                    </Card>
                                    <Card size="m">
                                        <div style={{ height: 96 }}>
                                            14 страниц
                                        </div>
                                    </Card>
                                    <Card size="m">
                                        <div style={{ height: 96 }}>
                                            3 друга
                                        </div>
                                    </Card>
                                    <Card size="s">
                                        <div style={{ height: 96 }}>
                                            50 фото
                                        </div>
                                    </Card>
                                    <Card size="s">
                                        <div style={{ height: 96 }} />
                                    </Card>
                                    <Card size="s">
                                        <div style={{ height: 96 }}>
                                            7 историй
                                        </div>
                                    </Card>
                                    <Card size="l">
                                        <div style={{ height: 96 }}>
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