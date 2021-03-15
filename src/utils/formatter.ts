export const formatLocationData = (traphicImages: any, weatherResponse:any) => {
    // console.log({traphicImages, weatherResponse});
    const {area_metadata, items: [{forecasts}]} = weatherResponse;


    let areas = area_metadata.map((area:any, index: number) => {
            // console.log('area =>', area.label_location);
        const matchedImage = traphicImages.find((traphicImage:any) => {
            return (parseFloat(area.label_location.latitude).toFixed(2) === parseFloat(traphicImage.location.latitude).toFixed(2) &&
            parseFloat(area.label_location.longitude).toFixed(2) === parseFloat(traphicImage.location.longitude).toFixed(2));
        });

        let areaWithForecasts = {
            ...area, 
            forecast: forecasts[index]['forecast'],
            matchedImage
        };

            return areaWithForecasts;
    });

    console.log({areas});
    

};

