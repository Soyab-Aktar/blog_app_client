import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {

  const pathName = request.nextUrl.pathname;
  let isAuthenticted = false;
  let isAdmin = false;

  const { data } = await userService.getSession();

  //TODO : Check Season Data
  if (data) {
    isAuthenticted = true;
    isAdmin = data.user.role === Roles.admin
  }

  //TODO : Check is Authenticated or not
  if (!isAuthenticted) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  //TODO : Check is Admin or Not
  if (isAdmin && pathName.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url))
  }

  //TODO : Check is User or Not
  if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/admin-dashboard"],
}