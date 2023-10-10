import BackofficeLayout from "@/components/layout/Layout";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { updateMenuCategory } from "@/store/slices/menuCategorySlice";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const UpdateMenuCategories = () => {
    const [newUpdateMenuCategory, setNewUpdateMenuCategory] = useState<string>("");
    const dispatch = useAppDispatch();

    const menuCategories = useAppSelector((store) => store.menuCategory.items)
    const router = useRouter();
    const menuCategoryId = Number(router.query.id);
    const menu = menuCategories.find(element => element.id === menuCategoryId)
    if (!menu) return null;
    return (
        <BackofficeLayout>
            <Box sx={{display : "flex", flexDirection: "column", gap: "10px"}}>
                <TextField id="name" label="name" defaultValue={menu.name} sx={{width : "fit-content"}} onChange={(event) => {
                    setNewUpdateMenuCategory(event.target.value);
                }}/>
                <Button variant="contained" sx={{width : "fit-content"}} onClick={() => dispatch(updateMenuCategory({id: menuCategoryId, name : newUpdateMenuCategory}))}>Update Menu</Button>
            </Box>
        </BackofficeLayout>
    )
}
export default UpdateMenuCategories;