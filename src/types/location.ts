export interface ILocationType {
    forecast: string;
    label_location: ILongLatTypes;
    matchedImage: IMachedImageType | undefined;
    name: string;
}

export interface IWheatherForcast {
    wheatherForcast: string;
}

export interface IMessage {
    message: string;
}

export interface IWheatherImage {
    imgUrl: string;
}

export interface IMachedImageType {
    camera_id: string;
    image: string;
}

export interface ITraficImageType {
    camera_id: string;
    image:  string;
    image_metadata: {
        height: number;
        width: number; 
        md5: string;
    }
    location: ILongLatTypes;
    timestamp:string;
}

export interface IWheatherTypes {
    api_info: {
        status: string;
    }
    area_metadata: IAreaMetaDataTypes[];
    items: IforcastType[]; 
}

export interface IAreaMetaDataTypes {
    label_location: ILongLatTypes;
    name: string;
}

interface IforcastType {
    forecasts: IforcastItemType[];
}

interface IforcastItemType {
    area: string; 
    forecast: string;
}
interface ILongLatTypes {
    latitude: number;
    longitude: number;
}