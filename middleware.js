import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import * as jose from 'jose'

export function middleware(request, response) {
    const Cookies = cookies()
    const PathURL = request.nextUrl.href.split('/')


    const TokenCookie = Cookies.get("TOKEN") ? Cookies.get("TOKEN").value : null
    if (PathURL[PathURL.length - 1] === 'panel') {
        if (TokenCookie) {
            // const DecryptedCookieInfo = jose.jwtVerify(TokenCookie, process.env.TOKEN, {})
            // console.log(DecryptedCookieInfo)
            return NextResponse.next()
        } else {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
    }

    if (PathURL[PathURL.length - 1] === 'admin') {
        if (TokenCookie) {
            // const DecryptedCookieInfo = jose.jwtVerify(TokenCookie, process.env.TOKEN, {})
            // console.log(DecryptedCookieInfo)
            return NextResponse.redirect(new URL('/admin/panel', request.url))
        } else {
            return NextResponse.next()
        }
    }
}

export const config = {
    matcher: ['/admin/panel', '/admin'],
}