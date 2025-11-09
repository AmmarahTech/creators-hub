// app/api/events/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Replace with database query
  const events = [
    {
      id: 1,
      title: 'Summer Music Festival',
      date: 'Dec 15, 2025',
      type: 'Live Show',
      attendees: 234,
      price: '45,000 TSH',
      location: 'Dar es Salaam'
    },
    {
      id: 2,
      title: 'Art & Wine Night',
      date: 'Dec 18, 2025',
      type: 'Fan Meetup',
      attendees: 67,
      price: 'Free',
      location: 'Arusha'
    }
  ];

  return NextResponse.json({ events });
}

export async function POST(request) {
  const body = await request.json();

  // TODO: Validate and save to database
  const newEvent = {
    id: Date.now(),
    ...body,
    attendees: 0,
    createdAt: new Date().toISOString()
  };

  return NextResponse.json({ event: newEvent }, { status: 201 });
}
