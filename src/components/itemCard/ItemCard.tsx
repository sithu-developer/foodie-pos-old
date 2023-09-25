import { MenuCategoryType } from "@/types/menuCategory"
import { Box, Paper, Typography } from "@mui/material"
import Link from "next/link";
import CategoryIcon from '@mui/icons-material/Category';

interface Prop {
    menuCategory : MenuCategoryType
}

const ItemCard = ({menuCategory }: Prop) => {
    return (
        <Link href={`/backoffice/menu-category/${menuCategory.id}`} style={{width : "200px", textDecoration: "none"}}>
        <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={3} sx={{display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center"}}>
        <CategoryIcon/>
        <Typography>{menuCategory.name}</Typography>
        </Paper>
      </Box>
      </Link>
    )
}

export default ItemCard ;