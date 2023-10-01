import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1st logic part of 2part middleware function
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicPath = path === '/login' || path === '/signup';

  // get the token from cookies, if user is available or not
  const token = request.cookies.get('token')?.value || '';
  if (publicPath && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if (!publicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// 2nd part of middleware function "Matching Paths"
export const config = {
  // for profile and all the paths in it, it is written in that way
  matcher: ['/', '/(profile|profile/.*)', '/login', '/signup'],
};
