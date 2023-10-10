import config from "@/config";
import { CreateMenuCategoryPayLoad, MenuCategoryState, UpdateMenuCategory } from "@/types/menuCategory";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState : MenuCategoryState = {
    items : [],
    isLoading : false,
    error : null
}

export const updateMenuCategory = createAsyncThunk("menuCategorySlice/updateMenuCategory", async(payload : UpdateMenuCategory, thunkApi) => {
    console.log(payload);
})

export const createMenuCategory = createAsyncThunk("menuCategorySlice/menuCategorySlice",async(payload :CreateMenuCategoryPayLoad, thunkApi ) => {
    const response = await fetch(`${config.apiBaseUrl}/menu-category`,{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(payload)
    })
   const menuCategories = await response.json();
   thunkApi.dispatch(setMenuCategories(menuCategories));
})

export const menuCategorySlice = createSlice({
    name : "menuCategorySlice",
    initialState : initialState,
    reducers : {
        setMenuCategories : (state,action) => {
            state.items = action.payload;
        }
    }
})
export const {setMenuCategories} = menuCategorySlice.actions;
export default menuCategorySlice.reducer;