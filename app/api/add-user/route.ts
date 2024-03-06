import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get('userName');
  const ownerName = searchParams.get('ownerName');

  try {
    if (!userName || !ownerName) throw new Error('User and owner names required');
    await sql`INSERT INTO Users (Name, Owner) VALUES (${userName}, ${ownerName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ pets }, { status: 200 });
}
