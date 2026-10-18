import { NextResponse } from "next/server";
import seedData from "@/data/seedData.json";

const regionalData = {
  ALL: {
    activePersonnel: 1240,
    avgCompetency: 74.2,
    criticalGap: "Hydromet & DWR Calibration",
    certificationsIssued: 892,
    departmentSkillGaps: seedData.adminAnalytics?.departmentSkillGaps || [
      { department: "Cyclone Warning", acquired: 85, gap: 15 },
      { department: "Radar (DWR)", acquired: 72, gap: 28 },
      { department: "Agromet", acquired: 90, gap: 10 },
      { department: "Hydromet", acquired: 65, gap: 35 },
      { department: "Numerical Modeling", acquired: 78, gap: 22 },
    ],
    completionStatus: seedData.adminAnalytics?.completionStatus || [
      { name: "Certified & Completed", value: 70, color: "#10b981" },
      { name: "In Progress", value: 22, color: "#0284c7" },
      { name: "Pending Assessment", value: 8, color: "#f59e0b" },
    ],
    monthlyTrend: [
      { month: "May", completions: 95, readiness: 62 },
      { month: "Jun", completions: 130, readiness: 65 },
      { month: "Jul", completions: 175, readiness: 68 },
      { month: "Aug", completions: 210, readiness: 71 },
      { month: "Sep", completions: 260, readiness: 73 },
      { month: "Oct", completions: 310, readiness: 74.2 },
    ],
  },
  RMC_CHENNAI: {
    activePersonnel: 310,
    avgCompetency: 81.5,
    criticalGap: "QPE Flash Flood Modeling",
    certificationsIssued: 245,
    departmentSkillGaps: [
      { department: "Cyclone Warning", acquired: 92, gap: 8 },
      { department: "Radar (DWR)", acquired: 78, gap: 22 },
      { department: "Agromet", acquired: 84, gap: 16 },
      { department: "Hydromet", acquired: 68, gap: 32 },
      { department: "Numerical Modeling", acquired: 75, gap: 25 },
    ],
    completionStatus: [
      { name: "Certified & Completed", value: 72, color: "#10b981" },
      { name: "In Progress", value: 20, color: "#0284c7" },
      { name: "Pending Assessment", value: 8, color: "#f59e0b" },
    ],
    monthlyTrend: [
      { month: "May", completions: 22, readiness: 70 },
      { month: "Jun", completions: 35, readiness: 73 },
      { month: "Jul", completions: 48, readiness: 75 },
      { month: "Aug", completions: 60, readiness: 78 },
      { month: "Sep", completions: 72, readiness: 80 },
      { month: "Oct", completions: 88, readiness: 81.5 },
    ],
  },
  RMC_DELHI: {
    activePersonnel: 420,
    avgCompetency: 76.0,
    criticalGap: "Winter Fog SWIR Analysis",
    certificationsIssued: 310,
    departmentSkillGaps: [
      { department: "Cyclone Warning", acquired: 65, gap: 35 },
      { department: "Radar (DWR)", acquired: 80, gap: 20 },
      { department: "Agromet", acquired: 88, gap: 12 },
      { department: "Hydromet", acquired: 60, gap: 40 },
      { department: "Numerical Modeling", acquired: 86, gap: 14 },
    ],
    completionStatus: [
      { name: "Certified & Completed", value: 66, color: "#10b981" },
      { name: "In Progress", value: 22, color: "#0284c7" },
      { name: "Pending Assessment", value: 12, color: "#f59e0b" },
    ],
    monthlyTrend: [
      { month: "May", completions: 30, readiness: 65 },
      { month: "Jun", completions: 42, readiness: 67 },
      { month: "Jul", completions: 55, readiness: 70 },
      { month: "Aug", completions: 70, readiness: 72 },
      { month: "Sep", completions: 85, readiness: 74 },
      { month: "Oct", completions: 102, readiness: 76.0 },
    ],
  },
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get("region") || "ALL";
    const payload = regionalData[region] || regionalData.ALL;

    return NextResponse.json({
      status: "success",
      region,
      data: payload,
    });
  } catch (error) {
    return NextResponse.json({
      status: "success",
      region: "ALL",
      data: regionalData.ALL,
    });
  }
}