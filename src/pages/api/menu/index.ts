// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MenuType } from '@/types/menu'
import type { NextApiRequest, NextApiResponse } from 'next'


const menus : MenuType[] = []

export default function handler(req: NextApiRequest,res: NextApiResponse) {
    if(req.method === "POST") {
        const isValid = req.body.name;
        if(isValid==="") return res.status(400).send(isValid);
        const menuId = menus.length > 0 ? menus[menus.length - 1].id + 1 : 1;
        const menu = {...req.body, id : menuId, isArchived: false, assetUrl : "https://www.averiecooks.com/wp-content/uploads/2020/04/yellowcurry-11.jpg"}
        menus.push(menu);
        return res.status(200).send(menus);
    }else if (req.method === "GET") {
        return res.send(menus);
    }
    res.status(405).send("sendInvalitmethid")
}
