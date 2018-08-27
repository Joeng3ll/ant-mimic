import * as React from 'react'

export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger'
export type ButtonSize = 'large' | 'small'
export type ButtonShape = 'circle'

export interface ButtonProps {
    type?: ButtonType;
    htmlType?: string;
    icon?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    onClick?: React.FormEventHandler<any>;
    onMouseUp?: React.FormEventHandler<any>;
    onMouseDown?: React.FormEventHandler<any>;
    loading?: boolean | { delay?: number };
    disabled?: boolean;
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
  }

export default class Button extends React.Component {
    render() {
        return(
            <div>
                test
           </div>
        )
    }
}