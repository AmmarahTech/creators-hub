// app/api/collaborations/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const collaborations = [
    {
      id: 1,
      title: 'City Mural Project',
      creators: ['Marcus Paint', '3 Artists'],
      seeking: 'Local artists',
      deadline: '2 weeks',
      location: 'Arusha'
    },
    {
      id: 2,
      title: 'Charity Concert Series',
      creators: ['Sarah Jazz', '5 Musicians'],
      seeking: 'Venues & Sponsors',
      deadline: '1 month',
      location: 'Dar es Salaam'
    }
  ];

  return NextResponse.json({ collaborations });
}

export async function POST(request) {
  const body = await request.json();

  const newCollab = {
    id: Date.now(),
    ...body,
    participants: [],
    createdAt: new Date().toISOString()
  };

  return NextResponse.json({ collaboration: newCollab }, { status: 201 });
}