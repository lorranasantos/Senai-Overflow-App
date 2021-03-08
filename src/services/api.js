import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common["Authorization"] = 
`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiQW5uZSBsaXYiLCJpYXQiOjE2MTUyMzA3MzEsImV4cCI6MTYxNTIzNDMzMX0.dHlmpmS9JkCXzQBdNZ9BmsKUoMipBsoRMDirTG6J58E`;
export {api};