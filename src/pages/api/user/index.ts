// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/utils/db';
import type { NextApiRequest, NextApiResponse } from 'next'

const  handler = async(req: NextApiRequest,res: NextApiResponse) => {
    const method = req.method;
    if (method === "GET") {
        const user = await prisma.user.findMany({where : { isArchived : false}});
        return res.send(user);
    } else if (method === "POST" ) {
        const {name,email} = req.body;
        const isValid =email && name ;
        if(!isValid) return res.status(400).send("Bad Request");
        const user = await prisma.user.create({data : { name, email}});
        return res.send(user);
    } else if (method === "PUT") {
        const {id} = req.body;
        await prisma.user.update({data : {isArchived : true}, where : { id }})
        return res.send("OK");
    }
    res.status(405).send("invalid")
}

export default handler;

