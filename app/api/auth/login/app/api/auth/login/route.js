// app/api/auth/login/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  const { email, password } = body;

  // TODO: Validate input
  // TODO: Find user in database
  // TODO: Compare password with bcrypt
  // TODO: Generate JWT token

  // Mock response
  return NextResponse.json({
    message: 'Login successful',
    token: 'mock-jwt-token',
    user: {
      id: 1,
      email,
      name: 'John Doe',
      role: 'creator'
    }
  });
}
