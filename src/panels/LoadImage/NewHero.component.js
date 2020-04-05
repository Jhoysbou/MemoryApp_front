import React from "react";
import {
    Panel, FormLayout, FormLayoutGroup, Input, Select, Radio, Textarea,
    Link, Checkbox, Button, File, View, Separator
} from "@vkontakte/vkui";

import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import classes from "./NewHero.module.css"
import SERVER_URL from "../../SERVER_URL";


class NewHero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            armyUnit: '',
            src: null,
        };

        this.onChange = this.onChange.bind(this);
    }

    onSubmit = () => {
        console.log('name')
    }

    uploadForm = (data) => {
        fetch(SERVER_URL + '/api/v1/hero/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    onChange(e) {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    }

    onImageUpload = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () =>
                this.setState({src: reader.result})
            );
            reader.readAsDataURL(e.target.files[0]);
        }

    };


    render() {
        const armyUnit = this.state.armyUnit;

        return (
                <div>
                    <img className={classes.preview} src={this.state.src}/>
                    {this.state.src === null ? '' :<Separator />}
                    <FormLayout claccName={classes.form}>
                        <File top="Загрузите ваше фото" before={<Icon24Camera/>} size="xl" accept="image/*"
                              onChange={this.onImageUpload}>
                            Открыть галерею
                        </File>

                        <Input required="true" type='text' top="Имя"/>
                        <Input required="true" type='text' top="Фамилия"/>
                        <Input required="true" type='text' top="Отчество"/>

                        <Select top="Пол" placeholder="Выберите пол">
                            <option value="m">Мужской</option>
                            <option value="f">Женский</option>
                        </Select>

                        <Textarea top="О себе"/>

                        <FormLayoutGroup top="Это ваш родственник?">
                            <Radio name="type">Да</Radio>
                            <Radio name="type">Нет</Radio>
                        </FormLayoutGroup>

                        <Select
                            placeholder="Военное подразделение"
                            status={armyUnit ? 'valid' : 'error'}
                            bottom={armyUnit ? '' : 'Пожалуйста, укажите военное подразделение'}
                            onChange={this.onChange}
                            value={armyUnit}
                            name="armyUnit"
                        >
                            <option value="1-я гвардейская армия (I)">1-я гвардейская армия (I)</option>
                            <option value="1-я гвардейская армия (II)">1-я гвардейская армия (II)</option>
                            <option value="1-я гвардейская армия (III)">1-я гвардейская армия (III)</option>
                        </Select>


                        <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
                        <Button size="xl" onClick={this.onSubmit}>Создать профиль</Button>
                    </FormLayout>
                </div>
        );
    }
}

export default NewHero;