// app/api/auth/register/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { email, password, name, role } = body;

  // TODO: Validate input
  if (!email || !password || !name) {
    return NextResponse.json(
      { error: 'Email, password, and name are required' },
      { status: 400 }
    );
  }

  // TODO: Hash password with bcrypt
  // TODO: Save to database
  // TODO: Generate JWT token

  const user = {
    id: Date.now(),
    email,
    name,
    role: role || 'fan',
    createdAt: new Date().toISOString()
  };

  return NextResponse.json({ 
    message: 'User created successfully',
    user 
  }, { status: 201 });
}
