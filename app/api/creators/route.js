// app/api/creators/route.js
import { NextResponse } from 'next/server';

// GET all creators
export async function GET() {
  // TODO: Replace with actual database query
  const creators = [
    {
      id: 1,
      name: 'Sarah Jazz',
      category: 'musicians',
      image: '🎵',
      followers: '124K',
      nextEvent: 'Live Jazz Night - Dec 15',
      location: 'Dar es Salaam',
      hasTickets: true,
      hasMerch: true
    },
    {
      id: 2,
      name: 'Marcus Paint',
      category: 'artists',
      image: '🎨',
      followers: '89K',
      nextEvent: 'Gallery Opening - Dec 20',
      location: 'Arusha',
      hasTickets: true,
      hasMerch: true
    }
  ];

  return NextResponse.json({ creators });
}

// POST create new creator
export async function POST(request) {
  const body = await request.json();
  
  // TODO: Validate and save to database
  if (!body.name || !body.category) {
    return NextResponse.json(
      { error: 'Name and category are required' },
      { status: 400 }
    );
  }

  // TODO: Save to database
  const newCreator = {
    id: Date.now(),
    ...body
  };

  return NextResponse.json({ creator: newCreator }, { status: 201 });
}
