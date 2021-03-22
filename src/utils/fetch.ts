import axios, {AxiosRequestConfig, Method, Canceler} from 'axios'; 

export const apiCall = (initConfig: {url: string, method:Method}, params: object | undefined = undefined, headers = undefined) => {

    const config: AxiosRequestConfig = {
        ...initConfig,
        data: params,
      };
    
    return axios(config);
      
};

