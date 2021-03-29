import axios, {AxiosRequestConfig, Method, Canceler} from 'axios'; 

export const apiCall = (initConfig: {url: string, method:Method}, params: object | undefined = undefined, headers = undefined) => {

    const config: AxiosRequestConfig = {
        ...initConfig,
      };
      switch(initConfig?.method) {
        case 'get':
          config.params = params;
          break;
        case 'post':
          config.data = params;
          break;
        default:
          config.params = params;
      }
    
    return axios(config);
      
};

