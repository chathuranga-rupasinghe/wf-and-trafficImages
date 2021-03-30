import React, { Fragment } from 'react';
import { IWheatherForcast } from '../types/location';
import './Wheather.css';

export const WheatherForcast = ({ wheatherForcast }: IWheatherForcast) => {
    return (
        < Fragment>
            <p className="weatherForeCastText">{wheatherForcast}</p>
        </Fragment>
    )
}