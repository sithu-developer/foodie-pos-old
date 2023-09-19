import CreateMenuCategory from "@/components/createMenuCategory/CreateMenuCategory";
import ItemCard from "@/components/itemCard/ItemCard";
import BackofficeLayout from "@/components/layout/Layout";
import config from "@/config";
import { MenuCategoryType } from "@/types/menuCategory";
import { Box, Button, Typography } from "@mui/material"
import Link from "next/link";
import { useEffect, useState } from "react";

const MenuCategory = () => {
    const [menuCategories, setMenuCategories] = useState<MenuCategoryType[]>([])
    const [open, setOpen ] = useState<boolean>(false);

    const readMenuCategories = async() => {
        const response = await fetch(`${config.apiBaseUrl}/menu-category`);
        const readedMenuCategories = await response.json();
        setMenuCategories(readedMenuCategories)
    }

    useEffect(() => {
        readMenuCategories()
    },[])
    
    return (
        <BackofficeLayout>
        <Box>
            <Box sx={{display: "flex", justifyContent: "flex-end",mr : 3}}>
                <Button variant="contained" onClick={() => setOpen(true)}>Create Menu Category</Button>
            </Box>
            <CreateMenuCategory openProp={open} setOpen={setOpen} setMenuCategories={setMenuCategories}/>
            <Box sx={{display : "flex", flexWrap : "wrap"}}>
                {menuCategories.map(element => <ItemCard key={element.id} menuCategory={element}/>)}
            </Box>
        </Box>
        </BackofficeLayout>
    )
}
export default MenuCategory;