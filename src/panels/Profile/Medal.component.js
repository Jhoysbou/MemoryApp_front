import React from "react";
import { Card } from "@vkontakte/vkui";

class Medal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medalType: props.medalType,
        }
    }

    render() {
        return (
            <Card size="s" mode="shadow">
                <img
                    alt="medal"
                    src={this.props.medalType}
                    height="144" width="144"/>
                <div />
            </Card>
        )
    }
}

export default Medal;