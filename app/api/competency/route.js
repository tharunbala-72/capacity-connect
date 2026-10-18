import { NextResponse } from "next/server";
import seedData from "../../../data/seedData.json";

const userState = { activeRoleId: seedData.user.activeRoleId, unlockedSkillIds: new Set(seedData.user.unlockedSkillIds) };
const auditLog = [];

function buildProfile() {
  const activeRole = seedData.roles.find((role) => role.id === userState.activeRoleId);
  const requiredSkills = activeRole.requiredSkillIds.map((id) => seedData.skills.find((skill) => skill.id === id));
  const acquiredSkills = requiredSkills.filter((skill) => userState.unlockedSkillIds.has(skill.id));
  const gapSkills = requiredSkills.filter((skill) => !userState.unlockedSkillIds.has(skill.id));
  return { user: { id: seedData.user.id, name: seedData.user.name }, activeRole, roles: seedData.roles, competency: { requiredSkills, acquiredSkills, gapSkills, completionPercent: Math.round((acquiredSkills.length / requiredSkills.length) * 100) }, auditLog };
}

export function GET() { return NextResponse.json(buildProfile()); }

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 }); }
  if (body.action === "switch-role") {
    const role = seedData.roles.find((item) => item.id === body.roleId);
    if (!role) return NextResponse.json({ error: "Unknown roleId." }, { status: 400 });
    userState.activeRoleId = role.id;
    auditLog.unshift({ action: "switch-role", roleId: role.id, at: new Date().toISOString() });
    return NextResponse.json(buildProfile());
  }
  if (body.action === "unlock-skill") {
    const skill = seedData.skills.find((item) => item.id === body.skillId);
    if (!skill) return NextResponse.json({ error: "Unknown skillId." }, { status: 400 });
    userState.unlockedSkillIds.add(skill.id);
    auditLog.unshift({ action: "unlock-skill", skillId: skill.id, at: new Date().toISOString() });
    return NextResponse.json(buildProfile());
  }
  return NextResponse.json({ error: "action must be either switch-role or unlock-skill." }, { status: 400 });
}
