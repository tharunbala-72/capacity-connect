import { NextResponse } from "next/server";
import { state } from "@/lib/serverState";

export const dynamic = "force-dynamic";
export function GET() { return NextResponse.json({ requests: state().mentorshipRequests }); }
export async function POST(request) { let body; try { body = await request.json(); } catch { return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 }); } const current = state(); if (body.action === "create" && body.request?.id) current.mentorshipRequests = [body.request, ...current.mentorshipRequests.filter((item) => item.id !== body.request.id)]; else if (body.action === "update" && body.id) current.mentorshipRequests = current.mentorshipRequests.map((item) => item.id === body.id ? { ...item, status: body.status } : item); else if (body.action === "reset") current.mentorshipRequests = []; else return NextResponse.json({ error: "Use create, update, or reset." }, { status: 400 }); return NextResponse.json({ requests: current.mentorshipRequests }); }
