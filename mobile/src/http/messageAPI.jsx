import { $authHost } from ".";


export const createMessage = async (text, senderId, recipientId) => {
    const {data} = await $authHost.post('api/message', {text, senderId, recipientId})
    return data 
};

export const fetchMessage = async (senderId, recipiendId) => {
    const {data} = await $authHost.get('api/message?senderId='+senderId+'&recipientId='+recipiendId)
    return data
};
