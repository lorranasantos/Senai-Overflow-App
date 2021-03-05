import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.2.2:3333/",
});

api.defaults.headers.common["Authorization"] = 
`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiQW5uZSBsaXYiLCJpYXQiOjE2MTQ5NzE1OTAsImV4cCI6MTYxNDk3NTE5MH0.P-T-MyKPfmMDZmF9HM8N3S1kggV0fPfwaA0deIRo8-U`;
export {api};