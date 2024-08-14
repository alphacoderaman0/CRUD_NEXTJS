import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();

export async function GET(request,{params}){
    const id = parseInt(params.id);

    const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      })
      return NextResponse.json(user);
}

export async function PUT(request,{params}){
    const data = await request.json();
    const {name,age,email,mobno} = data
    const id = parseInt(params.id);
    const updateUser = await prisma.user.update({
        where:{id},
        data :{
            name,
            age,
            email,
            mobno
        },
    })
    return NextResponse.json(updateUser);
}

export async function DELETE(request,{params}){
    const id = parseInt(params.id);
    const deleteUser = await prisma.user.delete({
        where: { id },
      })
      return NextResponse.json(deleteUser);
}