# Capacity Connect – IMD Training Portal

A web-based training portal that helps India Meteorological Department (IMD) staff discover job roles, take training courses and test their knowledge with short assessments.

**Live site:** https://saravanansanjana08-art.github.io/CAPACITY-CONNECT/

## Features

- **Role Onboarding** – Choose a job role from 6 options (Weather Forecaster, Radar Technician, Data Analyst, Hydrologist, Meteorological Researcher, Cyclone Tracking – RSMC).
- **Courses & Assessment** – Grid of training course cards showing course name, duration and a "Take Assessment" button.
- **Mini Quiz** – 3-question multiple-choice quiz (options A–D) with a "Submit Quiz" button and instant scoring.
- **Light / Dark mode** – Shared gold theme across all pages.

## Project Structure

```
├── app/               # Next.js pages
├── components/        # Reusable components
├── data/              # Project data
├── public/
│   └── courses.html   # Course & Assessment module (Nithyasri)
└── README.md
```

## Getting Started

```bash
git clone https://github.com/tharunbala-72/capacity-connect.git
cd capacity-connect
npm install
npm run dev
```

Open http://localhost:3000 in your browser. The courses page is at http://localhost:3000/courses.html

## Tech Stack

Next.js, HTML5, CSS3, JavaScript.

## Team & Modules

| Member | Module |
|--------|--------|
| Sanjana | Role Onboarding – header, job role cards, role selection |
| Nithyasri | Course & Assessment – course grid, 3-question quiz, README |
| Tharun | Backend |

## Future Improvements

- Save selected roles and quiz scores
- Filter courses by selected role
- Certificates on passing assessments
