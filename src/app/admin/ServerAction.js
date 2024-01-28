'use server'
import { useRouter } from "next/navigation";
import { cookies } from 'next/headers'

export async function StoreDataInSession(Data) {
    cookies().set({
        name: "TOKEN",
        value: Data,
        httpOnly: true,
        secure: true
    })
}


export async function CheckCookie(Name) {
    const HasCookie = cookies().get(Name) ? cookies().get(Name)?.value : null

    return HasCookie
}