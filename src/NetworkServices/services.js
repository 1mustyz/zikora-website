import axios from 'axios';
const conn_url = 'https://zikora-node.herokuapp.com'

const config = {
    headers: {
        "content-type": "application/json",
    },
};

export const sendEmail = async (data) => {

    try {
        const uri = `${conn_url}/zikora-api/v1/send-email-to-zkr-support`
        const response = await axios.post(uri, data, config);
        return {data: response?.data, status:  response?.status};
        
    } catch (error) {
        return {data: error.response?.data, status:  error.response?.status};
        
    }
  
}