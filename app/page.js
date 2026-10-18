"use client";

import { useEffect, useState } from "react";
import { BarChart3, BookOpen, GraduationCap, Moon, ShieldCheck, Sun, Users } from "lucide-react";
import RoleOnboarding from "@/components/RoleOnboarding";
import CourseAndQuiz from "@/components/CourseAndQuiz";
import AdminAnalytics from "@/components/AdminAnalytics";
import { CountUp, SpotlightCard } from "@/components/ReactBits";

const accessRoles = [
  { id: "trainee", title: "Trainee / Meteorological Officer", detail: "Learner LMS view", icon: BookOpen },
  { id: "trainer", title: "Trainer & SME Mentor", detail: "Matching and institutional archive", icon: GraduationCap },
  { id: "director", title: "Training Director / RMC Head", detail: "Director analytics and CSV reports", icon: BarChart3 },
];

export default function Home() {
  const [accessRole, setAccessRole] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPortal() {
      try {
        const [competencyResponse, assessmentResponse] = await Promise.all([fetch("/api/competency"), fetch("/api/assessment")]);
        if (!competencyResponse.ok || !assessmentResponse.ok) throw new Error("The portal data could not be loaded.");
        const [competency, assessment] = await Promise.all([competencyResponse.json(), assessmentResponse.json()]);
        setProfile(competency); setCourses(assessment.courses);
      } catch (requestError) { setError(requestError.message); }
    }
    loadPortal();
  }, []);

  async function updateCompetency(body) {
    setLoading(true); setError("");
    try { const response = await fetch("/api/competency", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }); const payload = await response.json(); if (!response.ok) throw new Error(payload.error || "Unable to update competency."); setProfile(payload); } catch (requestError) { setError(requestError.message); } finally { setLoading(false); }
  }

  const isDark = darkMode ? "bg-zinc-950 text-zinc-100" : "bg-amber-50 text-zinc-950";
  if (!accessRole) return <main className="grid min-h-screen place-items-center bg-zinc-950 p-5 text-white"><section className="w-full max-w-5xl"><div className="mb-10 text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-zinc-950"><ShieldCheck /></div><p className="mt-5 text-xs font-bold tracking-[0.2em] text-amber-400">IMD • MOES • SIH26075</p><h1 className="mt-3 text-4xl font-bold">Capacity Connect</h1><p className="mt-3 text-zinc-400">Select your operational access view.</p></div><div className="grid gap-5 md:grid-cols-3">{accessRoles.map((role) => { const Icon = role.icon; return <SpotlightCard key={role.id} className="rounded-2xl border border-zinc-800 bg-zinc-900"><button onClick={() => setAccessRole(role)} className="w-full p-6 text-left"><Icon className="h-7 w-7 text-amber-400" /><h2 className="mt-8 text-xl font-semibold">{role.title}</h2><p className="mt-2 text-sm text-zinc-400">{role.detail}</p><span className="mt-6 block text-xs font-bold text-amber-300">1-CLICK LOGIN →</span></button></SpotlightCard>; })}</div></section></main>;

  return <div className={`min-h-screen transition-colors ${isDark}`}><header className={`sticky top-0 z-40 border-b ${darkMode ? "border-zinc-800 bg-zinc-950/90" : "border-amber-200 bg-amber-50/90"} backdrop-blur`}><div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6"><button onClick={() => setAccessRole(null)} className="flex items-center gap-2 text-left"><ShieldCheck className="h-6 w-6 text-amber-400" /><span><b>Capacity Connect</b><small className="ml-2 hidden text-xs text-zinc-500 sm:inline">{accessRole.title}</small></span></button><button onClick={() => setDarkMode((value) => !value)} className={`rounded-lg border px-3 py-2 text-xs font-bold ${darkMode ? "border-zinc-700 text-amber-300" : "border-amber-300 text-amber-800"}`}>{darkMode ? <span className="flex gap-1"><Sun className="h-4 w-4" /> Light Mode</span> : <span className="flex gap-1"><Moon className="h-4 w-4" /> Dark Mode</span>}</button></div></header><main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6">{error && <p className="rounded-lg bg-rose-500/10 p-3 text-sm text-rose-300">{error}</p>}{accessRole.id === "director" ? <AdminAnalytics fallbackData={{}} /> : accessRole.id === "trainer" ? <TrainerView courses={courses} /> : <>{profile ? <><section className="rounded-2xl border border-amber-400/20 bg-gradient-to-r from-zinc-900 to-amber-950/40 p-6"><p className="text-xs font-bold tracking-[0.16em] text-amber-400">LEARNER READINESS</p><h1 className="mt-2 text-3xl font-bold">{profile.activeRole.title}</h1><p className="mt-2 text-zinc-400">{profile.user.name} · {profile.activeRole.region}</p><p className="mt-5 text-4xl font-bold text-amber-300"><CountUp value={profile.competency.completionPercent} suffix="%" /></p></section><RoleOnboarding roles={profile.roles} selectedRole={profile.activeRole} onSelectRole={(role) => updateCompetency({ action: "switch-role", roleId: role.id })} isLoading={loading} /><CourseAndQuiz courses={courses} acquiredSkillIds={profile.competency.acquiredSkills.map((skill) => skill.id)} onPassQuiz={(skillId) => updateCompetency({ action: "unlock-skill", skillId })} /></> : <p className="py-16 text-center text-zinc-400">Loading learner workspace…</p>}</>}</main></div>;
}

function TrainerView({ courses }) { return <section className="space-y-6"><div><p className="text-xs font-bold tracking-[0.18em] text-amber-400">MENTOR CONSOLE</p><h1 className="mt-2 text-3xl font-bold">Trainer matching &amp; institutional archive</h1></div><div className="grid gap-4 md:grid-cols-2">{courses.map((course) => <SpotlightCard key={course.id} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"><Users className="h-6 w-6 text-amber-400" /><h2 className="mt-5 text-xl font-semibold">{course.title}</h2><p className="mt-2 text-sm text-zinc-400">Archive-ready lesson plan · {course.duration}</p><button className="mt-5 rounded-lg border border-amber-400/40 px-3 py-2 text-xs font-bold text-amber-300">Review matching cohort</button></SpotlightCard>)}</div></section>; }
