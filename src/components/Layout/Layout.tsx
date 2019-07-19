import React, { PureComponent } from 'react';

const s = require('./Layout.module.sass');

export class Layout extends PureComponent {
    render(): React.ReactElement {
        return (
            <div className={s.wrapper}>
                {this.props.children}
            </div>
        );
    }
}