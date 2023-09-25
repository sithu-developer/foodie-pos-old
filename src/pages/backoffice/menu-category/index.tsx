import CreateMenuCategory from "@/components/createMenuCategory/CreateMenuCategory";
import ItemCard from "@/components/itemCard/ItemCard";
import BackofficeLayout from "@/components/layout/Layout";
import config from "@/config";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setMenuCategories } from "@/store/slices/menuCategorySlice";
import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react";

const MenuCategory = () => {
   // const [menuCategories, setMenuCategories] = useState<MenuCategoryType[]>([])
   const menuCategories = useAppSelector((store) => store.menuCategory.items )
   const dispatch = useAppDispatch();
    const [open, setOpen ] = useState<boolean>(false);

    const readMenuCategories = async() => {
        const response = await fetch(`${config.apiBaseUrl}/menu-category`);
        const readedMenuCategories = await response.json();
        //setMenuCategories(readedMenuCategories)
        dispatch(setMenuCategories(readedMenuCategories))
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
            <CreateMenuCategory openProp={open} setOpen={setOpen} />
            <Box sx={{display : "flex", flexWrap : "wrap"}}>
                {menuCategories.map(element => <ItemCard key={element.id} menuCategory={element}/>)}
            </Box>
        </Box>
        </BackofficeLayout>
    )
}
export default MenuCategory;