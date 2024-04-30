import { BASE_URL } from "../constants/constant";
import axios from "axios"
import { toast } from "react-toastify";
const createpost= async(addstory,category)=>{
        // console.log(addstory,category)
       const token = JSON.parse(localStorage.getItem("authenticationtoken"));
            try {
                const { data } = await axios.post(
                   ` ${BASE_URL}/api/v1/post`,
                    { addstory, category },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                ); 
                    toast.success("Story created successfully");
                     return data;
            } catch (error) {
                if (!error.response) {
                    toast.error(error.message);
                    throw error;
                }
                 toast.error(error.response.data.message);
            }
}

//get all story
const getallpost = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/post/getallpost`);
        return data;
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
            throw error;
        }
        toast.error(error.response.data.message);
    }
};

const getallpostbycategory = async (category) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/post/${category}`);
        return data;
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
            throw error;
        }
        toast.error(error.response.data.message);
    }
};
const getsinglepost = async (postid) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/post/getsinglepost/${postid}`);
        return data;
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
            throw error;
        }
        toast.error(error.response.data.message);
    }
};

const getuserposts = async () => {
    const token = JSON.parse(localStorage.getItem("authenticationtoken"));
    try {
        const { data } = await axios.get(`${BASE_URL}/api/v1/post/userpost`, {
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

const updatepost = async (postid, { category, addstory }) => {
    
    try {
        const { data } = await axios.put(
            `${BASE_URL}/api/v1/post/updatepost/${postid}`,
            { addstory, category }
           
        );
        toast.success("Story updated successfully");
        return data;
    } catch (error) {
        if (!error.response) {
            toast.error(error.message);
            throw error;
        }
        toast.error(error.response.data.message);
    }
};

export {createpost,getallpost,getallpostbycategory,getsinglepost,getuserposts,updatepost}