import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
    toast.error(error.message);
    if (!error.response?.data.Message)
        toast.error(error.response?.data);
    else
        toast.error(error.response?.data.Message);
    return Promise.reject(error);
});
let http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
};
export default http