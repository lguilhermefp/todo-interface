import axios from 'axios';

const api = axios.create({
    baseURL: 'https://chronos.compraqui.app/api/tasks'
})

api.get('/')
    .then((res) => {
        console.log(res.data[1].title);
    })
    .catch((e)=>{
        console.log('error', e)
    });

export default api;
