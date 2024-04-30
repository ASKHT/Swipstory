import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/constant.js";

// auth register action
export const registeruserslice = createAsyncThunk(
    "auth/register",
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.post(`${BASE_URL}/api/v1/auth/register`, payload);
            // console.log(payload)
            localStorage.setItem("authenticationtoken", JSON.stringify(data.token));
            localStorage.setItem("userdetails", JSON.stringify(data.user));
            return data;
        } catch (error) {
            if (!error.response) throw error;
            return rejectWithValue(error);
        }
    }
);

// auth login action
export const loginuserslice = createAsyncThunk("auth/login", async (payload, { rejectWithValue }) => {
    try {
        //  console.log(payload)
        const { data } = await axios.post(`${BASE_URL}/api/v1/auth/login`, payload);
        localStorage.setItem("authenticationtoken", JSON.stringify(data.token));
        localStorage.setItem("userdetails", JSON.stringify(data.user));
        return data;
    } catch (error) {
        if (!error.response) throw error;
        return rejectWithValue(error);
    }
});

export const getuserslice = createAsyncThunk("auth/get", async (rejectWithValue) => {
    try {
        const token = JSON.parse(localStorage.getItem("authenticationtoken"));
        const { data } = await axios.get(`${BASE_URL}/api/v1/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        localStorage.setItem("userdetails", JSON.stringify(data.user));
        return data;
    } catch (error) {
        console.log(error);
        if (!error.response) {
            toast.error(error.message);
            throw error;
        }
        toast.error(error.response.data.message);
        return rejectWithValue(error);
    }
});




let userauth;
const userFromLocalStorage = JSON.parse(localStorage.getItem("userdetails"));
if (userFromLocalStorage) {
    userauth = userFromLocalStorage;
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        data: userauth,
        error: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("authenticationtoken");
            localStorage.removeItem("userdetails");
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        // register
        builder.addCase(registeruserslice.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registeruserslice.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.user;
            state.error = null;
        });
        builder.addCase(registeruserslice.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.response.data.message;
        });

        // login
        builder.addCase(loginuserslice.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginuserslice.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.user;
            state.error = null;
        });
        builder.addCase(loginuserslice.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.response.data.message;
        });

          builder.addCase(getuserslice.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getuserslice.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.user;
            state.error = null;
        });
        builder.addCase(getuserslice.rejected, (state, action) => {
            state.loading = false;
            console.log(action);
            // state.error = action.payload.response.data.message;
        });
     
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;