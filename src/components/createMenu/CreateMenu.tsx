import config from "@/config";
import { CreateMenuPayLoad, MenuType } from "@/types/menu";
import { Box, Button, Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
    openProp : boolean
    setOpen : (value : boolean ) => void;
    setMenus : (value : MenuType[]) => void;
}

const CreateMenu = ({openProp,setOpen, setMenus} : Props) => {
    const [createdMenu, setMenu ] = useState<CreateMenuPayLoad>({name: "", price : 0})

    const createMenu = async() => {
       const response = await fetch(`${config.apiBaseUrl}/menu`,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(createdMenu)
        })
       const menus = await response.json();
       console.log(menus, "get")
       setMenus(menus);
    };


    return (
        <Dialog open={openProp} onClose={() => setOpen(false)}>
            <DialogTitle>Create Menu</DialogTitle>
            <DialogContent>
                <Box sx={{display: "flex", flexDirection:"column",alignItems: "center", gap: "10px", margin: "0 auto"}}>
                <TextField placeholder="name" onChange={(event) => {
                    setMenu({...createdMenu, name : event.target.value})
                }}/>
                <TextField placeholder="price" onChange={(event) => {
                    setMenu({...createdMenu, price : Number(event.target.value)})
                }}/>
                <Button variant="contained" sx={{width: "fit-content"}} onClick={() => {
                    createMenu();
                    setOpen(false);
                }}>Create Menu</Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default CreateMenu;