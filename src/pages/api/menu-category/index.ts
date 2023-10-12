// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MenuCategoryType } from '@/types/menuCategory';
import { prisma } from '@/utils/db';
import type { NextApiRequest, NextApiResponse } from 'next'

// const menuCategories:  MenuCategoryType[] = [];

 const handler = async(
  req: NextApiRequest,
  res: NextApiResponse
)  => {
    if (req.method === "POST") {
        const isValid =  req.body.name;
        if(isValid === "") return res.status(400).send("bad request")
        const payload = await prisma.menuCategory.create({data : req.body});
        const menuCategories = await prisma.menuCategory.findMany({where : {isAvaliable : true}});
        return res.send(menuCategories);

    } else if (req.method === "GET") {
      const menuCategories = await prisma.menuCategory.findMany({where : {isAvaliable : true}});
      return res.send(menuCategories);
    }
    res.status(400).send("invalid method")
}
export default handler;