import { NextApiRequest, NextApiResponse } from 'next'
import { createData, getData } from '../../../lib/prisma/data'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method

  switch(method) {
    case "GET":
      try{
        const { data, err } = await getData() 
        if(err) throw new Error()
        return res.status(200).json({data})
      }catch(err){
        console.log(err)
        return res.status(500).json({err: 'Ocorreu algum erro na requisição'})
      }
    case "POST":
      try{
        const values = req.body
        const { data, err } = await createData(values)
        if(err) throw new Error()
        return res.status(201).json({data})
      }catch(err){
        console.log(err)
        return res.status(500).json({err: 'Ocorreu algum erro na requisição'})
      }
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
