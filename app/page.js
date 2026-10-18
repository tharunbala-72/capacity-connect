"use client";
import React, { useState, useEffect } from "react";
import seedData from "@/data/seedData.json";
import RoleOnboarding from "@/components/RoleOnboarding";
import CourseAndQuiz from "@/components/CourseAndQuiz";
import SkillGapDashboard from "@/components/SkillGapDashboard";
import AdminAnalytics from "@/components/AdminAnalytics";
import { 
  CloudLightning, 
  ShieldCheck, 
  LayoutDashboard, 
  BarChart2, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Award,
  Layers,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("learner");
  const [serverState, setServerState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch initial state from Backend API (/api/competency)
  const fetchCompetencyState = async () => {
    try {
      const res = await fetch("/api/competency");
      const data = await res.json();
      if (data.status === "success") {
        setServerState(data);
      }
    } catch (error) {
      console.error("Error fetching competency API:", error);
    }
  };

  useEffect(() => {
    fetchCompetencyState();
  }, []);

  const handleSelectRole = async (roleObj) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/competency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "SWITCH_ROLE", roleId: roleObj.id }),
      });
      const data = await res.json();
      if (data.status === "success") setServerState(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnlockSkill = async (skillName) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/competency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "UNLOCK_SKILL", skillName }),
      });
      const data = await res.json();
      if (data.status === "success") setServerState(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetDemo = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/competency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "RESET_DEMO" }),
      });
      const data = await res.json();
      if (data.status === "success") setServerState(data);
    } finally {
      setIsLoading(false);
    }
  };

  const currentRole = serverState?.currentRole || seedData.roles[0];
  const acquiredSkills = serverState?.profile?.acquiredSkills || [
    "Synoptic Meteorology",
    "Cyclone Warning Protocol",
  ];
  
  // FIX: Added optional chaining (?.) so it never crashes if currentRole is undefined
  const metrics = serverState?.metrics || {
    requiredCount: currentRole?.requiredSkills?.length || 0,
    acquiredCount: 2,
    missingCount: 2,
    readinessScore: 50,
    acquiredInRole: ["Synoptic Meteorology", "Cyclone Warning Protocol"],
    missingInRole: ["Satellite Imagery Analysis", "Numerical Weather Prediction"],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white">
      {/* Live IMD Weather Alert Ticker */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 text-white px-4 py-2.5 text-xs font-semibold flex items-center justify-center gap-3 shadow-md tracking-wide">
        <div className="flex items-center gap-1.5 bg-black/20 px-2 py-0.5 rounded uppercase font-bold text-[10px] animate-pulse">
          <CloudLightning className="w-3.5 h-3.5 text-amber-200" />
          IMD Live Bulletin
        </div>
        <span>
          ⚠️ Orange Alert: Heavy cyclonic rainfall warning active for North Coastal Tamil Nadu &amp; Puducherry. DWR &amp; QPE refresher modules mandatory.
        </span>
      </div>

      {/* Enterprise Executive Header */}
      <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-gradient-to-br from-sky-500 to-blue-700 rounded-xl shadow-lg shadow-sky-500/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold tracking-tight text-white">
                  Capacity Connect
                </h1>
                <span className="text-[10px] bg-sky-500/10 border border-sky-500/30 text-sky-400 font-mono px-2 py-0.5 rounded-full uppercase">
                  SIH26075 • IMD / MoES
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Ministry of Earth Sciences • Digital Competency &amp; Upskilling Portal
              </p>
            </div>
          </div>

          {/* Navigation Tab Switcher */}
          <div className="flex items-center bg-slate-950 p-1.5 rounded-xl border border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveTab("learner")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "learner"
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Learner Upskilling Portal
            </button>
            <button
              onClick={() => setActiveTab("admin")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === "admin"
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              Training Director Analytics
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "learner" ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Hero Banner Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950 border border-slate-800 p-8 shadow-xl">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  Next-Gen Meteorological Workforce Readiness
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Empowering IMD Personnel with Precision Competencies
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
                  Select your operational designation, bridge critical technical gaps through interactive modules, and achieve certified readiness for weather forecasting and disaster mitigation.
                </p>
              </div>
            </div>

            {/* Module 1: Sanjana's Component (Role Onboarding) */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 shadow-xl">
              <RoleOnboarding
                roles={seedData.roles}
                selectedRole={currentRole}
                onSelectRole={handleSelectRole}
              />
            </div>

            {/* Module 3: Tharun's Skill-Gap Engine */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 shadow-xl">
              <SkillGapDashboard
                profile={serverState?.profile}
                selectedRole={currentRole}
                metrics={metrics}
                recommendedCourses={serverState?.recommendedCourses}
                onSimulatePass={handleUnlockSkill}
                onResetDemo={handleResetDemo}
                isLoading={isLoading}
              />
            </div>

            {/* Module 2: Nithyasri's Component (Courses & Assessments) */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 shadow-xl">
              <CourseAndQuiz
                courses={seedData.courses}
                acquiredSkills={acquiredSkills}
                onPassQuiz={handleUnlockSkill}
              />
            </div>
          </div>
        ) : (
          /* Module 4: Admin Analytics Dashboard */
          <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/80 p-6 shadow-xl animate-in fade-in duration-300">
            <AdminAnalytics fallbackData={seedData.adminAnalytics} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-8 mt-16 text-center text-xs text-slate-500">
        <p>Capacity Connect • India Meteorological Department (IMD) • Smart India Hackathon 2026</p>
        <p className="mt-1 text-slate-600">Built with Next.js 14 App Router, Tailwind CSS, &amp; Recharts.</p>
      </footer>
    </div>
  );
}
