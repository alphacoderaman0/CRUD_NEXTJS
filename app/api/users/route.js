import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();
export async function POST(request) {
    const data = await request.json();
    const {name,age,email,mobno} = data
    const newUser = await prisma.user.create({
        data :{
            name,
            age,
            email,
            mobno
        }
    });
    return NextResponse.json({...newUser, name,age,email,mobno});
}

export async function GET(){
    const user = await prisma.user.findMany();
    return NextResponse.json(user)
}