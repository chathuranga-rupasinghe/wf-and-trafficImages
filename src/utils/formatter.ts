import {ITraficImageType, IWheatherTypes, IAreaMetaDataTypes} from '../types/location';

export const formatLocationData = (traphicImages: ITraficImageType[], weatherResponse:IWheatherTypes) => {
    const {area_metadata, items: [{forecasts}]} = weatherResponse; // Assume only one element contain in forecast array.


    let areas = area_metadata.map((area:IAreaMetaDataTypes, index: number) => {
        const matchedImage = traphicImages.find((traphicImage:ITraficImageType) => {
            return (area.label_location.latitude.toFixed(2) === traphicImage.location.latitude.toFixed(2) &&
            area.label_location.longitude.toFixed(2) === traphicImage.location.longitude.toFixed(2));
        });

        let areaWithForecasts = {
            ...area, 
            forecast: forecasts[index]['forecast'],
            matchedImage
        };

            return areaWithForecasts;
    });
    return areas;
    

};

