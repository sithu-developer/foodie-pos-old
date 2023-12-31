import config from "@/config";
import { useAppDispatch } from "@/store/hook";
import { handleCreateMenu, setMenus } from "@/store/slices/menuSlice";
import { CreateMenuPayLoad, MenuType } from "@/types/menu";
import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
    openProp : boolean
    setOpen : (value : boolean ) => void;
}

const defaultNewMenu = {name: "", price : 0};

const CreateMenu = ({openProp,setOpen} : Props) => {
    const [createdMenu, setNewMenu ] = useState<CreateMenuPayLoad>(defaultNewMenu);
    const dispatch = useAppDispatch();

    const createMenu = async() => {
        dispatch(handleCreateMenu(createdMenu));
       setNewMenu(defaultNewMenu);
    };


    return (
        <Dialog open={openProp} onClose={() => setOpen(false)}>
            <DialogTitle>Create Menu</DialogTitle>
            <DialogContent>
                <Box sx={{display: "flex", flexDirection:"column",alignItems: "center", gap: "10px", margin: "0 auto"}}>
                <TextField placeholder="name" onChange={(event) => {
                    setNewMenu({...createdMenu, name : event.target.value})
                }}/>
                <TextField placeholder="price" onChange={(event) => {
                    setNewMenu({...createdMenu, price : Number(event.target.value)})
                }}/>
                <Button variant="contained" sx={{width: "fit-content"}} onClick={() => {
                    createMenu();
                    setOpen(false);
                }}>Create</Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default CreateMenu;