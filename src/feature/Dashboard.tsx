import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSelector, useDispatch } from 'react-redux'
import { fetchLocations } from '../actions/location';
import { ILocationType } from '../types/location';
import { IAppStateType } from '../types/state';
import './Dashboard.css';
import weatherIcon from '../assets/icons/cloudy.png';
import { WheatherImage } from '../components/WheatherImage'
import { WheatherForcast } from '../components/WheatherForcast'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { infoMessage, warningMesssage } from '../config/messageConfig'
import { Message } from '../components/Message'
const MainWrapper = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());
    const [selectedTime, setSelectedTime] = React.useState<Date | null>(new Date());
    const [imgUrl, setImgUrl] = React.useState('');
    const [wheatherForcast, setWheatherForcast] = React.useState('');
    const [selectedLocation, setSelectedLocation] = React.useState('');
    const { locations } = useSelector((state: IAppStateType) => {
        return state?.location;
    });
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1)

    const dispatch = useDispatch()

    React.useEffect(() => {
        if (selectedTime) {
            const tempTime = selectedTime?.toISOString().split('T') || [];

            const dateTime = selectedDate?.toISOString()?.slice(0, -13) + tempTime[1].slice(0, -5)
            dispatch(fetchLocations(dateTime));
        }
    }, [selectedTime, selectedDate])


    const defaultProps = {
        options: locations || [],
        getOptionLabel: (option: ILocationType) => option?.name,
    };

    const handleDateChange = (date: MaterialUiPickersDate) => {
        // console.log('date =>', );
        setSelectedDate(date);
        setWheatherForcast('');
        setImgUrl('');
        setSelectedLocation('');

    };
    const handleTimeChange = (time: MaterialUiPickersDate) => {
        setSelectedTime(time);
        setWheatherForcast('');
        setImgUrl('');
        setSelectedLocation('');

    };

    const changeLoacation = (val: ILocationType | null) => {
        const selectedLocation = locations?.find((item: ILocationType) => {
            return item?.name === val?.name;
        })
        setSelectedLocation(val?.name || '');
        setImgUrl(selectedLocation?.matchedImage?.image || '');
        setWheatherForcast(selectedLocation?.forecast || '');
    }

    return (
        <div className="mainWrapper">
            <div className="contentWrapper">
                <div className="faoreCastHeading"><span className="cloudyPngSpan"><img src={weatherIcon} className="cloudyPng" /></span>Weather Forecast Singapore</div>
                <div className="inputFields">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            maxDate={tomorrow}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                        <KeyboardTimePicker
                            className="timeWrapper"
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={selectedTime}
                            onChange={handleTimeChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    <Autocomplete
                        {...defaultProps}
                        id="debug"
                        className="autoCompleteWrapper"
                        onChange={(event, value) => changeLoacation(value)}
                        inputValue={selectedLocation}
                        debug
                        renderInput={(params) => <TextField {...params} label="Select the location" margin="normal" />}
                    />
                </div>
                {wheatherForcast && <WheatherForcast wheatherForcast={wheatherForcast} />}
                {imgUrl && <WheatherImage imgUrl={imgUrl} />}
                {!locations?.length && <Message message={warningMesssage} />}
                {(locations?.length !== 0 && !selectedLocation) && <Message message={infoMessage} />}
            </div>
        </div>
    );
}

export default MainWrapper;