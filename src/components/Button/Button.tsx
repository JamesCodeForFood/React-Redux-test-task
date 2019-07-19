import React, { PureComponent} from 'react';
import cx from 'classnames';

const s = require('./Button.module.sass');

interface IButtonProps {
    onClick: () => {} | void;
    children?: React.ReactNode;
    type?: "submit" | "button" | "reset";
    className?: string;
}

export class Button extends PureComponent<IButtonProps> {
    render(): React.ReactElement {
        const { onClick, children, type = "submit", className } = this.props;
        return (
            <button
                type={type}
                onClick={onClick}
                className={cx(s.button, {
                    [`${className}`]: className
                })}
            >
                {children}
            </button>
        );
    }
}