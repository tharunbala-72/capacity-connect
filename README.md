# Capacity Connect — IMD Training & Operational Readiness Portal

Capacity Connect is a production-oriented Learning Management System for the India Meteorological Department (IMD), Ministry of Earth Sciences. It combines an automated skill-gap engine, technical learning paths, SME mentorship, and regional capacity telemetry in one role-isolated operational portal.

## Project Overview

The platform supports workforce readiness throughout IMD operations:

- Enterprise Learning Management System (LMS)
- Automated Skill-Gap and readiness engine
- SME mentorship hub
- Regional telemetry and training-capacity portal

## Key Features & Role-Isolated Architecture

### Trainee / Met Officer Workspace

- Role onboarding for Junior Weather Forecaster, Doppler Radar Technician, Climate Data Analyst, and Hydrologist
- Automated skill-gap and readiness engine
- Interactive six-course technical catalog with MCQ certification quizzes
- SME mentorship request flow with status updates
- Institutional Knowledge Archive

### SME Mentor Console

- Live cohort readiness tracking
- Incoming mentorship request review and approval workflow
- Learner guidance logs and review tools

### Training Director Analytics

- National and regional capacity telemetry for All India, RMC Chennai, RMC New Delhi, RMC Mumbai, and RMC Kolkata
- Interactive Recharts: Departmental Skill Gaps bar chart and Certification Distribution donut chart
- Regional division breakdown table
- CSV export

### Adaptive Day/Night Operations UI

- High-contrast light and dark theme engine
- Live IMD Severe Weather Alert Ticker

## Tech Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Recharts
- Lucide React
- Next.js Node.js REST API Routes with server-side state persistence

## Backend API Endpoints

| Endpoint | Purpose |
| --- | --- |
| `GET / POST /api/competency` | Role selection, competency verification, and skill-gap calculation |
| `GET / POST /api/assessment` | Course quiz evaluation and automated skill unlocking |
| `GET / POST /api/mentorship` | Cross-role mentorship request submission and mentor approval sync |
| `GET / POST /api/analytics` | Real-time regional and departmental telemetry aggregation |

## Project Structure

```text
capacity-connect/
├── app/
│   ├── api/
│   │   ├── analytics/route.js
│   │   ├── assessment/route.js
│   │   ├── competency/route.js
│   │   └── mentorship/route.js
│   ├── globals.css
│   └── page.js
├── components/
│   ├── AdminAnalytics.jsx
│   ├── CourseAndQuiz.jsx
│   ├── LearnerMentors.jsx
│   ├── MentorConsole.jsx
│   ├── RoleOnboarding.jsx
│   └── SkillGapDashboard.jsx
├── data/
│   └── seedData.json
├── lib/
│   └── serverState.js
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

### Demo Credentials

Use these credentials with any of the Trainee, Mentor, or Training Director workspaces:

- Username: `tharun` (or `tharunbala72@gmail.com`)
- PIN: `1234`

## Team & Contributors

- **M. Tharun Bala** — Lead Full-Stack Developer: Next.js 14 architecture, role-isolated dashboards, REST APIs, Recharts telemetry, and state sync
- **Sanjana Saravanan** — Role Onboarding Wireframes & UI Prototyping
- **Nithyasri Anand** — Course Catalog Structure & IMD Assessment Content
