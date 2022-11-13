import { randomUUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'

const arr: Array<any>= []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method

  switch(method) {
    case "GET":
      res.status(200).json(arr)
      break
    case "POST":
      const data = req.body
      arr.push({value: data.temperature, date: new Date().toLocaleTimeString(), id: randomUUID()})
      res.status(201).json(arr)
      break
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
