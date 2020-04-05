import React from "react";
import {
    View, Panel, PanelHeader, FormLayout, FormLayoutGroup, Input, Select, Radio, Textarea,
    Link, Checkbox, Button
} from "@vkontakte/vkui";

import ArmyUnitsEnum from './ArmyUnits.enum.ts';

class NewHero extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            purpose: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    }

    renderArmies = () => {
        return (
            <>
                {ArmyUnitsEnum.map(unit => <option value="0">Бизнес или работа</option>)}
            </>
        )

    };

    render() {
        const {email, purpose} = this.state;

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
                        top="Военное подразделение"
                        placeholder="Выберите цель поездки"
                        status={purpose ? 'valid' : 'error'}
                        bottom={purpose ? '' : 'Пожалуйста, укажите цель поездки'}
                        onChange={this.onChange}
                        value={purpose}
                        name="purpose"
                    >
                        <option value="0">Бизнес или работа</option>
                        <option value="1">Индивидуальный туризм</option>
                        <option value="2">Посещение близких родственников</option>
                    </Select>


                    <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
                    <Button size="xl">Зарегистрироваться</Button>
                </FormLayout>
            </Panel>
        );
    }
}

export default NewHero;