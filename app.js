const attackMapData = {
  Abyss: ["A Main", "B Main", "Mid to A", "Mid to B", "A Split", "B Split"],
  Ascent: ["A Main", "B Main", "Mid to A", "Mid to B", "A Split", "B Split"],
  Bind: ["A Short", "A Bath", "B Long", "Hookah"],
  Breeze: ["A Main", "Mid Doors", "B Main", "A Split", "B Split", "Elbow"],
  Corrode: ["A Main", "B Main", "Mid to A", "Mid to B", "A Split"],
  Fracture: ["A Main", "A Drop", "B Main", "Arcade", "A Split", "B Split"],
  Haven: ["A Long", "A Short", "C Long", "Garage", "B to A", "B to C", "Mid to B", "C Split", "A Split"],
  Icebox: ["A Main", "B Main", "Mid to A", "Mid to B"],
  Lotus: ["A Main", "B Main", "C Main", "A Tree", "B to C", "B to A"],
  Pearl: ["A Main", "Mid to A", "B Main", "Mid to B", "A Split", "B Split"],
  Split: ["A Main", "Mid to A", "B Main", "B Split", "Mid to B"],
  Sunset: ["A Main", "Mid to A", "B Main", "B Market", "B Split", "Mid to B"]
};

// Template only. Populate per-map locations later.
const defenseTakeSpaceMapData = {
  Abyss: ["A Main", "B Main", "Mid"],
  Ascent: ["A Main", "B Main", "Tree", "Top Mid"],
  Bind: ["A Short", "A Bath", "B Long", "Sands"],
  Breeze: ["A Main", "Mid", "B Main", "Elbow"],
  Corrode: ["A Main", "B Main", "Mid"],
  Fracture: ["A Main", "Satellite", "B Main", "Arcade"],
  Haven: ["A Long", "A Short", "C Long", "Mid"],
  Icebox: ["A Main", "B Main", "Mid"],
  Lotus: ["A Main", "B Main", "C Main"],
  Pearl: ["A Main", "Mid", "B Main"],
  Split: ["A Main", "B Main", "Mid"],
  Sunset: ["A Main", "B Main", "Mid"]
}

// Template only. Populate per-map locations later.
const defenseTrapMapData = {
  Abyss: ["A Main", "B", "Mid"],
  Ascent: ["A", "B", "Tree", "Bottom Mid"],
  Bind: ["A", "Showers", "B", "Hookah"],
  Breeze: ["A", "Mid", "B"],
  Corrode: ["Elbow", "B Main", "Mid"],
  Fracture: ["A Main", "B Main", "Arcade"],
  Haven: ["A Long", "Mid Window", "C Long", "Garage", "A Short"],
  Icebox: ["A Main", "B Main", "Kitchen", "Orange"],
  Lotus: ["A Main", "B Main", "C Main", "Tree"],
  Pearl: ["A Main", "Art", "Mid Doors", "B"],
  Split: ["A Main", "B Main", "Mail", "Vents", "Ramp"],
  Sunset: ["A Main", "B Main", "Mid Market"]
}

const defenseStackMapData = {
  Abyss: ["A", "B"],
  Ascent: ["A", "B", "Tree", "Bottom Mid"],
  Bind: ["A", "Showers", "B", "Hookah"],
  Breeze: ["A", "B"],
  Corrode: ["A", "B", "Mid"],
  Fracture: ["A", "B"],
  Haven: ["A", "B", "C", "Garage", "A Short"],
  Icebox: ["A", "B"],
  Lotus: ["A", "B", "C"],
  Pearl: ["A", "B"],
  Split: ["A", "B", "Mid"],
  Sunset: ["A", "B", "Mid"]
}

const rushCallTemplates = [
  "hit (area) or sum go fast don't stop",
  "go (area), im a freak :P",
  "go go go (area), blehhhh",
  "hit (area) type shii",
  "Go (area). I am not funny.",
  "go (area), NO PIVOT LETS GO EIGHTH",
  "Go (area) if panda's negative",
  "fk it go (area), baiters will be executed.",
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
  "NATS SPEECH: my boys, go kill them and go (area)",
  "ALECKS CALL: GO (area) GO (area) WHAT ARE U DOING LA STUPID KID"
];

const defenseTakeSpaceTemplates = [
  "go push (area) type shii", 
  "lets go (area) my teammates :D",
  "fk it go (area), go go go",
  "go (area) if panda's negative",
  "lets take space (area) or UTRASH",
  "hon hon hon je suis gnome let us rush (area)",
  "One crispy McChicken if TromboneManNoah calls a winning round: go (area)",
  "If Jon hasn't called anything yet, go (area)",
];

const defenseTrapTemplates = [
  "trap (area) they come trust",
  "trap (area) they come no kyap",
  "on EVERYONE in the stack's life, this works, trap (area)",
  "Sock called this one, trap (area)",
  "Capitulation called this one, trap (area)",
  "Give the hero rifle to the bottom fragger and trap (area)", 
  "buy some shotguns and trap (area)",
  "let's touch them in (area) my kittens BLEHHHH"
];

const defenseStackTemplates = [
  "stack (area) they come trust",
  "stack (area) they come no kyap",
  "on EVERYONE in the stack's life this works, stack (area)",
  "Capitulation called this one, stack (area)",
  "Give the hero rifle to the bottom fragger and stack (area)", 
  "buy some shotguns and stack (area)",
  "botlightvalorant called this one, stack (area)",
  "stack and then attack at (area). I am very funny.",
  "i am just a normal guy. Stack (area) my kittens",
  "ask jose what animal has stripes. If its a zebra, stack (area)"
];

const DEFAULT_DEFENSE_AREAS = ["A", "B", "Mid"];
const GOD_CALL_CHANCE = 0.05;

const valorantAgents = {
  duelist:    ["Jett", "Reyna", "Raze", "Phoenix", "Neon", "Iso", "Waylay", "Yoru"],
  initiator:  ["Sova", "Breach", "Skye", "KAY/O", "Fade", "Gekko", "Tejo"],
  controller: ["Brimstone", "Omen", "Viper", "Astra", "Harbor", "Clove", "Miks"],
  sentinel:   ["Sage", "Cypher", "Killjoy", "Chamber", "Deadlock", "Vyse", "Veto"]
};

const allAgents = [
  ...valorantAgents.duelist,
  ...valorantAgents.initiator,
  ...valorantAgents.controller,
  ...valorantAgents.sentinel
];

// ─── Reel animation constants ────────────────────────────────────────────────
const REEL_ITEM_WIDTH   = 110;   // px – width of each slot item
const REEL_TOTAL_ITEMS  = 50;    // total items per strip (extra tail for safety on wide screens)
const REEL_WINNER_POS   = 42;    // 0-based index where the winning item is placed
const REEL_DURATION_MS  = 3200;  // spin duration in ms
const ROLE_DISPLAY_POOL = ["Duelist", "Initiator", "Controller", "Sentinel", "Fill"];

const mapSelect = document.getElementById("mapSelect");
const sideSelect = document.getElementById("sideSelect");
const areasPanel = document.getElementById("areasPanel");
const areasList = document.getElementById("areasList");
const allAvailableBtn = document.getElementById("allAvailableBtn");
const callBtn = document.getElementById("callBtn");
const callOutput = document.getElementById("callOutput");
const historyList = document.getElementById("historyList");
const assignRolesBtn = document.getElementById("assignRolesBtn");
const teamOutput = document.getElementById("teamOutput");
const pageBody = document.body;

let state = {
  selectedMap: "",
  selectedSide: "attack",
  areaAvailability: {}
};

initialize();

function initialize() {
  Object.keys(attackMapData).forEach((mapName) => {
    const option = document.createElement("option");
    option.value = mapName;
    option.textContent = mapName;
    mapSelect.appendChild(option);
  });

  state.selectedMap = mapSelect.value;
  state.selectedSide = sideSelect.value;
  setupAvailabilityForSelection(state.selectedMap, state.selectedSide);
  renderAreas();

  mapSelect.addEventListener("change", onMapChange);
  sideSelect.addEventListener("change", onSideChange);
  allAvailableBtn.addEventListener("click", markAllAvailable);
  callBtn.addEventListener("click", callRound);
  assignRolesBtn.addEventListener("click", assignRoles);
  updateSideUI();
  setSiteTheme("normal");
}

function onMapChange() {
  state.selectedMap = mapSelect.value;
  setupAvailabilityForSelection(state.selectedMap, state.selectedSide);
  renderAreas();
  callOutput.textContent = "Map updated. PandaBot is ready for the next call.";
}

function onSideChange() {
  state.selectedSide = sideSelect.value;
  setupAvailabilityForSelection(state.selectedMap, state.selectedSide);
  renderAreas();
  updateSideUI();
  setSiteTheme("normal");
  callOutput.textContent = state.selectedSide === "defense"
    ? "Defense side selected. PandaBot will call defensive setups."
    : "Attack side selected. PandaBot will call rush/default rounds.";
}

function updateSideUI() {
  const hideAreasPanel = state.selectedSide === "defense";
  areasPanel.classList.toggle("is-hidden", hideAreasPanel);
}

function setupAvailabilityForSelection(mapName, side) {
  state.areaAvailability = {};
  getAreasForSide(mapName, side).forEach((area) => {
    state.areaAvailability[area] = true;
  });
}

function renderAreas() {
  areasList.innerHTML = "";

  getAreasForSide(state.selectedMap, state.selectedSide).forEach((area) => {
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
  if (state.selectedSide === "defense") {
    showDefenseCall();
    return;
  }

  const availableAreas = getEnabledAreas(getAttackAreasForMap(state.selectedMap));
  const shouldDefault = Math.random() < 0.1;
  const noAreasAvailable = availableAreas.length === 0;

  if (shouldDefault || noAreasAvailable) {
    showDefaultCall(noAreasAvailable);
    return;
  }

  showRushCall(pickRandom(availableAreas));
}

function showDefenseCall() {
  const strategies = [
    {
      type: "takeSpace",
      templates: defenseTakeSpaceTemplates,
      areas: getEnabledAreas(getDefenseTakeSpaceAreas(state.selectedMap))
    },
    {
      type: "trap",
      templates: defenseTrapTemplates,
      areas: getEnabledAreas(getDefenseTrapAreas(state.selectedMap))
    },
    {
      type: "stack",
      templates: defenseStackTemplates,
      areas: getEnabledAreas(getDefenseStackAreas(state.selectedMap))
    }
  ];

  const availableStrategies = strategies.filter((strategy) => strategy.areas.length > 0);

  if (availableStrategies.length === 0) {
    setSiteTheme("normal");
    callOutput.innerHTML = `
      <span class="tag tag-defense">Defense</span>
      No defense areas are enabled right now.
    `;
    prependHistory(`DEFENSE -> ${state.selectedMap} NO AREA`);
    return;
  }

  // Equal probability across defense strategies that can currently be played.
  const selectedStrategy = pickRandom(availableStrategies);
  const area = pickRandom(selectedStrategy.areas);
  const formattedMessage = pickRandom(selectedStrategy.templates).replace(/\(area\)/gi, `<strong>${area}</strong>`);

  setSiteTheme("normal");
  callOutput.innerHTML = `
    <span class="tag tag-defense">Defense</span>
    ${formattedMessage}
  `;
  prependHistory(`DEFENSE -> ${state.selectedMap} ${selectedStrategy.type.toUpperCase()} ${area}`);
}

function showRushCall(area) {
  const isGodCall = Math.random() < GOD_CALL_CHANCE;
  const messageTemplate = isGodCall ? pickRandom(godCallTemplates) : pickRandom(rushCallTemplates);
  const formattedMessage = messageTemplate.replace(/\(area\)/gi, `<strong>${area}</strong>`);
  const tagLabel = isGodCall ? "GOD CALL" : "Rush";
  const tagClass = isGodCall ? "tag-god" : "tag-rush";
  const historyPrefix = isGodCall ? "GOD CALL" : "RUSH";
  setSiteTheme(isGodCall ? "god" : "normal");

  callOutput.innerHTML = `
    <span class="tag ${tagClass}">${tagLabel}</span>
    ${formattedMessage}
  `;
  prependHistory(`${historyPrefix} -> ${state.selectedMap} ${area}`);
}

function showDefaultCall(noAreasAvailable) {
  setSiteTheme("default");
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

function getAreasForSide(mapName, side) {
  if (side === "defense") {
    const takeSpace = getDefenseTakeSpaceAreas(mapName);
    const trap = getDefenseTrapAreas(mapName);
    const stack = getDefenseStackAreas(mapName);
    return [...new Set([...takeSpace, ...trap, ...stack])];
  }

  return getAttackAreasForMap(mapName);
}

function getAttackAreasForMap(mapName) {
  return attackMapData[mapName] ?? [];
}

function getDefenseTakeSpaceAreas(mapName) {
  const configured = defenseTakeSpaceMapData[mapName] ?? [];
  return configured.length > 0 ? configured : DEFAULT_DEFENSE_AREAS;
}

function getDefenseTrapAreas(mapName) {
  const configured = defenseTrapMapData[mapName] ?? [];
  return configured.length > 0 ? configured : DEFAULT_DEFENSE_AREAS;
}

function getDefenseStackAreas(mapName) {
  const configured = defenseStackMapData[mapName] ?? [];
  return configured.length > 0 ? configured : DEFAULT_DEFENSE_AREAS;
}

function getEnabledAreas(areaPool) {
  return areaPool.filter((area) => Boolean(state.areaAvailability[area]));
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function assignRoles() {
  const inputs = document.querySelectorAll(".player-input");
  const names = Array.from(inputs).map(i => i.value.trim()).filter(n => n.length > 0);

  if (names.length === 0) {
    teamOutput.innerHTML = `<p class="hint">Enter at least one player name first!</p>`;
    teamOutput.classList.remove("is-hidden");
    return;
  }

  assignRolesBtn.disabled = true;
  teamOutput.innerHTML = "";
  teamOutput.classList.remove("is-hidden");

  try {
    const toLabel = r => r === "fill" ? "Fill" : r.charAt(0).toUpperCase() + r.slice(1);

    // Pre-roll jackpot (1%) — all players get Duelist
    const isJackpot = Math.random() < 0.01;
    let assignedRoles;

    if (isJackpot) {
      assignedRoles = names.map(() => "duelist");
    } else {
      const roles = ["duelist", "initiator", "controller", "sentinel", "fill"];
      const shuffled = [...roles].sort(() => Math.random() - 0.5);
      assignedRoles = names.map((_, i) => shuffled[i]);
    }

    // Pre-pick one agent per player — non-fill roles first, then fill
    // excludes already-taken agents so there are never duplicates
    const agents = new Array(assignedRoles.length);
    const taken  = new Set();

    // Pass 1: assign agents for all non-fill roles
    assignedRoles.forEach((role, i) => {
      if (role !== "fill") {
        const agent = pickRandom(valorantAgents[role]);
        agents[i] = agent;
        taken.add(agent);
      }
    });

    // Pass 2: assign agent for fill, excluding already-taken agents
    assignedRoles.forEach((role, i) => {
      if (role === "fill") {
        const available = allAgents.filter(a => !taken.has(a));
        const agent = pickRandom(available.length > 0 ? available : allAgents);
        agents[i] = agent;
        taken.add(agent);
      }
    });

    // ── Phase 1: Role reels ──────────────────────────────────────────────────
    const { rows: roleRows, strips: roleStrips } = buildReelRows(
      names.map((name, i) => ({
        name,
        pool: ROLE_DISPLAY_POOL,
        winner: toLabel(assignedRoles[i])
      }))
    );
    roleRows.forEach(row => teamOutput.appendChild(row));

    await delay(80); // allow DOM to paint before measuring widths
    await Promise.all(roleStrips.map((strip, i) => animateStrip(strip, i * 100)));

    // Jackpot reveal
    if (isJackpot) {
      const banner = document.createElement("div");
      banner.className = "jackpot-banner";
      banner.textContent = "🎰  JACKPOT — 5 DUELISTS!  🎰";
      teamOutput.prepend(banner);
      setSiteTheme("god");
      await delay(1800);
      banner.remove();
    }

    await delay(500);

    // ── Phase 2: Agent reels (one at a time) ──────────────────────────────────
    teamOutput.innerHTML = "";

    const agentConfigs = names.map((name, i) => {
      const role = assignedRoles[i];
      return {
        name,
        pool: role === "fill" ? allAgents : valorantAgents[role],
        winner: agents[i]
      };
    });

    for (let i = 0; i < agentConfigs.length; i++) {
      const { rows, strips } = buildReelRows([agentConfigs[i]]);
      teamOutput.appendChild(rows[0]);
      await delay(80);
      await animateStrip(strips[0]);
      await delay(300);
    }

    // ── Final results ────────────────────────────────────────────────────────
    if (!isJackpot) setSiteTheme("normal");

    teamOutput.innerHTML = names.map((name, i) => `
      <div class="team-row${isJackpot ? " team-row-jackpot" : ""}">
        <span class="team-player">${name}</span>
        <span class="tag tag-role-${assignedRoles[i]}">${toLabel(assignedRoles[i])}</span>
        <span class="team-agent">${agents[i]}</span>
      </div>
    `).join("");

  } finally {
    assignRolesBtn.disabled = false;
  }
}

// Builds N reel rows from an array of { name, pool, winner } configs.
// Returns the row DOM elements and their strip elements for animation.
function buildReelRows(configs) {
  const rows   = [];
  const strips = [];

  configs.forEach(({ name, pool, winner }) => {
    const row = document.createElement("div");
    row.className = "reel-row";

    const label = document.createElement("div");
    label.className = "reel-player-label";
    label.textContent = name; // textContent avoids any HTML injection

    const viewport = document.createElement("div");
    viewport.className = "reel-viewport";

    const strip = document.createElement("div");
    strip.className = "reel-strip";

    for (let i = 0; i < REEL_TOTAL_ITEMS; i++) {
      const el  = document.createElement("div");
      const val = (i === REEL_WINNER_POS) ? winner : pickRandom(pool);
      el.className  = `reel-item ${getReelItemClass(val)}`;
      el.textContent = val;
      if (i === REEL_WINNER_POS) el.dataset.winner = "true";
      strip.appendChild(el);
    }

    const highlight = document.createElement("div");
    highlight.className = "reel-highlight";

    viewport.appendChild(strip);
    viewport.appendChild(highlight);
    row.appendChild(label);
    row.appendChild(viewport);

    rows.push(row);
    strips.push(strip);
  });

  return { rows, strips };
}

// Maps a role display name or agent name to its reel item CSS class.
function getReelItemClass(value) {
  const roleMap = {
    Duelist:    "reel-item-duelist",
    Initiator:  "reel-item-initiator",
    Controller: "reel-item-controller",
    Sentinel:   "reel-item-sentinel",
    Fill:       "reel-item-fill"
  };
  if (roleMap[value]) return roleMap[value];

  // Agent name → look up which pool it belongs to
  if (valorantAgents.duelist.includes(value))    return "reel-item-duelist";
  if (valorantAgents.initiator.includes(value))  return "reel-item-initiator";
  if (valorantAgents.controller.includes(value)) return "reel-item-controller";
  if (valorantAgents.sentinel.includes(value))   return "reel-item-sentinel";
  return "reel-item-fill"; // fallback
}

// Animates a single reel strip. Returns a Promise that resolves when done.
function animateStrip(strip, startDelay = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      const viewport      = strip.parentElement;
      const containerWidth = viewport.clientWidth;
      const centerOffset  = containerWidth / 2 - REEL_ITEM_WIDTH / 2;
      const targetX       = centerOffset - REEL_WINNER_POS * REEL_ITEM_WIDTH;

      // Reset position without animation
      strip.style.transition = "none";
      strip.style.transform  = "translateX(0)";

      // Double rAF ensures the reset is committed before the transition starts
      requestAnimationFrame(() => requestAnimationFrame(() => {
        strip.style.transition = `transform ${REEL_DURATION_MS}ms cubic-bezier(0.12, 0, 0.06, 1)`;
        strip.style.transform  = `translateX(${targetX}px)`;

        setTimeout(() => {
          const winnerEl = strip.querySelector("[data-winner]");
          if (winnerEl) winnerEl.classList.add("reel-item-winner");
          strip.style.willChange = "auto"; // release compositor layer
          resolve();
        }, REEL_DURATION_MS);
      }));
    }, startDelay);
  });
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setSiteTheme(theme) {
  pageBody.classList.remove("god-theme", "default-theme");

  if (theme === "god") {
    pageBody.classList.add("god-theme");
    return;
  }

  if (theme === "default") {
    pageBody.classList.add("default-theme");
  }
}
