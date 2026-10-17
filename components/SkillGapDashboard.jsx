"use client";
import React from "react";
import {
  CheckCircle2,
  AlertTriangle,
  Award,
  BookOpen,
  Sparkles,
  RotateCcw,
  UserCheck,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function SkillGapDashboard({
  profile,
  selectedRole,
  metrics,
  recommendedCourses,
  onSimulatePass,
  onResetDemo,
  isLoading,
}) {
  if (!selectedRole || !metrics) return null;

  const {
    requiredCount,
    acquiredCount,
    missingCount,
    readinessScore,
    acquiredInRole,
    missingInRole,
  } = metrics;

  return (
    <section className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 my-6">
      {/* Top Personnel Identity Bar */}
      {profile && (
        <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 text-white p-4 rounded-xl mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-sky-600 rounded-lg">
              <UserCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold">{profile.name}</h3>
                <span className="text-[11px] bg-slate-800 text-sky-400 px-2 py-0.5 rounded font-mono">
                  {profile.empId}
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {profile.station}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {missingInRole.length > 0 && (
              <button
                disabled={isLoading}
                onClick={() => onSimulatePass(missingInRole[0])}
                className="flex items-center gap-1.5 text-xs font-semibold bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white px-3.5 py-2 rounded-lg transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Simulate API Unlock: &ldquo;{missingInRole[0]}&rdquo;
              </button>
            )}
            <button
              disabled={isLoading}
              onClick={onResetDemo}
              className="flex items-center gap-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-2 rounded-lg transition-all cursor-pointer"
              title="Reset Demo Progress"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Role Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
            Module 3: Automated Skill-Gap Engine (REST API Connected)
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-2">
            Target Designation: <span className="text-sky-600">{selectedRole.title}</span>
          </h2>
          <p className="text-sm text-slate-500 mt-1">{selectedRole.description}</p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-center">
          <div className="text-right">
            <span className="text-xs text-slate-400 block uppercase font-semibold">
              Deployment Status
            </span>
            <span
              className={`text-sm font-bold ${
                readinessScore === 100 ? "text-emerald-600" : "text-amber-600"
              }`}
            >
              {readinessScore === 100 ? "Field Ready (Certified)" : "Upskilling Required"}
            </span>
          </div>
        </div>
      </div>

      {/* Live Animated Progress Bar */}
      <div className="mb-8 bg-slate-50 p-5 rounded-xl border border-slate-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Award className="w-4 h-4 text-sky-600" />
            Competency Index Score
          </span>
          <span className="text-xl font-extrabold text-sky-600">{readinessScore}%</span>
        </div>
        <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-600 to-emerald-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${readinessScore}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <span>
            Verified: <strong>{acquiredCount}</strong> of <strong>{requiredCount}</strong> core competencies
          </span>
          <span>Gap Remaining: {missingCount} modules</span>
        </div>
      </div>

      {/* Dual-Column Skill Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
          <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Acquired & Verified Competencies ({acquiredCount})
          </h3>
          {acquiredInRole.length === 0 ? (
            <p className="text-xs text-slate-500 italic">
              No competencies verified yet. Complete an assessment below.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {acquiredInRole.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white text-emerald-800 border border-emerald-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
          <h3 className="text-sm font-bold text-amber-950 flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            Identified Skill Gaps ({missingCount})
          </h3>
          {missingInRole.length === 0 ? (
            <p className="text-xs text-emerald-700 font-semibold">
              🎉 All mandatory competencies achieved! Personnel cleared for operational duty.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {missingInRole.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white text-amber-900 border border-amber-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Grid: AI Course Recommendations + Server Audit Log */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
        {/* Targeted Training Recommendations */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Recommended Training Modules for Your Skill Gap
          </h3>
          {recommendedCourses && recommendedCourses.length > 0 ? (
            <div className="space-y-2.5">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="p-3 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between"
                >
                  <div>
                    <p className="text-xs font-bold text-slate-800">{course.title}</p>
                    <p className="text-[11px] text-slate-500">
                      Unlocks Skill: <span className="text-sky-600 font-semibold">{course.skill}</span> • {course.duration}
                    </p>
                  </div>
                  <button
                    onClick={() => onSimulatePass(course.skill)}
                    className="text-xs bg-white hover:bg-sky-50 text-sky-700 border border-sky-200 px-2.5 py-1.5 rounded-md font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    Quick Verify <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
              No pending mandatory courses for your current designation.
            </p>
          )}
        </div>

        {/* Live Backend Verification Audit Log */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            Server Competency Audit Log
          </h3>
          <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
            {profile?.activityLog?.map((item) => (
              <div
                key={item.id}
                className="text-xs p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between"
              >
                <div>
                  <span className="font-semibold text-slate-800 block">{item.action}</span>
                  <span className="text-[10px] text-slate-400">{item.timestamp}</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}