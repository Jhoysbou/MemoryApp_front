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
            army_name: '',
            src: null,
            name: '',
            surname: '',
            father_name: '',
            info: '',
            member: '4'
        };

        this.onChange = this.onChange.bind(this);
    }

    onSubmit = () => {
        // var query = {
        //     "name": "d",
        //     "surname": "sdf",
        //     "father_name": "243fsdfs",
        //     "info": "234",
        //     "army_name": "124 гв. бап",
        //     "army_name_short": "124 гв. ба",
        //     "bd": "1111-11-11",
        //     "dd": "2323-03-23",
        //     "path": "{'point0': [{'dolgota': 24.39050836965737}, {'shirota': 55.503760156160666}, {'date_from': '1944-08-28'}, {'date_to': '1944-08-28'}]}",
        //     "photos": [],
        //     "avatar": [],
        //     "member": 1
        // }
        // console.log('name')
        // console.log(JSON.stringify(query))
        this.uploadForm(this.state)
    };

    uploadForm = (data) => {
        fetch(SERVER_URL + '/api/v1/hero/create/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
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
        const army_name = this.state.army_name;
        const name = this.state.name;
        const surname = this.state.surname;
        const father_name = this.state.father_name;
        const info = this.state.info;

        return (
                <div>
                    <img className={classes.preview} src={this.state.src}/>
                    {this.state.src === null ? '' :<Separator />}
                    <FormLayout claccName={classes.form}>
                        <File top="Загрузите ваше фото" before={<Icon24Camera/>} size="xl" accept="image/*"
                              onChange={this.onImageUpload}>
                            Открыть галерею
                        </File>

                        <Input 
                            name="name" 
                            required="true" 
                            type='text' 
                            top="Имя"
                            onChange={this.onChange}
                            value={name}
                            name="name"
                        />
                        <Input 
                            name="surname" 
                            required="true" 
                            type='text' 
                            top="Фамилия"
                            onChange={this.onChange}
                            value={surname}
                            name="surname"
                        />
                        <Input 
                            name="father_name" 
                            required="true"
                            type='text'
                            top="Отчество"
                            onChange={this.onChange}
                            value={father_name}
                            name="father_name"
                        />

                        <Select top="Пол" placeholder="Выберите пол">
                            <option value="m">Мужской</option>
                            <option value="f">Женский</option>
                        </Select>

                        <Textarea 
                            name="info" 
                            top="О себе"
                            onChange={this.onChange}
                            value={info}
                            name="info"
                        />

                        <FormLayoutGroup top="Это ваш родственник?">
                            <Radio name="type">Да</Radio>
                            <Radio name="type">Нет</Radio>
                        </FormLayoutGroup>

                        <Select
                            placeholder="Военное подразделение"
                            status={army_name ? 'valid' : 'error'}
                            bottom={army_name ? '' : 'Пожалуйста, укажите военное подразделение'}
                            onChange={this.onChange}
                            value={army_name}
                            name="army_name"
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