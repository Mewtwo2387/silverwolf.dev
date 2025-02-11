import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "Unknown";

  try {
    await prisma.iPLog.create({
      data: { ip },
    });
    console.log("IP logged:", ip);
  } catch (error) {
    console.error("Database error:", error);
  }

  return NextResponse.json({ ip });
}
