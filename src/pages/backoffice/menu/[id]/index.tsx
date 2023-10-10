import BackofficeLayout from "@/components/layout/Layout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { updateMenu } from "@/store/slices/menuSlice";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenuPage = () => {
    const [newUpdateMenu, setNewUpdateMenu] = useState<string>("");
    const dispatch = useAppDispatch();

    const menus = useAppSelector((store) => store.menu.items);
    const router =  useRouter();
    const menuId = Number (router.query.id);
    const menu =  menus.find(element => element.id === menuId);

    if(!menu) return null;

    return (
        <BackofficeLayout>
            <Box sx={{display : "flex", flexDirection : "column", gap: "10px"}}>
                <TextField id="name" label="name" variant="outlined" defaultValue={menu.name} sx={{width : "fit-content"}} onChange={(event) => {
                    setNewUpdateMenu(event.target.value);
                } }/>
                <Button variant="contained" sx={{width: "fit-content"}} onClick={() => dispatch(updateMenu({id: menuId, name : newUpdateMenu}))}>Update Menu</Button>
            </Box>
        </BackofficeLayout>
    )
}
export default UpdateMenuPage;