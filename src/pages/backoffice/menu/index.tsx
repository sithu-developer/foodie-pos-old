import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react";
import MenuCart from "@/components/menuCart/MenuCart";
import { MenuType } from "@/types/menu";
import BackofficeLayout from "@/components/layout/Layout";
import config from "@/config";
import CreateMenu from "@/components/createMenu/CreateMenu";


const MenuPage = () => {
    const [menus, setMenus ] = useState<MenuType[]>([])
    const [open, setOpen ] = useState<boolean>(false);

    useEffect(() => {
         fetchMenu();
     }, []);

    const fetchMenu = async() => {
        const response = await fetch(`${config.apiBaseUrl}/menu`);
        const currentMenus = await response.json();
        setMenus(currentMenus); 
    }

    return (
        <BackofficeLayout>
        <Box>
            <Box sx={{display: "flex", justifyContent: "flex-end",mr : 3}}>
                <Button variant="contained" onClick={() => setOpen(true)}>Create Menu</Button>
            </Box>
            <CreateMenu openProp={open} setOpen={setOpen} setMenus={setMenus}/>
            <Box sx={{display : "flex", flexWrap : "wrap"}}>
                {menus.map(element => <MenuCart key={element.id} menu={element}/>)}
            </Box>
        </Box>
        </BackofficeLayout>
    )
}
export default MenuPage;