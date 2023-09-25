import config from "@/config";
import { useAppDispatch } from "@/store/hook";
import { setMenuCategories } from "@/store/slices/menuCategorySlice";
import { CreateMenuCategoryPayLoad, MenuCategoryType } from "@/types/menuCategory";
import { Dialog, DialogTitle, DialogContent, Box, TextField, Button, Switch, FormControlLabel } from "@mui/material";
import { useState } from "react";


interface Props {   
    openProp : boolean
    setOpen : (value : boolean ) => void;
}

const defaultNewMenuCategory = {name: "", isAvaliable : true};

const CreateMenuCategory = ({openProp,setOpen } : Props) => {
    const [createdMenuCategory, setNewMenuCategory ] = useState<CreateMenuCategoryPayLoad>(defaultNewMenuCategory)
    const dispatch = useAppDispatch();

    const createMenuCategory = async() => {
       const response = await fetch(`${config.apiBaseUrl}/menu-category`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(createdMenuCategory)
        })
       const menuCategories = await response.json();
      // setMenuCategories(menuCategories);
        dispatch(setMenuCategories(menuCategories))
       setNewMenuCategory(defaultNewMenuCategory)
    };


    return (
        <Dialog open={openProp} onClose={() => setOpen(false)}>
            <DialogTitle>Create Menu Category</DialogTitle>
            <DialogContent>
                <Box sx={{display: "flex", flexDirection:"column",alignItems: "center", gap: "10px", margin: "0 auto"}}>
                <TextField placeholder="name" onChange={(event) => {
                    setNewMenuCategory({...createdMenuCategory, name : event.target.value})
                }}/>
                <FormControlLabel control={<Switch defaultChecked />} label="Avilable" onChange={(event,value) => {
                    setNewMenuCategory({...createdMenuCategory,isAvaliable : value})
                }} />
                <Button variant="contained" sx={{width: "fit-content"}} onClick={() => {
                    createMenuCategory();
                    setOpen(false);
                }}>Create</Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default CreateMenuCategory;