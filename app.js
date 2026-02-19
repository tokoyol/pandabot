const mapData = {
  Ascent: ["A Main", "B Main", "Mid to A", "Mid to B", "A Split", "B Split"],
  Bind: ["A Short", "A Bath", "B Long", "Hookah"],
  Breeze: ["A Main", "Mid Doors", "B Main", "A Split", "B Split", "Elbow"],
  Fracture: ["A Main", "A Drop", "B Main", "Arcade", "A Split", "B Split"],
  Haven: ["A Long", "A Short", "C Long", "Garage", "B to A", "B to C", "Mid to B", "C Split", "A Split"],
  Icebox: ["A Main", "B Main", "Mid to A", "Mid to B"],
  Lotus: ["A Main", "B Main", "C Main", "A Tree", "B to C", "B to A"],
  Pearl: ["A Main", "Mid to A", "B Main", "Mid to B", "A Split", "B Split"],
  Split: ["A Main", "Mid to A", "B Main", "B Garage", "B Split", "Mid to B"],
  Sunset: ["A Main", "Mid to A", "B Main", "B Market", "B Split", "Mid to B"]
};

const rushCallTemplates = [
  "hit (area) or sum go fast don't stop",
  "go (area), im a freak :P",
  "go go go (area), blehhhh",
  "hit (area) type shii",
  "Go (area). I am not funny.",
  "Gnome called this one, go (area)",
  "Sock called this one, go (area)",
  "Jon called this one, go (area)",
  "Drakken called this one, go (area)",
  "Claws called this one, go (area)",
  "Capitulation called this one, go (area)",
  "Annie called this one, rush (area)",
  "Jose called this one, go (area)"
];

const godCallTemplates = [
  "Allah himself called this one: Rush (area)",
  "THE GREAT VICOTHY BLESSES YOU WITH A GOD ROUND: RUSH (area)",
  "FNS HIMSELF HAS CALLED: RUSH (area)",
  "BEN TENZ CALL: GO (area)",
  "ECO CALL: GO (area)",
  "NATS SPEECH: my boys, kill them at (area)"
];

const GOD_CALL_CHANCE = 0.08;

const mapSelect = document.getElementById("mapSelect");
const areasList = document.getElementById("areasList");
const allAvailableBtn = document.getElementById("allAvailableBtn");
const callBtn = document.getElementById("callBtn");
const callOutput = document.getElementById("callOutput");
const historyList = document.getElementById("historyList");

let state = {
  selectedMap: "",
  areaAvailability: {}
};

initialize();

function initialize() {
  Object.keys(mapData).forEach((mapName) => {
    const option = document.createElement("option");
    option.value = mapName;
    option.textContent = mapName;
    mapSelect.appendChild(option);
  });

  state.selectedMap = mapSelect.value;
  setupAvailabilityForMap(state.selectedMap);
  renderAreas();

  mapSelect.addEventListener("change", onMapChange);
  allAvailableBtn.addEventListener("click", markAllAvailable);
  callBtn.addEventListener("click", callRound);
}

function onMapChange() {
  state.selectedMap = mapSelect.value;
  setupAvailabilityForMap(state.selectedMap);
  renderAreas();
  callOutput.textContent = "Map updated. PandaBot is ready for the next call.";
}

function setupAvailabilityForMap(mapName) {
  state.areaAvailability = {};
  mapData[mapName].forEach((area) => {
    state.areaAvailability[area] = true;
  });
}

function renderAreas() {
  areasList.innerHTML = "";

  mapData[state.selectedMap].forEach((area) => {
    const chip = document.createElement("label");
    chip.className = "area-chip";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(state.areaAvailability[area]);
    checkbox.addEventListener("change", () => {
      state.areaAvailability[area] = checkbox.checked;
      text.classList.toggle("off", !checkbox.checked);
    });

    const text = document.createElement("span");
    text.textContent = area;
    text.classList.toggle("off", !checkbox.checked);

    chip.appendChild(checkbox);
    chip.appendChild(text);
    areasList.appendChild(chip);
  });
}

function markAllAvailable() {
  Object.keys(state.areaAvailability).forEach((area) => {
    state.areaAvailability[area] = true;
  });
  renderAreas();
}

function callRound() {
  const availableAreas = Object.entries(state.areaAvailability)
    .filter(([, available]) => available)
    .map(([area]) => area);

  const shouldDefault = Math.random() < 0.1;
  const noAreasAvailable = availableAreas.length === 0;

  if (shouldDefault || noAreasAvailable) {
    showDefaultCall(noAreasAvailable);
    return;
  }

  const area = pickRandom(availableAreas);
  showRushCall(area);
}

function showRushCall(area) {
  const isGodCall = Math.random() < GOD_CALL_CHANCE;
  const messageTemplate = isGodCall ? pickRandom(godCallTemplates) : pickRandom(rushCallTemplates);
  const formattedMessage = messageTemplate.replace(/\(area\)/gi, `<strong>${area}</strong>`);
  const tagLabel = isGodCall ? "GOD CALL" : "Rush";
  const tagClass = isGodCall ? "tag-god" : "tag-rush";
  const historyPrefix = isGodCall ? "GOD CALL" : "RUSH";

  callOutput.innerHTML = `
    <span class="tag ${tagClass}">${tagLabel}</span>
    ${formattedMessage}
  `;
  prependHistory(`${historyPrefix} -> ${state.selectedMap} ${area}`);
}

function showDefaultCall(noAreasAvailable) {
  const reason = noAreasAvailable
    ? "All areas are currently disabled."
    : "PandaBot rolled the 10% default chance :O";

  callOutput.innerHTML = `
    <span class="tag tag-default">Default</span>
    Play d-d-d-d-d-DEFAULT!? ${reason}
  `;
  prependHistory(`DEFAULT -> ${state.selectedMap}`);
}

function prependHistory(entry) {
  if (historyList.children.length === 1 && historyList.firstElementChild.textContent === "No calls yet.") {
    historyList.innerHTML = "";
  }

  const line = document.createElement("li");
  line.textContent = `${new Date().toLocaleTimeString()} - ${entry}`;
  historyList.prepend(line);

  while (historyList.children.length > 8) {
    historyList.removeChild(historyList.lastElementChild);
  }
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}
