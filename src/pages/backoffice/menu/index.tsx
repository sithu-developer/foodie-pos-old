import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react";
import MenuCart from "@/components/menuCart/MenuCart";
import BackofficeLayout from "@/components/layout/Layout";
import config from "@/config";
import CreateMenu from "@/components/createMenu/CreateMenu";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setMenus } from "@/store/slices/menuSlice";


const MenuPage = () => {
    //const [menus, setMenus ] = useState<MenuType[]>([])
    const menus = useAppSelector((store) => store.menu.items)
    const dispatch = useAppDispatch();
    const [open, setOpen ] = useState<boolean>(false);

    useEffect(() => {
        // fetchMenu();
     }, []);

    return (
        <BackofficeLayout>
        <Box>
            <Box sx={{display: "flex", justifyContent: "flex-end",mr : 3}}>
                <Button variant="contained" onClick={() => setOpen(true)}>Create Menu</Button>
            </Box>
            <CreateMenu openProp={open} setOpen={setOpen}/>
            <Box sx={{display : "flex", flexWrap : "wrap"}}>
                {menus.map(element => <MenuCart key={element.id} menu={element}/>)}
            </Box>
        </Box>
        </BackofficeLayout>
    )
}
export default MenuPage;