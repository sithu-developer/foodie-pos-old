// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MenuCategoryType } from '@/types/menuCategory';
import type { NextApiRequest, NextApiResponse } from 'next'

const menuCategories:  MenuCategoryType[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === "POST") {
        const isValid =  req.body.name;
        if(isValid === "") return res.status(400).send("bad request")
        const menuCategoryId = menuCategories.length >0 ? menuCategories[menuCategories.length - 1].id + 1: 1;
        const newMenuCategory = {...req.body,id : menuCategoryId};
        menuCategories.push(newMenuCategory);
        res.send(menuCategories);
    } else if (req.method === "GET") {
      res.send(menuCategories);
    }
}
