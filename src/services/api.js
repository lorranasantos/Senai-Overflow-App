import axios from "axios";

const api = axios.create({
    baseURL: "http://10.0.2.2:3333/",
});

// api.defaults.headers.common["Authorization"] = 
// `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoiQW5uZSBsaXYiLCJpYXQiOjE2MTU0MDAzNTYsImV4cCI6MTYxNTQwMzk1Nn0.XbcR_OsfvEYym5nVc3-3K50meyFHCFlkShrB6ttQsho`;
export {api};