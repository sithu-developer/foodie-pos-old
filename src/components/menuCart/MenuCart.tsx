import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import { MenuType } from "../../types/menu";
import Link from "next/link";

interface Props {
    menu : MenuType
}

const MenuCart = ({menu} : Props) => {

    return (
    <Link href={`menu/${String(menu.id)}`} style={{textDecoration : "none", width : "200px"}}>
        <Card sx={{ maxWidth: "300px" ,margin :"10px"}}>
            <CardMedia
              component="img"
              height="100"
              image={menu.assetUrl}
            />
            <CardContent sx={{display : "flex",flexDirection: "column", alignItems: "center",gap : "5px", bgcolor: "lightgray"}}>
              <Typography sx={{fontSize : "18px"}}>
                {menu.name}
              </Typography>
              <Typography >
                ${menu.price}
              </Typography>
            </CardContent>
        </Card>
    </Link>
    )
}

export default MenuCart;