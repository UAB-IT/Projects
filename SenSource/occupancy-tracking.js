function safeStudy(spaceCode) {
  const baseUrl = "https://display.safespace.io";
  const parent = document.getElementById(spaceCode);

  /* Get all input elements */
  const container = {
    currOcc: parent.querySelector(".curr-occ"),
    maxCap: parent.querySelector(".max-cap"),
    percent: parent.querySelector(".percent"),
    status: parent.querySelector(".status"),
    statusIcon: parent.querySelector(".status-icon"),
    statusDescription: parent.querySelector(".status-description"),
    progress: parent.querySelector(".progress-bar"),
  };

  /* Initilize variables to be set later, ensures proper scope */
  let occupancy = 0;
  let capacity = 0;
  let percent = 0;

  /* Start Promise */
  Promise.all([
    /* Fetch the occupancy value */
    fetch(`${baseUrl}/value/live/${spaceCode}`)
      .then((response) => response.text())
      .then((val) => (occupancy = +val)),

    /* Fetch the capacity value */
    fetch(`${baseUrl}/entity/space/hash/${spaceCode}`)
      .then((response) => response.json())
      .then((body) => (capacity = +body.space.maxCapacity)),
  ])
    .then(() => {
      /* Add the occupancy and capacity text to their containers */
      container.currOcc.textContent = occupancy;
      container.maxCap.textContent = capacity;
      /* Calculate thee percentage full */
      percent = Math.floor((occupancy / capacity) * 100);

      container.percent.textContent = percent;
      container.progress.value = percent;

      /* Use good status if percentage is less than 75
         Caution status if greater than 75 but less than 100
         Full status if equal to 100 */
      if (percent < 75) {
        container.statusIcon.src =
          "https://www.uab.edu/it/home/images/icons/icon-check.png";
        container.statusIcon.alt = "Available Space";
        container.statusDescription.innerHTML = "Enter";
        parent.classList.add("ok-status");
      } else if (percent < 100) {
        container.statusIcon.src =
          "https://www.uab.edu/it/home/images/icons/icon-caution.png";
        container.statusIcon.alt = "Nearing Capacity";
        container.statusDescription.innerHTML = "Almost Full";
        parent.classList.add("caution-status");
      } else {
        container.statusIcon.src =
          "https://www.uab.edu/it/home/images/icons/icon-cancel.png";
        container.statusIcon.alt = "At Capacity";
        container.statusDescription.innerHTML = "Full";
        parent.classList.add("full-status");
      }
    })
    .then(() => {
      /* Rerun the function every 10 seconds to get live data */
      setTimeout(safeStudy, 10000, spaceCode);
    });
}
