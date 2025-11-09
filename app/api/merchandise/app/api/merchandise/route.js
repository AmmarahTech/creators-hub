// app/api/merchandise/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Replace with database query
  const merchandise = [
    {
      id: 1,
      name: 'Limited Edition Tee',
      creator: 'Sarah Jazz',
      price: 29999,
      image: '👕',
      location: 'Dar es Salaam'
    },
    {
      id: 2,
      name: 'Artist Print Collection',
      creator: 'Marcus Paint',
      price: 49999,
      image: '🎨',
      location: 'Arusha'
    }
  ];

  return NextResponse.json({ merchandise });
}

export async function POST(request) {
  const body = await request.json();

  const newMerch = {
    id: Date.now(),
    ...body,
    createdAt: new Date().toISOString()
  };

  return NextResponse.json({ merchandise: newMerch }, { status: 201 });
}