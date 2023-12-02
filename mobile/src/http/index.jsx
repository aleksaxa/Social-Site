import  Axios  from "axios";



const $host = Axios.create({
    baseURL: 'http://192.168.29.236:5000/'
});

const $authHost = Axios.create({
    baseURL: 'http://192.168.29.236:5000/'
});

const authInterceptor = config => {
    config.headers.authorization = 'Bearer ' + AsyncStorage.getItem('token');
    return config;
};

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
};
