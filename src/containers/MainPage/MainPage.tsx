import React, {Component} from 'react';
import {connect,} from 'react-redux';
import cx from "classnames";
import {IRootState} from "../../reducers";

import {Layout} from "../../components/Layout";
import {Button} from "../../components/Button";
import {ObjectsList} from "../../components/ObjectsList";
import {ObjectCreateNew} from "../ObjectCreateNew";

import {
    addToBottom,
    addToTop,
    deleteFirst,
    deleteLast,
    setEntities
} from "../../reducers/dummyObjects/dummyObjects.reducer";

import {actionButton, objectsData, viewButtons} from './MainPage.mock'

const s = require('./MainPage.module.sass');

interface IState {
    currentView: string;
}

interface actionButton {
    label: string;
    action: string;
    dispatch: string;
}

type IProps = StateProps & DispatchProps;

export class MainPage extends Component<IProps, IState> {
    state = {
        currentView: viewButtons.LIST
    };

    componentDidMount(): void {
        this.props.setEntities(objectsData)
    }

    changeView = (view): void => {
        this.setState({
            currentView: view
        })
    };

    renderActionButtons = (button: actionButton): React.ReactNode => {
        return (
            <Button key={button.action} onClick={() => this.props[`${button.dispatch}`]()}>
                {button.label}
            </Button>
        )
    };

    render(): React.ReactElement {
        const { dummyObjects } = this.props;
        const { currentView } = this.state;

        return (
            <Layout>
                <div className={s.actionButtons_wrapper}>
                    {actionButton.map(this.renderActionButtons)}
                </div>
                <div className={s.title_wrapper}>
                    <h4>Список объектов</h4>
                    <div className={s.title_buttons}>
                        <Button
                            className={cx(s.button, s.button_list, {
                                [s.button_active]: currentView === viewButtons.LIST
                            })}
                            onClick={() => this.changeView(viewButtons.LIST)}>
                            <span
                                className={cx(s.icon, s.icon_list, {
                                [s.icon_active]: currentView === viewButtons.LIST
                                })}
                            />
                        </Button>
                        <Button
                            className={cx(s.button, s.button_blocks, {
                                [s.button_active]: currentView === viewButtons.BLOCKS
                            })}
                            onClick={() => this.changeView(viewButtons.BLOCKS)}>
                            <span
                                className={cx(s.icon, s.icon_blocks, {
                                    [s.icon_active]: currentView === viewButtons.BLOCKS
                                })}
                            />
                        </Button>
                    </div>
                </div>
                <div className={s.objectList_wrapper}>
                    <ObjectsList
                        currentView={currentView}
                        dummyObjects={dummyObjects}/>
                </div>
                <div className={s.objectCreateNew_wrapper}>
                    <ObjectCreateNew />
                </div>
            </Layout>
        );
    }
}

const mapStateToProps = (state: IRootState) => ({
    dummyObjects: state.dummyObjects.entities
});

const mapDispatchToProps = {
    setEntities,
    addToTop,
    addToBottom,
    deleteFirst,
    deleteLast
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export const MainPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);