import config from "@/config";
import { CreateMenuPayLoad, MenuState, UpdateMenu } from "@/types/menu";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState : MenuState = {
    items : [],
    isLoading : false,
    error : null
}

export const updateMenu = createAsyncThunk("menuSlice/updateMenu", async(payload : UpdateMenu, thunkApi) => {
    console.log(payload);
})


export const handleCreateMenu = createAsyncThunk("menuSlice/createMenu1", async(payload : CreateMenuPayLoad , thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/menu`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }) 
    const menus = await response.json();
    thunkApi.dispatch(setMenus(menus));
})

const menuSlice = createSlice({
    name: "menuSlice",
    initialState : initialState,
    reducers : {
        setMenus : (state, action) => {
            state.items = action.payload;
        }
    }
})
export const {setMenus} = menuSlice.actions;
export default menuSlice.reducer;