import { Method } from "axios";

export const fetchTraficImagesApi: {url: string, method: Method}  = {
    url: "https://api.data.gov.sg/v1/transport/traffic-images",
    method: "get"
};

export const fetchLocationsApi: {url: string, method: Method}  = {
    url: "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
    method: "get"
};

