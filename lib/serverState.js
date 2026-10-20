import seedData from "@/data/seedData.json";

const key = "__capacityConnectState";

function initialState() {
  return { activeRoleId: seedData.user.activeRoleId, unlockedSkillIds: [...seedData.user.unlockedSkillIds], completedCourseIds: [], mentorshipRequests: [], telemetry: null, auditLog: [] };
}

export function state() {
  if (!globalThis[key]) globalThis[key] = initialState();
  return globalThis[key];
}

export function resetState() { globalThis[key] = initialState(); return globalThis[key]; }

export function profileFromState() {
  const current = state(); const activeRole = seedData.roles.find((role) => role.id === current.activeRoleId); const requiredSkills = activeRole.requiredSkillIds.map((id) => seedData.skills.find((skill) => skill.id === id)); const acquiredSkills = requiredSkills.filter((skill) => current.unlockedSkillIds.includes(skill.id)); const gapSkills = requiredSkills.filter((skill) => !current.unlockedSkillIds.includes(skill.id));
  return { user: { id: seedData.user.id, name: seedData.user.name }, activeRole, roles: seedData.roles, completedCourseIds: current.completedCourseIds, competency: { requiredSkills, acquiredSkills, gapSkills, completionPercent: Math.round((acquiredSkills.length / requiredSkills.length) * 100) }, auditLog: current.auditLog };
}
