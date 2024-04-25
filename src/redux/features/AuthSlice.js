import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/constant.js";

// auth register action
export const registerUserAction = createAsyncThunk(
    "auth/register",
    async (payload, { rejectWithValue, getState, dispatch }) => {
        try {
            const { data } = await axios.post(`${BASE_URL}/api/v1/auth/register`, payload);
            console.log(payload)
            localStorage.setItem("usertoken", JSON.stringify(data.token));
            return data;
        } catch (error) {
            if (!error.response) throw error;
            return rejectWithValue(error);
        }
    }
);

// auth login action
export const loginUserAction = createAsyncThunk("auth/login", async (payload, { rejectWithValue }) => {
    try {
         console.log(payload)
        const { data } = await axios.post(`${BASE_URL}/api/v1/auth/login`, payload);
          localStorage.setItem("userdetails", JSON.stringify(data.user));
        localStorage.setItem("authenticationtoken", JSON.stringify(data.token));
        return data;
    } catch (error) {
        if (!error.response) throw error;
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
            
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        // register
        builder.addCase(registerUserAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.user;
            state.error = null;
        });
        builder.addCase(registerUserAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.response.data.message;
        });

        // login
        builder.addCase(loginUserAction.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.user;
            state.error = null;
        });
        builder.addCase(loginUserAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.response.data.message;
        });
     
    },
});

export default authSlice.reducer;