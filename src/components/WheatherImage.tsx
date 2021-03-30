import React, { Fragment } from 'react';
import { IWheatherImage } from '../types/location';
import './Wheather.css';

export const WheatherImage = ({ imgUrl }: IWheatherImage) => {
    return (
        < Fragment>
            <img className="locationImg" src={imgUrl} />
        </Fragment>
    )
}