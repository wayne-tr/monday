import axios from "axios";

export const https = axios.create({
    baseURL: "https://swapi.dev/api/",
});

https.interceptors.request.use((config) => {
    return {
        ...config, 
        headers: {
            Authorization: 'Bearer' + 'samplestring',
        }
        
    }
    

}, (error) => {
    return Promise.reject(error);
});

https.interceptors.response.use((response) => {
    // console.log(response)
    // Get only the data part in the response
    const {data} = response;
    return data;
}, (error) => {
    return Promise.reject(error);
});