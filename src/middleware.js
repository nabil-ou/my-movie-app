import {getLocaleUrlToRedirect} from "@/utils/i18n";
import {NextResponse} from "next/server";

export function middleware(request) {
    const newLocalUrl = getLocaleUrlToRedirect(request);

    if (newLocalUrl) {
        return NextResponse.redirect(newLocalUrl);
    }
}

export const config = {
    matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}