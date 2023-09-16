// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MenuType } from '@/types/menu'
import type { NextApiRequest, NextApiResponse } from 'next'


const menus : MenuType[] = []

export default function handler(req: NextApiRequest,res: NextApiResponse<MenuType[]>) {
    if(req.method === "POST") {
        const menuId = menus.length > 0 ? menus[menus.length - 1].id + 1 : 1;
        const menu = {...req.body, id : menuId, isArchived: false, assetUrl : "https://www.averiecooks.com/wp-content/uploads/2020/04/yellowcurry-11.jpg"}
        menus.push(menu);
        res.status(200).send(menus);
    }else if (req.method === "GET") {
        res.send(menus);
    }
}
