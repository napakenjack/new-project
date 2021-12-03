import axios from 'axios';


const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTM5ZjU5Y2E4ODExY2I0NTdmMGQ5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODUyMTczMiwiZXhwIjoxNjM4NzgwOTMyfQ.5ZO_5ulm690vqyvKZa9XNtohLdBSmSCsVOE7j-z3Wrc";

export const publicRequest =  axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer + ${TOKEN}`},
});