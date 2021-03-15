import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 }
]

export default function DateTimePicker() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [value, setValue] = React.useState(null);

    const defaultProps = {
        options: top100Films,
        getOptionLabel: (option: any) => option.title,
    };

    const flatProps = {
        options: top100Films.map((option) => option.title),
    };


    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    return (
        <>
            <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue=""
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Autocomplete
                {...defaultProps}
                id="debug"
                debug
                renderInput={(params) => <TextField {...params} label="debug" margin="normal" />}
            />
        </>
    );
}
