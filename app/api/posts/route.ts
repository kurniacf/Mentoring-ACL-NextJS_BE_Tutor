import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
}

export async function POST(request: Request) {
    const { title, content } = await request.json();
    const newPost = await prisma.post.create({
        data: { title, content, published: true },
    });
    return NextResponse.json(newPost, { status: 201 });
}
