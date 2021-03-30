import React, { Fragment } from 'react';
import { IMessage } from '../types/location';
import './Wheather.css';

export const Message = ({ message }: IMessage) => {
    return (
        < Fragment>
            <p className="message">{message}</p>
        </Fragment>
    )
}