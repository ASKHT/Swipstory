import axios from "axios";
import { BASE_URL } from "../constants/constant.js"
import { toast } from "react-toastify";

const bookmarkpost = async (postid) => {
    try {
        const token = JSON.parse(localStorage.getItem("authenticationtoken"));
        const { data } = await axios.get(`${BASE_URL}/api/v1/user/bookmark/${postid}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
            throw error;
        }
        toast.error(error.response.data.message);
    }
};

const likepost = async (payload) => {
    try {
        console.log(payload)
        const token = JSON.parse(localStorage.getItem("authenticationtoken"));
        const { data } = await axios.put(`${BASE_URL}/api/v1/user/like`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return data;
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
            throw error;
        }
        toast.error(error.response.data.message);
    }
};

const getallbookmarkposts = async () => {
    try {
        const token = JSON.parse(localStorage.getItem("authenticationtoken"));
        const { data } = await axios.get(`${BASE_URL}/api/v1/user/allBookmark`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(data)
        return data;
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
            throw error;
        }
        toast.error(error.response.data.message);
    }
};

export { bookmarkpost, likepost, getallbookmarkposts };