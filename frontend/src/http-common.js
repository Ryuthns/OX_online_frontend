import axios from "axios";
export default axios.create({
    baseURL: "https://xoonlinebackend.herokuapp.com/api",
    headers: {
        "Content-type": "application/json",
        
    },
});
