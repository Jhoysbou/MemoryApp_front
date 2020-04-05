import React from "react";
import {
    Panel, FormLayout, FormLayoutGroup, Input, Select, Radio, Textarea,
    Link, Checkbox, Button
} from "@vkontakte/vkui";

import SERVER_URL from "../../SERVER_URL";



class NewHero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            armyUnit: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    uploadForm = (data) => {
        fetch( SERVER_URL + '/api/v1/hero/create', {
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


    render() {
        const armyUnit = this.state.armyUnit;

        return (
            <Panel>
                <FormLayout>
                    <Input top="Имя"/>
                    <Input top="Фамилия"/>
                    <Input top="Отчество"/>

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
                    <Button size="xl">Создать профиль</Button>
                </FormLayout>
            </Panel>
        );
    }
}

export default NewHero;