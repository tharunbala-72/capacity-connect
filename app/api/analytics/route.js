import { NextResponse } from "next/server";
import seedData from "../../../data/seedData.json";

const regionAliases = { ALL: "All India", RMC_CHENNAI: "RMC Chennai", RMC_DELHI: "RMC New Delhi" };

function buildAnalytics(region) {
  const metrics = seedData.analytics[region];
  const trained = metrics.trained;
  const total = trained + metrics.inProgress;
  return { region, metrics, data: { activePersonnel: total, avgCompetency: metrics.skillCoverage, certificationsIssued: trained, criticalGap: region === "RMC Chennai" ? "QPE flash-flood modelling" : region === "RMC New Delhi" ? "Winter fog SWIR analysis" : "Hydromet & DWR calibration", departmentSkillGaps: seedData.adminAnalytics.departmentSkillGaps, completionStatus: seedData.adminAnalytics.completionStatus, monthlyTrend: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((month, index) => ({ month, completions: Math.round(trained * (0.35 + index * 0.13)), readiness: Math.min(100, Math.round(metrics.skillCoverage - 10 + index * 2)) })) } };
}

export function GET(request) {
  const requested = request.nextUrl.searchParams.get("region") || "All India";
  const region = regionAliases[requested] || requested;
  if (!seedData.analytics[region]) return NextResponse.json({ error: "Unknown region." }, { status: 400 });
  const payload = buildAnalytics(region);
  if (request.nextUrl.searchParams.get("format") === "csv") {
    const csv = ["region,trained,inProgress,skillCoverage", `${region},${payload.metrics.trained},${payload.metrics.inProgress},${payload.metrics.skillCoverage}`].join("\n");
    return new Response(csv, { headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="capacity-connect-${region.toLowerCase().replaceAll(" ", "-")}.csv"` } });
  }
  return NextResponse.json(payload);
}
