import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getTranslator } from "@/dictionaries/utils/getTranslator";

export async function POST(request: Request) {
  const lang = request.headers.get("Accept-Language") || "pt-BR";

  const t = getTranslator(lang);

  const { set } = await cookies();

  set("refreshToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: process.env.NODE_ENV !== "development" ? "none" : "lax",
    maxAge: 0,
    path: "/",
    ...(process.env.NODE_ENV === "development"
      ? { domain: "localhost" }
      : { domain: ".paroquiasaojosecaragua.org.br" }),
  });

  return NextResponse.json({
    message: t("successfully-logged-out"),
  });
}
