import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import cx from "classnames";

import {Button} from "../../components/Button";

import {
    createNewObject
} from "../../reducers/dummyObjects/dummyObjects.reducer";

const s = require('./ObjectCreateNew.module.sass');

type IProps = DispatchProps;

interface IState {
    title: string;
    isValid: boolean;
}

export class ObjectCreateNew extends Component<IProps, IState> {
    private titleInput;
    private descriptionInput;
    private attributesWrapper;

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            isValid: true
        };
        this.createNewObject = this.createNewObject.bind(this);
    }

    componentDidMount() {
        let inputs = ReactDOM.findDOMNode(this.attributesWrapper).childNodes;
        inputs.forEach(input => input.addEventListener('keyup', this.shouldCreateNewInput))
    }

    createNewObject = (): void => {
        if (this.titleInput.value === '') {
            this.setState({
                isValid: false
            });
            return
        } else {
            this.setState({
                isValid: true
            });
        }

        let inputs = ReactDOM.findDOMNode(this.attributesWrapper).childNodes;
        let attributes = [];
        //@ts-ignore
        [...inputs].forEach(input => {
            if (input.value) {
                attributes.push(input.value);
                input.value = '';
                this.shouldDeleteInput(input)
            }
        });

        let newDummyObject = {
            title: this.titleInput.value,
            attributes: attributes,
            description: this.descriptionInput.value
        };
        this.props.createNewObject(newDummyObject);

        // reset input's values on creating new object
        this.titleInput.value = '';
        this.descriptionInput.value = '';
    };

    createDynamicAttributeInput = () => {
        let input = document.createElement('input');
        input.type = 'text';
        input.className = `${s.input}`;
        input.name = 'attributes';
        input.addEventListener('keyup', this.shouldCreateNewInput, false);
        let attrWrapper = ReactDOM.findDOMNode(this.attributesWrapper);
        //@ts-ignore
        attrWrapper.appendChild(input);
    };

    shouldCreateNewInput = (e): void => {
        let inputs = ReactDOM.findDOMNode(this.attributesWrapper).childNodes;
        // add new input if we filled others
        //@ts-ignore
        if ([...inputs].every(item => item.value !== '')) {
            this.createDynamicAttributeInput();
            return
        }
        // case when we clear input value and delete it so there won't be left many empty inputs
        this.shouldDeleteInput(e.target);
    };

    // delete all inputs but one on object's creating
    shouldDeleteInput = (input) => {
        let inputs = ReactDOM.findDOMNode(this.attributesWrapper).childNodes;
        if (input.value === '' && inputs.length > 1) {
            input.remove();
        }
    };

    updateValues = (input) => {
        this.setState({
            title: input
        })
    };

    render(): React.ReactElement {
        const { isValid } = this.state;
        return (
            <div className={s.wrapper}>
                <h4>Добавить новый объект</h4>

                <div className={s.customForm}>
                    <label className={s.label} htmlFor="title">Заголовок *</label>
                    <input
                        ref={node => {
                            this.titleInput = node;
                        }}
                        className={s.input}
                        onChange={() => this.updateValues(this.titleInput)}
                        name="title"
                        type="text"/>

                    <label className={s.label} htmlFor="attiributes">Добавить пункт</label>
                    <div
                        ref={node => {
                            this.attributesWrapper = node;
                        }}
                        className={s.attributes_wrapper}>
                        <input className={s.input} name="attiributes" type="text"/>
                    </div>

                    <label className={s.label} htmlFor="description">Описание</label>
                    <input
                        ref={node => {
                            this.descriptionInput = node;
                        }}
                        className={s.input}
                        name="description"
                        type="text"/>

                    <Button
                        className={s.button}
                        onClick={this.createNewObject}>
                        Добавить
                    </Button>

                    <div className={cx(s.error, {
                        [s.error_active]: !isValid
                    })}
                    >
                        Необходимо заполнить все обязательные поля!
                    </div>

                </div>

            </div>
        );
    }
}


const mapDispatchToProps = {
    createNewObject
};
type DispatchProps = typeof mapDispatchToProps;

export const ObjectCreateNewContainer = connect(
    null,
    mapDispatchToProps
)(ObjectCreateNew);