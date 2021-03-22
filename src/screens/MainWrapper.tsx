import React, { ObjectHTMLAttributes } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSelector, useDispatch } from 'react-redux'
import { fetchLocations } from '../actions/location';
import { ILocationType } from '../types/location';
import { IAppStateType } from '../types/state'

const MainWrapper = () => {
    const [selectedDate, setSelectedDate] = React.useState("2017-05-24T10:30");
    const [imgUrl, setImgUrl] = React.useState('');
    const [wheatherForcast, setWheatherForcast] = React.useState('');
    const { locations } = useSelector((state: IAppStateType) => {
        return state?.location;
    });
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchLocations(selectedDate));
    }, [selectedDate])

    const defaultProps = {
        options: locations || [],
        getOptionLabel: (option: ILocationType) => option?.name,
    };

    const handleDateChange = (date: string) => {
        setSelectedDate(date);
    };

    const changeLoacation = (val: ILocationType | null) => {
        const selectedLocation = locations?.find((item: ILocationType) => {
            return item?.name === val?.name;
        })
        setImgUrl(selectedLocation?.matchedImage?.image || '');
        setWheatherForcast(selectedLocation?.forecast || '');
    }

    return (
        <>
            <div>
                <TextField
                    id="datetime-local"
                    label="Next appointment"
                    type="datetime-local"
                    defaultValue={selectedDate}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => handleDateChange(event.target.value)}
                />
                <Autocomplete
                    {...defaultProps}
                    id="debug"
                    onChange={(event, value) => changeLoacation(value)}
                    debug
                    renderInput={(params) => <TextField {...params} label="Slect the location" margin="normal" />}
                />
                {wheatherForcast && <h1>{wheatherForcast}</h1>}
                {imgUrl && <img src={imgUrl} />}
            </div>
        </>
    );
}

export default MainWrapper;