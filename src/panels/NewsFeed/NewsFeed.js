import React from "react";
import { View, Panel, PanelHeader, Div, Button, Group, Header, 
CardGrid, Card } from '@vkontakte/vkui';
import Icon24User from '@vkontakte/icons/dist/24/user';


const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 94,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12
};



class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(

        	<View activePanel="card">
    <Panel id="card">
      <PanelHeader>Новости</PanelHeader>
      <Group separator="hide" header={<Header mode="secondary">Новость1</Header>}>
        <CardGrid>
          <Card size="l" mode="shadow">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Group separator="hide" header={<Header mode="secondary">Новость2</Header>}>
        <CardGrid>
          <Card size="l" mode="shadow">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Group separator="hide" header={<Header mode="secondary">Новость3</Header>}>
        <CardGrid>
          <Card size="l" mode="shadow">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  </View>
		)
    }
}

export default NewsFeed;