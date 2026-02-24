document.addEventListener("DOMContentLoaded", function () {
  // job information in array
  let jobs = [
    {
      id: 1,
      company: "Mobile First Corp",
      position: "React Native Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $175,000",
      description:
        "Build cross-platform mobile applications using React Native.",
      status: "all",
    },
    {
      id: 2,
      company: "WebFlow Agency",
      position: "Web Designer",
      location: "Los Angeles, CA",
      type: "Part-time",
      salary: "$80,000 - $120,000",
      description: "Create stunning web experiences for modern clients.",
      status: "all",
    },
    {
      id: 3,
      company: "DataViz Solutions",
      position: "Data Visualization Specialist",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$125,000 - $165,000",
      description: "Transform complex data into compelling visualizations.",
      status: "all",
    },
    {
      id: 4,
      company: "CloudFirst Inc",
      position: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $175,000",
      description: "Design scalable backend systems using Python and AWS.",
      status: "all",
    },
    {
      id: 5,
      company: "Innovation Labs",
      position: "UI/UX Engineer",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110,000 - $150,000",
      description: "Create beautiful and functional user interfaces.",
      status: "all",
    },
    {
      id: 6,
      company: "MegaCorp Solutions",
      position: "JavaScript Developer",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130,000 - $170,000",
      description: "Build enterprise applications using modern JS frameworks.",
      status: "all",
    },
    {
      id: 7,
      company: "StartupXYZ",
      position: "Full Stack Engineer",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $160,000",
      description: "Work on our fast-growing startup core platform.",
      status: "all",
    },
    {
      id: 8,
      company: "TechCorp Industries",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$130,000 - $175,000",
      description: "Build scalable web apps using React and TypeScript.",
      status: "all",
    },
  ];

  // ELEMENTS catch
  const jobList = document.getElementById("job-list");
  const totalCount = document.getElementById("total-count");
  const interviewCount = document.getElementById("interview-count");
  const rejectedCount = document.getElementById("rejected-count");
  const jobsCountText = document.getElementById("jobs-count");
  const noJobs = document.getElementById("no-jobs");

  const tabAll = document.getElementById("tab-all");
  const tabInterview = document.getElementById("tab-interview");
  const tabRejected = document.getElementById("tab-rejected");

  let currentTab = "all";
  function setActiveTab(tabName) {
    [tabAll, tabInterview, tabRejected].forEach((tab) => {
      tab.classList.remove("bg-blue-600", "text-white");
      tab.classList.add("bg-gray-100", "text-gray-600");
    });

    // Active tab blue code
    if (tabName === "all") {
      tabAll.classList.add("bg-blue-600", "text-white");
      tabAll.classList.remove("bg-gray-100", "text-gray-600");
    } else if (tabName === "interview") {
      tabInterview.classList.add("bg-blue-600", "text-white");
      tabInterview.classList.remove("bg-gray-100", "text-gray-600");
    } else if (tabName === "rejected") {
      tabRejected.classList.add("bg-blue-600", "text-white");
      tabRejected.classList.remove("bg-gray-100", "text-gray-600");
    }
  }

  // RENDER FUNCTION
  function renderJobs() {
    jobList.innerHTML = "";

    const filteredJobs =
      currentTab === "all"
        ? jobs
        : jobs.filter((job) => job.status === currentTab);

    filteredJobs.length === 0
      ? noJobs.classList.remove("hidden")
      : noJobs.classList.add("hidden");

    // card
    filteredJobs.forEach((job) => {
      const card = document.createElement("div");
      card.className =
        " rounded-md bg-white p-5 hover:bg-gray-100 transition    ";
      card.innerHTML = `
     <h3 class="font-semibold text-lg text-[#002c5c]">${job.company}</h3>
     <div class="flex justify-between items-center">
          <p class="text-sm text-gray-500">${job.position}</p>
          <button class="delete-btn text-gray-500 hover:text-red-600"     data-id="${job.id}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>

        <p class="text-sm text-gray-500 mt-2">
          ${job.location} • ${job.type} • ${job.salary}

        </p>
 <span class="${
   job.status === "interview"
     ? "bg-green-100 text-green-600"
     : job.status === "rejected"
       ? "bg-red-100 text-red-500"
       : "bg-[#e7effe] text-gray-600"
 } rounded px-1 py-1 mt-2 inline-block text-xs font-semibold">
  ${
    job.status === "interview"
      ? "INTERVIEW"
      : job.status === "rejected"
        ? "REJECTED"
        : "NOT APPLIED"
  }
</span>
        <p class="text-sm text-gray-600 mt-3">
          ${job.description}
        </p>

        <div class="flex gap-3 mt-4">
          <button class="interview-btn px-4 py-1 text-sm border-2 border-green-400 rounded"
            data-id="${job.id}">
            Interview
          </button>

          <button class="rejected-btn px-4 py-1 text-sm border-2 border-red-400 rounded"
            data-id="${job.id}">
            Rejected
          </button>
        </div>
      `;

      jobList.appendChild(card);
    });

    updateCounts();

    setActiveTab(currentTab);
  }

  // COUNT UPDATE

  function updateCounts() {
    totalCount.textContent = jobs.length;

    const interview = jobs.filter((j) => j.status === "interview").length;
    const rejected = jobs.filter((j) => j.status === "rejected").length;

    interviewCount.textContent = interview;
    rejectedCount.textContent = rejected;

    if (currentTab === "all") jobsCountText.textContent = jobs.length + " jobs";
    if (currentTab === "interview")
      jobsCountText.textContent = interview + " of " + jobs.length + " jobs";
    if (currentTab === "rejected")
      jobsCountText.textContent = rejected + " of " + jobs.length + " jobs";
  }

  // EVENT DELEGATION

  jobList.addEventListener("click", function (e) {
    const id = Number(e.target.closest("button")?.dataset.id);
    if (!id) return;

    if (e.target.closest(".interview-btn")) {
      const job = jobs.find((j) => j.id === id);
      job.status = "interview";
      renderJobs();
    }

    if (e.target.closest(".rejected-btn")) {
      const job = jobs.find((j) => j.id === id);
      job.status = "rejected";
      renderJobs();
    }

    if (e.target.closest(".delete-btn")) {
      jobs = jobs.filter((j) => j.id !== id);
      renderJobs();
    }
  });

  // TAB

  tabAll.addEventListener("click", function () {
    currentTab = "all";
    renderJobs();
  });

  tabInterview.addEventListener("click", function () {
    currentTab = "interview";
    renderJobs();
  });

  tabRejected.addEventListener("click", function () {
    currentTab = "rejected";
    renderJobs();
  });

  renderJobs();
});
