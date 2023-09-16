import { Box, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { ReactNode } from "react";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CategoryIcon from '@mui/icons-material/Category';
import Link from "next/link";


interface Prop {
    children : ReactNode 
}

const BackofficeLayout =  ({children} : Prop) => {
    return (
    <Box>
        <Box sx={{bgcolor: "#164B60" , height: "80px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Typography variant='h3' sx={{color: "white"}}>Foodie App</Typography>
        </Box>
        <Box sx={{display: "flex", }}>
            <Box sx={{width : "200px", bgcolor : "#A2FF86", minHeight: "100vh"}}>
                <Link href={"/backoffice/menu"} style={{textDecoration: "none"}}>
                    <ListItemButton>
                        <ListItemIcon>
                          <RestaurantMenuIcon sx={{fontSize: "16px", color: "#1B6B93"}} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{fontSize: "16px" , color: "#1B6B93"}}>Menu</Typography>} />
                    </ListItemButton>
                </Link>
                <Link href={"/backoffice/menuCategory"} style={{textDecoration: "none"}}>
                    <ListItemButton>
                        <ListItemIcon>
                          <CategoryIcon sx={{fontSize: "16px", color: "#1B6B93"}} />
                        </ListItemIcon>
                        <ListItemText primary={<Typography sx={{fontSize: "16px" , color: "#1B6B93"}}>MenuCategory</Typography>} />
                    </ListItemButton>
                </Link>
            </Box>
            <Box sx={{pt: "20px", pl : "20px", width: "100%"}}>{children}</Box>
        </Box>
    </Box>
    )
}

export default BackofficeLayout;