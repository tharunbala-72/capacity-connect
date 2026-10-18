"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  BarChart3,
  Users,
  CheckCircle,
  AlertCircle,
  Download,
  Building2,
  Award,
  TrendingUp,
} from "lucide-react";
import { CountUp } from "./ReactBits";

export default function AdminAnalytics({ fallbackData }) {
  const [region, setRegion] = useState("All India");
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRegionalAnalytics() {
      setLoading(true);
      try {
        const res = await fetch(`/api/analytics?region=${region}`);
        const json = await res.json();
        if (res.ok) setAnalytics(json.data);
      } catch (err) {
        console.error("Failed to fetch analytics:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRegionalAnalytics();
  }, [region]);

  const data = analytics || {
    activePersonnel: 1240,
    avgCompetency: 74.2,
    criticalGap: "Hydromet & DWR",
    certificationsIssued: 892,
    departmentSkillGaps: fallbackData?.departmentSkillGaps || [],
    completionStatus: fallbackData?.completionStatus || [],
    monthlyTrend: [],
  };

  const handleExportCSV = () => {
    const rows = [
      ["Department", "Competency Acquired (%)", "Skill Gap (%)"],
      ...data.departmentSkillGaps.map((d) => [d.department, d.acquired, d.gap]),
    ];
    const csvContent =
      "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `IMD_Capacity_Report_${region}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Header & Regional Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 rounded-full">
            Module 4: Training Director Telemetry (/api/analytics)
          </span>
          <h2 className="text-2xl font-bold text-white mt-2 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-sky-400" />
            IMD Organizational Capacity &amp; Readiness
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Real-time competency metrics across Regional Meteorological Centres (RMCs).
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
            <Building2 className="w-4 h-4 text-sky-400" />
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="bg-transparent text-xs font-bold text-slate-200 focus:outline-none cursor-pointer"
            >
              <option value="All India" className="bg-slate-900">All India IMD Centres</option>
              <option value="RMC Chennai" className="bg-slate-900">RMC Chennai (Tamil Nadu)</option>
              <option value="RMC New Delhi" className="bg-slate-900">RMC New Delhi (HQ)</option>
            </select>
          </div>

          <button
            onClick={handleExportCSV}
            className="flex items-center gap-1.5 text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-sky-600/20 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Export CSV Report
          </button>
        </div>
      </div>

      {/* 4 KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-sky-500/10 text-sky-400 rounded-lg border border-sky-500/20">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Active Personnel</p>
            <p className="text-2xl font-extrabold text-white"><CountUp value={data.activePersonnel} /></p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Avg. Readiness Index</p>
            <p className="text-2xl font-extrabold text-white"><CountUp value={data.avgCompetency} decimals={1} suffix="%" /></p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Certifications Issued</p>
            <p className="text-2xl font-extrabold text-white"><CountUp value={data.certificationsIssued} /></p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-medium">Priority Training Gap</p>
            <p className="text-xs font-bold text-white truncate max-w-[140px]" title={data.criticalGap}>
              {data.criticalGap}
            </p>
          </div>
        </div>
      </div>

      {/* Charts Row 1: Bar Chart & Pie Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50">
          <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-sky-400" />
            Departmental Competency vs. Skill Gap (%)
          </h3>
          <div style={{ width: "100%", height: "288px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.departmentSkillGaps}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="department" stroke="#94a3b8" tick={{ fontSize: 10 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "8px", color: "#fff" }}
                />
                <Legend />
                <Bar dataKey="acquired" name="Acquired (%)" fill="#0284c7" radius={[4, 4, 0, 0]} />
                <Bar dataKey="gap" name="Skill Gap (%)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50">
          <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            Assessment Certification Breakdown
          </h3>
          <div style={{ width: "100%", height: "288px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.completionStatus}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={95}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {data.completionStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "8px", color: "#fff" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Charts Row 2: Monthly Progression Line Chart */}
      {data.monthlyTrend && data.monthlyTrend.length > 0 && (
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50">
          <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            6-Month Organizational Readiness &amp; Certification Trajectory
          </h3>
          <div style={{ width: "100%", height: "288px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.4} />
                <XAxis dataKey="month" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#0f172a", borderColor: "#334155", borderRadius: "8px", color: "#fff" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="completions"
                  name="Cumulative Passes"
                  stroke="#0284c7"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="readiness"
                  name="Avg Readiness Score (%)"
                  stroke="#10b981"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
