# Capacity Connect – IMD Training Portal

**Capacity Connect** is a training portal built for the India Meteorological Department (IMD) under the **Ministry of Earth Sciences**. It helps staff discover their roles, find and close skill gaps, and grow through structured learning and mentorship.

## Key Features

- **Role Dashboards** – Separate views for Trainee, Mentor and Director, each showing the information that role needs.
- **Skill Gap Analysis** – See the skills required for a role, compare them with current skills, and find what to learn next.
- **Mentorship** – Connect trainees with mentors to guide their learning journey.
- **Role Onboarding** – Explore job roles such as Weather Forecaster, Radar Technician, Data Analyst, Hydrologist, Meteorological Researcher and Cyclone Tracking (RSMC).
- **Course Catalog & Assessments** – Training course cards with durations, plus short 3-question multiple-choice quizzes with instant scoring.
- **Light / Dark mode** – Consistent gold-themed design across pages.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 |
| Styling | Tailwind CSS |
| Charts | Recharts |
| Backend | REST API |

## How to Run

1. Clone the repository
```bash
   git clone https://github.com/tharunbala-72/capacity-connect.git
   cd capacity-connect
```
2. Install dependencies
```bash
   npm install
```
3. Start the development server
```bash
   npm run dev
```
4. Open http://localhost:3000 in your browser.

### Demo Login

Use these credentials to explore the **Trainee**, **Mentor** and **Director** views:

| Field | Value |
|-------|-------|
| Username (or email) | `tharun` |
| PIN | `1234` |

> These are demo credentials for testing only.

## Project Structure

```
├── app/          # Pages and routes
├── components/   # Reusable UI components
├── data/         # Project data
├── public/       # Static files (includes courses.html)
└── README.md
```

## Team

| Member | Contribution |
|--------|--------------|
| **Tharun** | Full-stack architecture & APIs |
| **Sanjana** | Role onboarding wireframes |
| **Nithya Sri** | Course catalog structure, quizzes & documentation |

## Links

- Live role onboarding page: https://saravanansanjana08-art.github.io/Capacity-connect-/

## License

Created for educational purposes as part of the IMD Capacity Connect project.
