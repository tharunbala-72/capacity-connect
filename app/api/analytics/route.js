import { NextResponse } from "next/server";
import seedData from "../../../data/seedData.json";
import { state } from "@/lib/serverState";

const regionAliases = { ALL: "All India", RMC_CHENNAI: "RMC Chennai", RMC_DELHI: "RMC New Delhi" };

function buildAnalytics(region) {
  const live = state(); const base = seedData.analytics[region]; const affectsRegion = region === "RMC Chennai" || region === "All India"; const readiness = live.telemetry?.readiness ?? 0; const metrics = { ...base, trained: base.trained + (affectsRegion && readiness === 100 ? 1 : 0), inProgress: base.inProgress + (affectsRegion && readiness < 100 ? 1 : 0), skillCoverage: affectsRegion ? Math.round((base.skillCoverage + readiness) / 2) : base.skillCoverage };
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

export async function POST(request) {
  let telemetry; try { telemetry = await request.json(); } catch { return NextResponse.json({ error: "Request body must be valid JSON." }, { status: 400 }); }
  state().telemetry = telemetry;
  return NextResponse.json({ ok: true, liveTelemetry: state().telemetry });
}
