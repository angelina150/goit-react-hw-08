import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const contactsInstance = axios.create({
//   baseURL: "https://connections-api.goit.global",
//   // headers: { Authorization: "Bearer " },
// });
axios.defaults.baseURL = "https://connections-api.goit.global";
// axios.defaults.headers.common["Authorization"] = `Bearer anhelina_chyhyrova`;
export const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ number, name }, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", {
        number,
        name,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
