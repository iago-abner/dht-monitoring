import { Prisma } from "@prisma/client";
import { prisma } from ".";

export async function getData() {
  try{
    const data = await prisma.data.findMany()
    return { data }
  }catch(err) {
    return {err}
  }
}

export async function createData(args: Prisma.DataCreateInput) {
  try{
    const dataDB = await prisma.data.create({data: args})
    return { data: dataDB }
  }catch(err) {
    return {err}
  }
}