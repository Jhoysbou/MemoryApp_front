import React from "react";
import { View, Panel, PanelHeader, Div, Button, Group } from '@vkontakte/vkui';
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

        	<View activePanel="div">
				  <Panel id="div">
				    <PanelHeader>Лента новостей</PanelHeader>
				    <Group>
				      <Div>
				        <Button stretched mode="secondary" size="l">
				          Новость
				        </Button>
				      </Div>
				    </Group>
				  </Panel>
				</View>
		)
    }
}

export default NewsFeed;