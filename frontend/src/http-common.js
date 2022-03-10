import axios from "axios";
export default axios.create({
    baseURL: "https://oxonline.herokuapp.com/api",
    headers: {
        "Content-type": "application/json",
        
    },
});
