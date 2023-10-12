// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MenuType } from '@/types/menu'
import { prisma } from '@/utils/db';
import type { NextApiRequest, NextApiResponse } from 'next'


// const menus : MenuType[] = []

 const  handler = async(req: NextApiRequest,res: NextApiResponse) => {
    if(req.method === "POST") {
        const isValid = req.body.name;
        if(isValid==="") return res.status(400).send(isValid);
        const menu = {...req.body,assetUrl : "https://www.averiecooks.com/wp-content/uploads/2020/04/yellowcurry-11.jpg"}
        const payload = await prisma.menu.create({data : menu});
        const menus = await prisma.menu.findMany({where : {isArchived : false}})
        return res.status(200).send(menus);
    }else if (req.method === "GET") {
        const menus = await prisma.menu.findMany({where : {isArchived : false}})
        return res.send(menus);
    }
    res.status(405).send("sendInvalitmethid")
}
export default handler;