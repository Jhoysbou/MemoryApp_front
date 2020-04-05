import React from "react";
import { View, Panel, PanelHeader, Div, Button, Group, Header,
    CardGrid, Card, Avatar, Cell } from '@vkontakte/vkui';
import Icon24User from '@vkontakte/icons/dist/24/user';


class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(

            <View activePanel="card">
                <Panel id="card">
                    <PanelHeader>Новости</PanelHeader>
                    <Group separator="hide" header={<Header mode="secondary">5 апреля</Header>}>
                        <CardGrid>
                            <Card size="l" mode="shadow">
                                <div style={{ height: 96 }}>
                                    <Cell
                                        before={<Avatar src="https://sun9-41.userapi.com/c834203/v834203066/15c78b/e_UFH1nypZ0.jpg"
                                                        size={80}/>}
                                        description="Добавила фото">Вероника Малышева</Cell>
                                </div>
                            </Card>
                        </CardGrid>
                    </Group>
                    <Group separator="hide" header={<Header mode="secondary">5 апреля</Header>}>
                        <CardGrid>
                            <Card size="l" mode="shadow">
                                <div style={{ height: 96, paddingLeft: 4, paddingTop: 4 }}>
                                    <Cell before={<Avatar src="https://sun9-12.userapi.com/c857424/v857424321/c3b3d/_n0Y7-aYtwE.jpg?ava=1" size={80}/>}description="Добавил фото">Артём Бакута</Cell>
                                </div>
                            </Card>
                        </CardGrid>
                    </Group>
                    <Group separator="hide" header={<Header mode="secondary">4 апреля</Header>}>
                        <CardGrid>
                            <Card size="l" mode="shadow">
                                <div style={{ height: 96 }} >
                                    <Cell before={<Avatar src="https://sun9-40.userapi.com/c846123/v846123564/4372/X5sCXADUiFk.jpg?ava=1" size={80} />}description="Добавил 4 фото">Фёдор Кондратенко</Cell>
                                </div>
                            </Card>
                        </CardGrid>
                    </Group>
                </Panel>
            </View>
        )
    }
}

export default NewsFeed;