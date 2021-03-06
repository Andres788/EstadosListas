import React from 'react';
import './styles.css';

const Icon = (props) => {
    return (
        <div className={`t-icon ${props.iconModifier}`}>
            {props.source}
        </div>
    )
}

export default Icon;