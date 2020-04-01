import React from "react";
import { View, Panel, PanelHeader, FormLayout, File } from "@vkontakte/vkui";

import Icon24Camera from '@vkontakte/icons/dist/24/camera';

import classes from './LoadImage.module.css';

class LoadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({ image: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    componentWillUnmount() {
        console.log(this.state.image)
    }


    render() {
        return (
            <View activePanel="panel">
                <Panel id="panel">
                    <PanelHeader>
                        Загрузить фото
                    </PanelHeader>
                    <FormLayout>
                        <File top="Загрузите ваше фото" before={<Icon24Camera />} size="xl" accept="image/*" onChange={this.onSelectFile}>
                            Открыть галерею
                        </File>
                        <img className={classes.image} style={{ maxWidth: '100%' }} src={this.state.image}/>
                    </FormLayout>
                </Panel>
            </View>
        )
    }
}

export default LoadImage;