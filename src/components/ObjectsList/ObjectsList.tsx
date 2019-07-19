import React, { PureComponent } from 'react';
import { IDummyObject } from "../../reducers/dummyObjects/dummyObjects.model";
import cx from "classnames";
import {viewButtons} from "../../containers/MainPage/MainPage.mock";

const s = require('./ObjectsList.module.sass');

interface IProps {
    currentView: string;
    dummyObjects: ReadonlyArray<IDummyObject>;
}

export class ObjectsList extends PureComponent<IProps> {

    renderObjects = (object: IDummyObject, index: number): React.ReactNode => {
        const { currentView } = this.props;
        return (
            <div key={index}
                className={cx(s.wrapper, {
                    [s.wrapper_list]: currentView === viewButtons.LIST,
                    [s.wrapper_block]: currentView === viewButtons.BLOCKS
                })}
            >
                <div className={cx(s.title_wrapper, {
                        [s.title_wrapper_list]: currentView === viewButtons.LIST,
                        [s.title_wrapper_block]: currentView === viewButtons.BLOCKS
                    })}
                >
                    <span className={cx(s.index, {
                            [s.index_list]: currentView === viewButtons.LIST,
                            [s.index_block]: currentView === viewButtons.BLOCKS
                        })}
                    >
                        {index + 1}
                    </span>
                    <div className={s.title}>
                        {object.title}
                    </div>
                </div>
                {object.attributes &&
                <div className={cx(s.attributes_wrapper, {
                        [s.attributes_wrapper_list]: currentView === viewButtons.LIST,
                        [s.attributes_wrapper_block]: currentView === viewButtons.BLOCKS
                    })}
                >
                    {object.attributes.map((attr, index) => {
                        return (
                            <div key={index} className={cx(s.attributes_child, {
                                     [s.attributes_child_list]: currentView === viewButtons.LIST,
                                     [s.attributes_child_block]: currentView === viewButtons.BLOCKS
                                 })}
                            >
                                {attr}
                            </div>
                        )
                    })}
                </div>}
                <div className={s.description}>
                    {object.description}
                </div>
            </div>
        )
    };

    render(): React.ReactElement {
        return (
            <div className={s.objects_wrapper}>
                {this.props.dummyObjects.map(this.renderObjects)}
            </div>
        );
    }
}