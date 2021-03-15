import axios, {AxiosRequestConfig, Method, Canceler} from 'axios'; 

export const apiCall = (initConfig: {url: string, method:Method}, params: any | undefined = undefined, headers = undefined) => {
    console.log({params});

    const config: AxiosRequestConfig = {
        ...initConfig,
        data: params,
      };

      console.log('test',  axios(config));
    
    return axios(config);
      
};

