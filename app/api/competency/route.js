import { NextResponse } from "next/server";
import seedData from "@/data/seedData.json";
import { profileFromState, resetState, state } from "@/lib/serverState";

export const dynamic = "force-dynamic";
export function GET() { return NextResponse.json(profileFromState()); }
export async function POST(request) {
  let body; try { body = await request.json(); } catch { return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 }); }
  const current = state();
  if (body.action === "switch-role") { if (!seedData.roles.some((role) => role.id === body.roleId)) return NextResponse.json({ error: "Unknown roleId." }, { status: 400 }); current.activeRoleId = body.roleId; current.auditLog.unshift({ action: body.action, at: new Date().toISOString() }); }
  else if (body.action === "unlock-skill") { if (!seedData.skills.some((skill) => skill.id === body.skillId)) return NextResponse.json({ error: "Unknown skillId." }, { status: 400 }); if (!current.unlockedSkillIds.includes(body.skillId)) current.unlockedSkillIds.push(body.skillId); current.auditLog.unshift({ action: body.action, skillId: body.skillId, at: new Date().toISOString() }); }
  else if (body.action === "reset-progress") { resetState(); return NextResponse.json(profileFromState()); }
  else return NextResponse.json({ error: "action must be switch-role, unlock-skill, or reset-progress." }, { status: 400 });
  return NextResponse.json(profileFromState());
}
