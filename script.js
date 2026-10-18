
// ======================================
// CAPACITY CONNECT - ROLE DATA
// ======================================

const roles = [
    {
        title: "Weather Forecaster",
        description: "Interpret atmospheric conditions to prepare reliable weather forecasts.",
        tags: ["Meteorology", "Forecasting", "Analysis"],
        category: "Weather Operations",
        focus: "Weather prediction",
        learning: "Synoptic meteorology",
        summary: "Turn atmospheric observations into clear and useful weather forecasts.",
        overview: "Weather Forecasters examine weather observations, satellite imagery, atmospheric charts and prediction models to understand changing conditions. Their work supports planning and public weather awareness.",
        responsibilities: [
            "Analyse weather observations and atmospheric charts.",
            "Interpret numerical weather prediction output.",
            "Prepare forecasts for locations and time periods.",
            "Communicate uncertainty and potential weather risks.",
            "Monitor conditions and update forecasts."
        ],
        skills: ["Atmospheric science", "Critical thinking", "Data interpretation", "Communication"],
        tools: "Weather charts, satellite imagery, observation systems and forecast models.",
        preparation: "Study physics, mathematics and introductory meteorology. Practise reading weather maps and comparing forecasts with observed conditions."
    },
    {
        title: "Doppler Radar Technician",
        description: "Monitor radar systems, equipment health and reliable weather observations.",
        tags: ["Radar Systems", "Electronics", "Monitoring"],
        category: "Technical Operations",
        focus: "Radar monitoring",
        learning: "Radar fundamentals",
        summary: "Support dependable radar observations used to monitor precipitation and storms.",
        overview: "Doppler Radar Technicians help monitor radar equipment, check data quality and support maintenance. Radar observations provide information about precipitation and storm movement.",
        responsibilities: [
            "Monitor radar system status and data quality.",
            "Assist with equipment inspection and maintenance.",
            "Identify unusual readings and technical faults.",
            "Maintain inspection and service records.",
            "Coordinate with forecasting and engineering teams."
        ],
        skills: ["Electronics", "Troubleshooting", "Signal fundamentals", "Documentation"],
        tools: "Radar displays, sensors, diagnostic equipment and monitoring software.",
        preparation: "Learn basic electronics, sensors, signals and measurement systems. Practise interpreting radar imagery and recording technical observations."
    },
    {
        title: "Climate Data Analyst",
        description: "Transform climate records into useful trends, insights and visual reports.",
        tags: ["Python", "Statistics", "Visualisation"],
        category: "Climate Intelligence",
        focus: "Climate trends",
        learning: "Statistics and data science",
        summary: "Convert climate datasets into understandable evidence for informed decisions.",
        overview: "Climate Data Analysts organise and examine climate records to identify patterns, variability and trends. They communicate their findings through charts, reports and statistical summaries.",
        responsibilities: [
            "Collect, clean and organise climate datasets.",
            "Check missing values and inconsistent observations.",
            "Analyse temperature, rainfall and related variables.",
            "Create charts and communicate analytical findings.",
            "Document methods, results and limitations."
        ],
        skills: ["Python", "Statistics", "Data cleaning", "Visualisation"],
        tools: "Python, spreadsheets, statistical libraries and visualisation tools.",
        preparation: "Learn Python fundamentals, spreadsheets, statistics and chart creation. Build a small project using public temperature or rainfall records."
    },
    {
        title: "Hydrologist",
        description: "Study rainfall, river flow and water systems to understand water conditions.",
        tags: ["Water Science", "GIS", "Analysis"],
        category: "Hydrology",
        focus: "Water systems",
        learning: "Hydrology fundamentals",
        summary: "Connect rainfall and water observations to better understand water systems.",
        overview: "Hydrologists examine how water moves through catchments, rivers and the wider environment. Their analyses contribute to water-resource planning and flood assessment.",
        responsibilities: [
            "Analyse rainfall and river-level observations.",
            "Study catchments and runoff patterns.",
            "Support flood and water-resource assessments.",
            "Interpret geographical and watershed data.",
            "Prepare reports for planning teams."
        ],
        skills: ["Hydrology", "GIS", "Statistics", "Environmental science"],
        tools: "GIS software, rainfall records, river-flow data and mapping tools.",
        preparation: "Explore the water cycle, watersheds and rainfall-runoff relationships. Practise graphing rainfall and river-level data."
    },
    {
        title: "Meteorological Researcher",
        description: "Investigate atmospheric processes and improve scientific understanding.",
        tags: ["Research", "Physics", "Modelling"],
        category: "Scientific Research",
        focus: "Atmospheric science",
        learning: "Research methods",
        summary: "Investigate weather and climate processes using scientific methods and data.",
        overview: "Meteorological Researchers investigate atmospheric phenomena, evaluate models and explore ways to improve scientific understanding of weather and climate.",
        responsibilities: [
            "Review scientific literature and formulate research questions.",
            "Analyse observations and model-generated datasets.",
            "Design reproducible scientific experiments.",
            "Evaluate findings and communicate uncertainty.",
            "Document results in reports and research papers."
        ],
        skills: ["Physics", "Mathematics", "Programming", "Scientific writing"],
        tools: "Scientific Python, research datasets, numerical models and visualisation tools.",
        preparation: "Strengthen physics, mathematics, statistics and Python. Practise documenting a small data-analysis project with a clear method and conclusion."
    },
    {
        title: "Cyclone Tracking (RSMC)",
        description: "Monitor tropical cyclone development, movement and potential impacts.",
        tags: ["Cyclones", "Satellite Data", "Forecasting"],
        category: "Tropical Meteorology",
        focus: "Cyclone monitoring",
        learning: "Tropical meteorology",
        summary: "Follow tropical cyclone development and communicate changes in storm intensity and movement.",
        overview: "Cyclone-tracking work involves analysing satellite imagery, meteorological observations and forecast guidance to assess tropical cyclone location, movement and intensity. RSMC refers to a Regional Specialized Meteorological Centre.",
        responsibilities: [
            "Monitor tropical disturbances and cyclone development.",
            "Interpret satellite imagery and available observations.",
            "Assess storm movement and intensity estimates.",
            "Review forecast guidance and uncertainty.",
            "Support the preparation of cyclone information and advisories."
        ],
        skills: ["Tropical meteorology", "Satellite interpretation", "Forecast analysis", "Communication"],
        tools: "Satellite imagery, storm-track charts, observation data and forecast guidance.",
        preparation: "Learn tropical cyclone structure, atmospheric circulation, satellite interpretation and forecast uncertainty. Practise reading historical storm tracks."
    },
    {
        title: "The Crisis Manager",
        description: "Coordinate emergency response planning and decisions during critical events.",
        tags: ["Leadership", "Risk Assessment", "Coordination"],
        category: "Emergency Management",
        focus: "Incident coordination",
        learning: "Crisis management",
        summary: "Coordinate people, information and response priorities during high-pressure events.",
        overview: "A Crisis Manager helps prepare for disruptions, coordinate response activities and maintain clear communication between teams. In weather-related settings, this can involve working with authorities and emergency-response stakeholders.",
        responsibilities: [
            "Develop and review emergency response plans.",
            "Assess operational risks and response priorities.",
            "Coordinate teams and relevant stakeholders.",
            "Maintain clear situation updates and records.",
            "Review incidents and identify improvements."
        ],
        skills: ["Decision-making", "Risk assessment", "Leadership", "Communication"],
        tools: "Incident logs, response plans, risk registers and communication systems.",
        preparation: "Study emergency planning, risk assessment and incident coordination. Practise tabletop scenarios and clear, structured situation reporting."
    },
    {
        title: "The Boundary Spanner",
        description: "Connect technical experts, decision-makers and communities through shared information.",
        tags: ["Collaboration", "Communication", "Stakeholders"],
        category: "Stakeholder Engagement",
        focus: "Cross-team coordination",
        learning: "Science communication",
        summary: "Bridge the gap between technical knowledge and the people who need to use it.",
        overview: "A Boundary Spanner works across organisational or professional boundaries to improve cooperation and knowledge sharing. In weather services, this may mean translating technical information into practical guidance for partner organisations.",
        responsibilities: [
            "Build relationships across teams and organisations.",
            "Translate technical information for different audiences.",
            "Identify stakeholder information needs.",
            "Coordinate meetings and shared initiatives.",
            "Gather feedback and improve communication."
        ],
        skills: ["Communication", "Collaboration", "Negotiation", "Active listening"],
        tools: "Briefing documents, collaboration platforms, presentations and stakeholder maps.",
        preparation: "Practise explaining technical topics in plain language. Develop presentation, listening and stakeholder coordination skills."
    },
    {
        title: "M&A Specialist",
        description: "Support merger and acquisition analysis, due diligence and integration planning.",
        tags: ["Finance", "Research", "Strategy"],
        category: "Business Strategy",
        focus: "Transactions and integration",
        learning: "Financial analysis",
        summary: "Evaluate business opportunities and help coordinate transaction-related analysis.",
        overview: "M&A generally means mergers and acquisitions. An M&A Specialist researches organisations, supports financial and operational due diligence, and helps assess integration considerations. This is a business role rather than a standard meteorological role.",
        responsibilities: [
            "Research organisations, markets and strategic fit.",
            "Organise due-diligence information.",
            "Support financial and operational analysis.",
            "Track transaction risks and milestones.",
            "Assist with integration planning and reporting."
        ],
        skills: ["Financial analysis", "Research", "Excel", "Strategic thinking"],
        tools: "Spreadsheets, financial models, research databases and reporting tools.",
        preparation: "Learn accounting basics, financial statements, spreadsheet analysis and business strategy. Practise comparing organisations using public information."
    },
    {
        title: "The Seasonal Planner",
        description: "Use seasonal patterns and forecasts to support resource and activity planning.",
        tags: ["Planning", "Climate Trends", "Scheduling"],
        category: "Operational Planning",
        focus: "Seasonal readiness",
        learning: "Seasonal forecasting",
        summary: "Use seasonal information to help teams prepare for changing operational demands.",
        overview: "A Seasonal Planner considers recurring seasonal patterns, climate information and organisational requirements when coordinating schedules and resources. The role can support agriculture, water planning, logistics or weather-sensitive operations.",
        responsibilities: [
            "Review seasonal patterns and historical records.",
            "Interpret relevant seasonal forecast information.",
            "Coordinate schedules and resource requirements.",
            "Identify seasonal risks and planning assumptions.",
            "Update plans as new information becomes available."
        ],
        skills: ["Planning", "Data interpretation", "Scheduling", "Communication"],
        tools: "Calendars, spreadsheets, climate summaries and planning dashboards.",
        preparation: "Practise organising schedules, comparing historical seasonal data and building plans that account for uncertainty."
    },
    {
        title: "The Quality Assurance",
        description: "Check data, processes and outputs for accuracy, consistency and reliability.",
        tags: ["Quality Control", "Testing", "Documentation"],
        category: "Quality Management",
        focus: "Accuracy and reliability",
        learning: "Quality assurance methods",
        summary: "Improve reliability by finding inconsistencies and strengthening quality checks.",
        overview: "A Quality Assurance Specialist develops or follows checks to confirm that data, processes and deliverables meet defined standards. In a weather-data setting, this may include checking observations for missing, inconsistent or implausible values.",
        responsibilities: [
            "Review data and outputs against defined standards.",
            "Identify errors, inconsistencies and process gaps.",
            "Document findings and corrective actions.",
            "Maintain checklists and quality records.",
            "Recommend improvements to recurring workflows."
        ],
        skills: ["Attention to detail", "Testing", "Documentation", "Problem-solving"],
        tools: "Validation rules, checklists, spreadsheets and quality tracking systems.",
        preparation: "Learn data validation, testing fundamentals, documentation and root-cause analysis. Practise checking sample datasets for common errors."
    },
    {
        title: "The Lean Operator",
        description: "Improve workflows by reducing waste and making operational processes more efficient.",
        tags: ["Process Improvement", "Lean", "Metrics"],
        category: "Operational Excellence",
        focus: "Workflow efficiency",
        learning: "Lean principles",
        summary: "Make processes more reliable and efficient through measurable, continuous improvement.",
        overview: "A Lean Operator examines how work flows through a process and looks for delays, unnecessary steps and avoidable errors. Lean principles emphasise customer value, standardised work and continuous improvement.",
        responsibilities: [
            "Map current workflows and identify bottlenecks.",
            "Measure process performance using suitable indicators.",
            "Identify waste and opportunities for improvement.",
            "Help implement and document process changes.",
            "Monitor outcomes and support continuous improvement."
        ],
        skills: ["Process mapping", "Problem-solving", "Metrics", "Teamwork"],
        tools: "Workflow diagrams, spreadsheets, checklists and performance dashboards.",
        preparation: "Learn basic Lean principles, process mapping and simple performance metrics. Practise mapping a familiar process and suggesting measurable improvements."
    }
];

// ======================================
// ELEMENTS AND SELECTION STATE
// ======================================

const roleGrid = document.getElementById("roleGrid");
const selectedCount = document.getElementById("selectedCount");
const selectionMessage = document.getElementById("selectionMessage");
const continueBtn = document.getElementById("continueBtn");
const detailsPanel = document.getElementById("detailsPanel");
const themeToggle = document.getElementById("themeToggle");

let selectedRoleIndex = null;

// ======================================
// CREATE ALL 12 CARDS
// ======================================

function renderCards() {
    roleGrid.replaceChildren();

    roles.forEach((role, index) => {
        const selected = selectedRoleIndex === index;

        const card = document.createElement("article");
        card.className = "role-card" + (selected ? " selected" : "");
        card.style.animationDelay = `${Math.min(index, 6) * 55}ms`;

        const top = document.createElement("div");
        top.className = "card-top";

        const number = document.createElement("span");
        number.className = "role-number";
        number.textContent = `ROLE ${String(index + 1).padStart(2, "0")}`;

        const status = document.createElement("span");
        status.className = "selected-label";
        status.textContent = selected ? "✓ SELECTED" : "AVAILABLE";

        top.append(number, status);

        const title = document.createElement("h3");
        title.textContent = role.title;

        const description = document.createElement("p");
        description.className = "role-description";
        description.textContent = role.description;

        const tags = document.createElement("div");
        tags.className = "skill-tags";

        role.tags.forEach(tagText => {
            const tag = document.createElement("span");
            tag.className = "skill-tag";
            tag.textContent = tagText;
            tags.appendChild(tag);
        });

        const selectBtn = document.createElement("button");
        selectBtn.type = "button";
        selectBtn.className = "select-btn";
        selectBtn.textContent = selected
            ? "✓ Selected · Unselect"
            : "Select Role →";
        selectBtn.setAttribute("aria-pressed", String(selected));

        selectBtn.addEventListener("click", () => {
            // Click the same role again to unselect it.
            selectedRoleIndex =
                selectedRoleIndex === index ? null : index;

            // Hide the previous role profile when changing selection.
            detailsPanel.hidden = true;

            updateSelection();
        });

        card.append(top, title, description, tags, selectBtn);
        roleGrid.appendChild(card);
    });
}

// ======================================
// UPDATE THE SELECTED ROLE
// ======================================

function updateSelection() {
    const hasSelection = selectedRoleIndex !== null;

    selectedCount.textContent = hasSelection ? "1" : "0";

    selectionMessage.textContent = hasSelection
        ? `${roles[selectedRoleIndex].title} selected`
        : "No role selected";

    continueBtn.disabled = !hasSelection;

    renderCards();
}

// ======================================
// POPULATE THE DEDICATED PROFILE PANEL
// ======================================

function showDetails(role) {
    document.getElementById("detailTitle").textContent = role.title;
    document.getElementById("detailSummary").textContent = role.summary;
    document.getElementById("detailCategory").textContent = role.category;
    document.getElementById("detailFocus").textContent = role.focus;
    document.getElementById("detailLearning").textContent = role.learning;
    document.getElementById("detailIcon").textContent = role.icon;
    document.getElementById("detailOverview").textContent = role.overview;
    document.getElementById("detailTools").textContent = role.tools;
    document.getElementById("detailPreparation").textContent =
        role.preparation;

    // Add responsibilities.
    const responsibilityList =
        document.getElementById("detailResponsibilities");

    responsibilityList.replaceChildren();

    role.responsibilities.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        responsibilityList.appendChild(li);
    });

    // Add detailed skill tags.
    const skillContainer = document.getElementById("detailSkills");
    skillContainer.replaceChildren();

    role.skills.forEach(skill => {
        const tag = document.createElement("span");
        tag.className = "skill-tag";
        tag.textContent = skill;
        skillContainer.appendChild(tag);
    });

    // Open a separate panel rather than an alert or plain text list.
    detailsPanel.hidden = false;

    // Restart the entrance animation when another profile opens.
    detailsPanel.style.animation = "none";
    void detailsPanel.offsetWidth;
    detailsPanel.style.animation = "";

    detailsPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    detailsPanel.focus({ preventScroll: true });
}

// ======================================
// CONTINUE BUTTON
// ======================================

continueBtn.addEventListener("click", () => {
    if (selectedRoleIndex === null) return;

    showDetails(roles[selectedRoleIndex]);
});

// ======================================
// BACK AND CHANGE ROLE BUTTONS
// ======================================

function returnToRoles() {
    detailsPanel.hidden = true;

    document.getElementById("rolesSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

document.getElementById("backBtn").addEventListener("click", returnToRoles);
document.getElementById("changeRoleBtn").addEventListener("click", returnToRoles);

// ======================================
// LIGHT AND DARK THEME
// ======================================

themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");

    themeToggle.textContent = isLight ? "☾ Dark Mode" : "☼ Light Mode";

    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
});

// ======================================
// INITIALISE WEBSITE
// ======================================

updateSelection();

