/* =========================================================
   COLORGRADE LAB
   Interactive Color Page
   ========================================================= */

const DATA = {

  /* ================= PRIMARY CONTROLS ================= */

  "Lift": {
    category: "PRIMARY CORRECTION",
    subtitle: "Shadow / black-level control",
    intro: "Lift controls the darker tonal range and helps establish a clean, intentional black level.",
    what: "Lift primarily affects shadows. Lowering it can deepen blacks while raising it can open shadow detail.",
    scope: "Use the Waveform. Watch the bottom of the signal for crushed or unnaturally lifted shadows.",
    tip: "Preserve useful shadow detail. Do not use Lift to solve an overall exposure problem.",
    type: "lift"
  },

  "Gamma": {
    category: "PRIMARY CORRECTION",
    subtitle: "Midtone / subject exposure",
    intro: "Gamma controls the middle tonal range and is especially useful for placing faces and subjects.",
    what: "Gamma changes the midtones without primarily targeting the deepest shadows or brightest highlights.",
    scope: "Use the Waveform to see where the subject sits in the midrange. RGB Parade can reveal channel imbalance.",
    tip: "Do not make faces unnaturally bright.",
    type: "gamma"
  },

  "Gain": {
    category: "PRIMARY CORRECTION",
    subtitle: "Highlight / white-level control",
    intro: "Gain controls the upper tonal range and helps establish controlled highlights.",
    what: "Gain is useful for bright areas, highlight presence and overall highlight placement.",
    scope: "Watch the top of the Waveform and RGB Parade for clipping.",
    tip: "Do not clip windows, clouds or other important bright detail.",
    type: "gain"
  },

  "Offset": {
    category: "PRIMARY CORRECTION",
    subtitle: "Overall image level",
    intro: "Offset moves the image broadly and is useful for initial exposure placement.",
    what: "Offset makes a broad image-level adjustment and is useful before refining individual tonal regions.",
    scope: "The Waveform moves broadly with Offset, making it useful for positioning the whole signal.",
    tip: "Do not use Offset for a local problem.",
    type: "offset"
  },

  "Contrast": {
    category: "PRIMARY CORRECTION",
    subtitle: "Tonal separation",
    intro: "Contrast controls the separation between darker and brighter values.",
    what: "Contrast can give flat footage more structure or soften an overly contrasty image.",
    scope: "Use the Waveform to see the tonal range expanding or compressing.",
    tip: "Do not crush blacks or clip highlights.",
    type: "contrast"
  },

  "Pivot": {
    category: "PRIMARY CORRECTION",
    subtitle: "Contrast center",
    intro: "Pivot works with Contrast to change where the contrast adjustment is centered.",
    what: "Pivot changes the tonal center around which Contrast operates.",
    scope: "Watch which tonal region expands or compresses on the Waveform.",
    tip: "Set Contrast first, then use Pivot deliberately.",
    type: "pivot"
  },

  "Temperature": {
    category: "WHITE BALANCE",
    subtitle: "Warm / cool axis",
    intro: "Temperature moves the image between cooler and warmer color balance.",
    what: "Temperature is useful for correcting blue or warm casts and for intentionally creating warm or cool moods.",
    scope: "RGB Parade is useful for checking neutral areas and channel balance.",
    tip: "Do not confuse creative warmth with technical white-balance correction.",
    type: "temperature"
  },

  "Tint": {
    category: "WHITE BALANCE",
    subtitle: "Green / magenta axis",
    intro: "Tint controls the green-to-magenta side of color balance.",
    what: "Tint is useful for fluorescent green, magenta contamination and mixed-light corrections.",
    scope: "RGB Parade helps reveal channel imbalance in neutral areas.",
    tip: "Keep Tint corrections small and check skin tones.",
    type: "tint"
  },

  "Saturation": {
    category: "COLOR",
    subtitle: "Overall color intensity",
    intro: "Saturation controls global color intensity.",
    what: "Use Saturation to set overall color energy after exposure and white balance are correct.",
    scope: "The Vectorscope shows how far chroma extends from the center.",
    tip: "Do not use Saturation to hide a white-balance problem.",
    type: "saturation"
  },

  "Color Boost": {
    category: "COLOR",
    subtitle: "Selective color enhancement",
    intro: "Color Boost increases color intensity with a different character from simply raising global Saturation.",
    what: "Color Boost is useful for giving muted colors more presence while being less aggressive than global saturation.",
    scope: "Check the Vectorscope and skin tones while increasing it.",
    tip: "Use subtle amounts rather than pushing the entire image aggressively.",
    type: "boost"
  },

  "Midtone Detail": {
    category: "IMAGE CHARACTER",
    subtitle: "Texture / definition",
    intro: "Midtone Detail changes perceived definition around midtone structures.",
    what: "Use it to increase controlled definition or create a softer, less digital-looking texture.",
    scope: "Judge the effect mainly in the Viewer at actual delivery size.",
    tip: "Do not use Midtone Detail as a replacement for sharpening.",
    type: "detail"
  },

  "Shadows": {
    category: "TONAL CONTROL",
    subtitle: "Targeted shadow range",
    intro: "Shadows provides more targeted control over darker regions.",
    what: "Use it to open shadow detail or deepen selected dark regions after primary balancing.",
    scope: "Use the Waveform to verify the lower tonal range.",
    tip: "Watch for lifted noise and crushed texture.",
    type: "shadows"
  },

  "Highlights": {
    category: "TONAL CONTROL",
    subtitle: "Targeted highlight range",
    intro: "Highlights provides targeted control over brighter regions.",
    what: "Use it to recover highlight character or control bright areas.",
    scope: "The Waveform shows the upper tonal region and clipping behavior.",
    tip: "Do not flatten highlights so much that the shot loses shape.",
    type: "highlights"
  },

  "Luminance Mix": {
    category: "PRIMARY CORRECTION",
    subtitle: "Luma / chroma relationship",
    intro: "Luminance Mix controls the relationship between luminance and chroma in primary corrections.",
    what: "Use it when a color adjustment is changing brightness in an undesirable way.",
    scope: "Waveform plus RGB Parade help reveal tonal and channel changes.",
    tip: "Use Luminance Mix deliberately rather than randomly.",
    type: "luma"
  },


  /* ================= PROFESSIONAL TOOLS ================= */

  "Color Wheels": {
    category: "PRIMARY COLOR",
    subtitle: "Lift • Gamma • Gain • Offset",
    intro: "The primary wheels are the foundation for tonal and chromatic balancing.",
    what: "Each wheel targets a different tonal region: Lift affects shadows, Gamma midtones, Gain highlights and Offset the overall image.",
    scope: "Waveform, RGB Parade and Vectorscope work together here.",
    tip: "Do not move every wheel randomly. Identify the problem first.",
    type: "wheels"
  },

  "Curves": {
    category: "SECONDARY COLOR",
    subtitle: "Precise tonal and color control",
    intro: "Curves let you make precise changes to luminance, hue and saturation relationships.",
    what: "Use the appropriate curve mode to make controlled changes to a specific part of the image.",
    scope: "Use Waveform for luminance changes and Vectorscope for chroma changes.",
    tip: "Make small controlled points instead of extreme curve shapes.",
    type: "curves"
  },

  "Qualifier": {
    category: "SECONDARY COLOR",
    subtitle: "Color-based selection",
    intro: "Qualifier creates a matte by selecting pixels using hue, saturation and luminance.",
    what: "Use it for skin, skies, objects and other targeted color corrections.",
    scope: "Inspect the matte first, then verify the resulting correction with scopes.",
    tip: "A dirty or unstable matte will produce a bad grade.",
    type: "qualifier"
  },

  "Power Windows": {
    category: "SECONDARY COLOR",
    subtitle: "Shape-based selective grading",
    intro: "Power Windows use shapes to restrict a correction to a region of the frame.",
    what: "Use them to brighten a face, control a background, create separation or make a vignette.",
    scope: "The Viewer checks placement and softness while scopes verify the tonal change.",
    tip: "Hard edges and obvious vignettes are common mistakes.",
    type: "window"
  },

  "Tracker": {
    category: "MOTION",
    subtitle: "Follow movement through a shot",
    intro: "Tracker follows image movement so a selective correction can stay attached to a subject.",
    what: "Use tracking with Power Windows or other selections that need to follow moving subjects.",
    scope: "Review the Viewer for tracking drift and then verify the resulting correction.",
    tip: "Never trust a track without reviewing the entire shot.",
    type: "tracker"
  },

  "Nodes": {
    category: "COLOR WORKFLOW",
    subtitle: "Organize the grade",
    intro: "Nodes separate technical, secondary, creative and output decisions.",
    what: "A node tree makes a grade easier to understand, troubleshoot and change.",
    scope: "Check scopes after important nodes to understand what each operation contributes.",
    tip: "Avoid one giant node and avoid meaningless node clutter.",
    type: "nodes"
  },

  "Gallery": {
    category: "REFERENCE",
    subtitle: "Save and compare stills",
    intro: "Gallery stills provide visual references for matching and continuity.",
    what: "Use Gallery stills to save hero frames and compare shots during a grading session.",
    scope: "Scopes supplement visual matching when technical matching matters.",
    tip: "Do not force every shot to identical numeric values.",
    type: "gallery"
  },

  "LUTs": {
    category: "COLOR TRANSFORM",
    subtitle: "Lookup-table transforms",
    intro: "A LUT maps input values to output values and can be technical or creative.",
    what: "Use a LUT when you understand its expected input and output color space.",
    scope: "Waveform, RGB Parade and Vectorscope can verify the transformed signal.",
    tip: "A LUT is not exposure correction.",
    type: "luts"
  },

  "RGB Mixer": {
    category: "COLOR",
    subtitle: "RGB channel relationships",
    intro: "RGB Mixer changes how source RGB channels contribute to output channels.",
    what: "Use it for channel-level technical or creative transformations.",
    scope: "RGB Parade is especially useful for checking channel behavior.",
    tip: "Avoid extreme channel changes without a clear goal.",
    type: "rgb"
  },

  "Scopes": {
    category: "MEASUREMENT",
    subtitle: "Waveform • Parade • Vectorscope",
    intro: "Scopes provide objective measurements for exposure, channel balance and chroma.",
    what: "Use Waveform for luminance, RGB Parade for channel balance and Vectorscope for chroma.",
    scope: "Choose the scope that matches the problem. No single scope answers everything.",
    tip: "Do not chase numbers blindly. Use scopes together with visual judgment.",
    type: "scopes"
  }
};


/* =========================================================
   PAGE INITIALIZATION
   ========================================================= */

const params = new URLSearchParams(window.location.search);
const toolName = params.get("tool") || "Lift";

const data = DATA[toolName] || DATA["Lift"];


function get(id) {
  return document.getElementById(id);
}


/* =========================================================
   LOAD TOOL INFORMATION
   ========================================================= */

if (get("name")) {

  get("category").textContent = data.category;
  get("name").textContent = toolName;
  get("subtitle").textContent = data.subtitle;
  get("intro").textContent = data.intro;

  get("whatName").textContent = toolName;
  get("what").textContent = data.what;
  get("scope").textContent = data.scope;
  get("tip").textContent = data.tip;

  createUses();
  createSteps();
  createMistakes();

  renderDemo(data.type);
  renderRelated();
}


/* =========================================================
   PRACTICAL USES
   ========================================================= */

function createUses() {

  const uses = get("uses");

  if (!uses) return;

  const list = [
    "Evaluate the image before touching the control.",
    "Make the smallest useful adjustment.",
    "Compare before and after.",
    "Check the appropriate scope.",
    "Stop when the actual problem is solved."
  ];

  uses.innerHTML = "";

  list.forEach(text => {

    const item = document.createElement("div");

    item.innerHTML = `
      <span>✓</span>
      <p>${text}</p>
    `;

    uses.appendChild(item);

  });
}


/* =========================================================
   STEP-BY-STEP METHOD
   ========================================================= */

function createSteps() {

  const steps = get("steps");

  if (!steps) return;

  const list = [
    "Evaluate the shot before touching the control.",
    "Make a small adjustment while watching the Viewer.",
    "Check the relevant scope for objective evidence.",
    "Toggle the correction off and on.",
    "Compare the result with the original.",
    "Stop when the correction solves the problem."
  ];

  steps.innerHTML = "";

  list.forEach((text, index) => {

    const li = document.createElement("li");

    li.textContent = text;

    steps.appendChild(li);

  });
}


/* =========================================================
   COMMON MISTAKES
   ========================================================= */

function createMistakes() {

  const box = get("mistakes");

  if (!box) return;

  const mistakes = [
    "Making huge adjustments instead of controlled corrections.",
    "Judging only from a tiny image.",
    "Ignoring clipping and crushed shadows.",
    "Ignoring unwanted color shifts.",
    "Using the wrong tool for the problem."
  ];

  box.innerHTML = "";

  mistakes.forEach(text => {

    const item = document.createElement("div");

    item.className = "mistake";

    item.textContent = "× " + text;

    box.appendChild(item);

  });
}


/* =========================================================
   DEMO FRAME
   ========================================================= */

function createFrame() {

  const frame = document.createElement("div");

  frame.className = "demo-frame";

  frame.innerHTML = `
    <div class="sky"></div>
    <div class="sun"></div>
    <div class="mountains"></div>
    <div class="city"></div>
    <div class="person"></div>
    <div class="ground"></div>
  `;

  return frame;
}


/* =========================================================
   SLIDER
   ========================================================= */

function createSlider(label, callback, options = {}) {

  const controls = get("demoControls");

  if (!controls) return;

  const wrapper = document.createElement("div");

  wrapper.className = "slider-control";

  const title = document.createElement("label");

  title.textContent = label;

  const bar = document.createElement("input");

  bar.type = "range";

  bar.min = options.min ?? -100;
  bar.max = options.max ?? 100;
  bar.step = options.step ?? 1;
  bar.value = options.value ?? 0;

  bar.className = "slider";

  const read = document.createElement("span");

  read.className = "read";

  read.textContent = bar.value;

  wrapper.appendChild(title);
  wrapper.appendChild(bar);
  wrapper.appendChild(read);

  controls.appendChild(wrapper);

  bar.addEventListener("input", () => {

    const value = Number(bar.value);

    read.textContent = value;

    callback(value);

  });

}


/* =========================================================
   COLOR FILTER
   ========================================================= */

function applyBrightness(frame, value) {

  const amount = 100 + value * 0.35;

  frame.style.filter =
    `brightness(${amount}%)`;

}


function applyContrast(frame, value) {

  const amount = 100 + value * 0.55;

  frame.style.filter =
    `contrast(${amount}%)`;

}


function applySaturation(frame, value) {

  const amount = 100 + value * 0.7;

  frame.style.filter =
    `saturate(${amount}%)`;

}


/* =========================================================
   MAIN DEMO RENDERER
   ========================================================= */

function renderDemo(type) {

  const demo = get("demo");
  const controls = get("demoControls");
  const title = get("demoTitle");

  if (!demo || !controls) return;

  demo.innerHTML = "";
  controls.innerHTML = "";

  const titles = {

    wheels: "Four-Wheel Color Balance",

    curves: "Custom Curve",

    qualifier: "Color Qualifier",

    window: "Power Window",

    tracker: "Motion Tracker",

    nodes: "Node Tree",

    gallery: "Gallery Comparison",

    luts: "LUT Preview",

    rgb: "RGB Mixer",

    scopes: "Scopes",

  };

  if (title) {

    title.textContent =
      titles[type] || "Interactive Adjustment";

  }


  /* =====================================================
     PRIMARY CONTROLS
     ===================================================== */

  const sliderTools = [

    "lift",
    "gamma",
    "gain",
    "offset",
    "contrast",
    "pivot",
    "temperature",
    "tint",
    "saturation",
    "boost",
    "detail",
    "shadows",
    "highlights",
    "luma"

  ];


  if (sliderTools.includes(type)) {

    const frame = createFrame();

    demo.appendChild(frame);


    createSlider(
      toolName.toUpperCase(),
      value => {

        if (
          type === "contrast" ||
          type === "pivot"
        ) {

          applyContrast(frame, value);

        }

        else if (
          type === "saturation" ||
          type === "boost"
        ) {

          applySaturation(frame, value);

        }

        else if (type === "temperature") {

          const amount = Math.abs(value) * 0.18;

          frame.style.filter =
            `sepia(${amount}%)`;

        }

        else if (type === "tint") {

          frame.style.filter =
            `hue-rotate(${value * 0.55}deg)`;

        }

        else if (type === "detail") {

          const contrast =
            100 + value * 0.3;

          frame.style.filter =
            `contrast(${contrast}%)`;

        }

        else {

          applyBrightness(frame, value);

        }

      }
    );

    return;
  }


  /* =====================================================
     COLOR WHEELS
     ===================================================== */

  if (type === "wheels") {

    demo.innerHTML = `
      <div class="wheel-board">

        <div class="wheel-card">
          <div class="wheel lift-wheel"></div>
          <strong>Lift</strong>
          <small>Shadows</small>
        </div>

        <div class="wheel-card">
          <div class="wheel gamma-wheel"></div>
          <strong>Gamma</strong>
          <small>Midtones</small>
        </div>

        <div class="wheel-card">
          <div class="wheel gain-wheel"></div>
          <strong>Gain</strong>
          <small>Highlights</small>
        </div>

        <div class="wheel-card">
          <div class="wheel offset-wheel"></div>
          <strong>Offset</strong>
          <small>Overall</small>
        </div>

      </div>
    `;

    controls.innerHTML = `
      <div class="wheel-info">
        <strong>COLOR DIRECTION</strong>
        <span>
          Lift = Shadows • Gamma = Midtones • Gain = Highlights • Offset = Overall
        </span>
      </div>
    `;

    return;
  }


  /* =====================================================
     CURVES
     ===================================================== */

  if (type === "curves") {

    const canvas =
      document.createElement("canvas");

    canvas.className = "curve";

    canvas.width = 900;
    canvas.height = 420;

    demo.appendChild(canvas);

    const ctx =
      canvas.getContext("2d");

    let px = 450;
    let py = 210;

    function drawCurve() {

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      ctx.fillStyle = "#090c0f";

      ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
      );


      /* GRID */

      ctx.strokeStyle = "#273238";

      ctx.lineWidth = 1;

      for (
        let x = 40;
        x < 900;
        x += 70
      ) {

        ctx.beginPath();

        ctx.moveTo(x, 20);
        ctx.lineTo(x, 390);

        ctx.stroke();

      }


      for (
        let y = 30;
        y < 420;
        y += 65
      ) {

        ctx.beginPath();

        ctx.moveTo(20, y);
        ctx.lineTo(880, y);

        ctx.stroke();

      }


      /* ORIGINAL CURVE */

      ctx.strokeStyle = "#59656b";

      ctx.lineWidth = 2;

      ctx.beginPath();

      ctx.moveTo(25, 390);

      ctx.lineTo(875, 25);

      ctx.stroke();


      /* USER CURVE */

      ctx.strokeStyle = "#8bd3ff";

      ctx.lineWidth = 4;

      ctx.beginPath();

      ctx.moveTo(25, 390);

      ctx.bezierCurveTo(
        220,
        390,
        350,
        py,
        px,
        py
      );

      ctx.bezierCurveTo(
        620,
        py,
        740,
        45,
        875,
        25
      );

      ctx.stroke();


      /* POINT */

      ctx.fillStyle = "#ffffff";

      ctx.beginPath();

      ctx.arc(
        px,
        py,
        9,
        0,
        Math.PI * 2
      );

      ctx.fill();

    }


    drawCurve();


    canvas.addEventListener(
      "pointerdown",
      event => {

        canvas.setPointerCapture(
          event.pointerId
        );

        movePoint(event);

      }
    );


    canvas.addEventListener(
      "pointermove",
      event => {

        if (
          canvas.hasPointerCapture(
            event.pointerId
          )
        ) {

          movePoint(event);

        }

      }
    );


    function movePoint(event) {

      const rect =
        canvas.getBoundingClientRect();

      px =
        (event.clientX - rect.left) *
        canvas.width /
        rect.width;

      py =
        (event.clientY - rect.top) *
        canvas.height /
        rect.height;

      px =
        Math.max(
          40,
          Math.min(
            860,
            px
          )
        );

      py =
        Math.max(
          35,
          Math.min(
            380,
            py
          )
        );

      drawCurve();

    }


    controls.innerHTML = `
      <div class="curve-help">
        Drag the white point to change the tonal curve.
      </div>
    `;

    return;
  }


  /* =====================================================
     QUALIFIER
     ===================================================== */

  if (type === "qualifier") {

    demo.innerHTML = `
      <div class="qualifier-demo">

        <div class="qualifier-image">

          <div class="qualifier-skin"></div>
          <div class="qualifier-face"></div>

        </div>

        <div class="qualifier-matte">
          <span>QUALIFIER MATTE</span>
        </div>

      </div>
    `;

    controls.innerHTML = `
      <div class="qualifier-controls">

        <label>
          HUE RANGE
          <input
            type="range"
            min="0"
            max="100"
            value="55"
          >
        </label>

        <label>
          SATURATION
          <input
            type="range"
            min="0"
            max="100"
            value="60"
          >
        </label>

        <label>
          LUMINANCE
          <input
            type="range"
            min="0"
            max="100"
            value="70"
          >
        </label>

      </div>
    `;

    return;
  }


  /* =====================================================
     POWER WINDOWS
     ===================================================== */

  if (type === "window") {

    demo.innerHTML = `
      <div class="window-demo">

        <div class="window-scene">

          <div class="window-sun"></div>
          <div class="window-mountain"></div>
          <div class="window-subject"></div>

          <div class="power-window">

            <span></span>

          </div>

        </div>

      </div>
    `;

    const ring =
      demo.querySelector(
        ".power-window"
      );

    let dragging = false;


    ring.addEventListener(
      "pointerdown",
      () => {

        dragging = true;

      }
    );


    window.addEventListener(
      "pointerup",
      () => {

        dragging = false;

      }
    );


    ring.addEventListener(
      "pointermove",
      event => {

        if (!dragging) return;

        const rect =
          demo
            .querySelector(
              ".window-scene"
            )
            .getBoundingClientRect();

        const x =
          event.clientX -
          rect.left -
          100;

        const y =
          event.clientY -
          rect.top -
          80;

        ring.style.left =
          `${x}px`;

        ring.style.top =
          `${y}px`;

      }
    );


    controls.innerHTML = `
      <div class="window-help">
        Drag the Power Window around the subject.
      </div>
    `;

    return;
  }


  /* =====================================================
     TRACKER
     ===================================================== */

  if (type === "tracker") {

    demo.innerHTML = `
      <div class="tracker-demo">

        <div class="tracker-background"></div>

        <div class="tracker-subject"></div>

        <div class="tracker-box">
          <span>TRACK</span>
        </div>

      </div>
    `;


    createSlider(
      "SHOT POSITION",
      value => {

        const subject =
          demo.querySelector(
            ".tracker-subject"
          );

        const box =
          demo.querySelector(
            ".tracker-box"
          );

        const position =
          20 + value * 0.6;

        subject.style.left =
          `${position}%`;

        box.style.left =
          `${position - 3}%`;

      },
      {
        min: -30,
        max: 100,
        value: 0
      }
    );

    return;
  }


  /* =====================================================
     NODES
     ===================================================== */

  if (type === "nodes") {

    demo.innerHTML = `
      <div class="node-tree">

        <div class="node active-node">
          <strong>01</strong>
          <span>Balance</span>
        </div>

        <div class="node-line"></div>

        <div class="node">
          <strong>02</strong>
          <span>Skin</span>
        </div>

        <div class="node-line"></div>

        <div class="node">
          <strong>03</strong>
          <span>Look</span>
        </div>

        <div class="node-line"></div>

        <div class="node">
          <strong>04</strong>
          <span>Output</span>
        </div>

      </div>
    `;

    controls.innerHTML = `
      <div class="node-description">
        Technical → Subject → Creative → Output
      </div>
    `;

    return;
  }


  /* =====================================================
     GALLERY
     ===================================================== */

  if (type === "gallery") {

    demo.innerHTML = `
      <div class="gallery-demo">

        <div class="gallery-still before-still">
          <span>REFERENCE</span>
        </div>

        <div class="gallery-still after-still">
          <span>GRADE</span>
        </div>

      </div>
    `;

    controls.innerHTML = `
      <div class="gallery-info">
        Save a still and compare it against your current frame.
      </div>
    `;

    return;
  }


  /* =====================================================
     LUTS
     ===================================================== */

  if (type === "luts") {

    const frame =
      createFrame();

    demo.appendChild(frame);


    createSlider(
      "LUT INFLUENCE",
      value => {

        /*
          IMPORTANT:
          Normal JavaScript template literal.
          Do NOT add backslashes before the backticks.
        */

        const amount =
          Math.max(
            0,
            value
          );

        frame.style.filter =
          `sepia(${amount * 0.18}%) saturate(${100 + amount * 0.25}%) contrast(${100 + amount * 0.12}%)`;

      },
      {
        min: 0,
        max: 100,
        value: 0
      }
    );

    return;
  }


  /* =====================================================
     RGB MIXER
     ===================================================== */

  if (type === "rgb") {

    demo.innerHTML = `
      <div class="mixer">

        <label class="mix-row">

          <span>RED OUT</span>

          <input
            type="range"
            min="0"
            max="150"
            value="100"
          >

          <b>100</b>

        </label>


        <label class="mix-row">

          <span>GREEN OUT</span>

          <input
            type="range"
            min="0"
            max="150"
            value="100"
          >

          <b>100</b>

        </label>


        <label class="mix-row">

          <span>BLUE OUT</span>

          <input
            type="range"
            min="0"
            max="150"
            value="100"
          >

          <b>100</b>

        </label>

      </div>
    `;


    demo
      .querySelectorAll(
        "input"
      )
      .forEach(input => {

        input.addEventListener(
          "input",
          () => {

            input
              .nextElementSibling
              .textContent =
              input.value;

          }
        );

      });


    controls.innerHTML = `
      <div class="mixer-info">
        Adjust how much each RGB channel contributes to the output.
      </div>
    `;

    return;
  }


  /* =====================================================
     SCOPES
     ===================================================== */

  if (type === "scopes") {

    demo.innerHTML = `
      <div class="scopes-layout">

        <div class="scope-panel">

          <header>
            WAVEFORM
          </header>

          <div class="waveform-scope">

            <div class="wave-line"></div>
            <div class="wave-line"></div>
            <div class="wave-line"></div>
            <div class="wave-line"></div>
            <div class="wave-line"></div>

          </div>

        </div>


        <div class="scope-panel">

          <header>
            RGB PARADE
          </header>

          <div class="parade-scope">

            <div></div>
            <div></div>
            <div></div>

          </div>

        </div>


        <div class="scope-panel">

          <header>
            VECTORSCOPE
          </header>

          <div class="vectorscope">

            <div class="vector-cross"></div>

          </div>

        </div>

      </div>
    `;

    controls.innerHTML = `
      <div class="scope-info">

        <strong>WAVEFORM</strong>
        <span>Exposure / luminance</span>

        <strong>RGB PARADE</strong>
        <span>Channel balance</span>

        <strong>VECTORSCOPE</strong>
        <span>Saturation / hue</span>

      </div>
    `;

    return;
  }

}


/* =========================================================
   RELATED TOOLS
   ========================================================= */

function renderRelated() {

  const container =
    get("related");

  if (!container) return;

  container.innerHTML = "";

  const grid =
    document.createElement(
      "div"
    );

  grid.className =
    "related-grid";


  const keys =
    Object.keys(DATA)
      .filter(
        key => key !== toolName
      )
      .slice(0, 4);


  keys.forEach(key => {

    const card =
      document.createElement(
        "a"
      );

    card.className =
      "related-card";

    card.href =
      "tool.html?tool=" +
      encodeURIComponent(key);


    card.innerHTML = `
      <b>${key}</b>
      <small>${DATA[key].subtitle} →</small>
    `;


    grid.appendChild(card);

  });


  container.appendChild(grid);

}


/* =========================================================
   CARD LIGHT EFFECT
   ========================================================= */

document
  .querySelectorAll(
    ".control, .tool"
  )
  .forEach(element => {

    element.addEventListener(
      "pointermove",
      event => {

        const rect =
          element.getBoundingClientRect();

        const x =
          event.clientX -
          rect.left;

        const y =
          event.clientY -
          rect.top;

        element.style.setProperty(
          "--x",
          `${x}px`
        );

        element.style.setProperty(
          "--y",
          `${y}px`
        );

      }
    );

  });


/* =========================================================
   SMOOTH PAGE ENTRY
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document
      .querySelectorAll(
        ".section, .lab, .info, .verify, .tip, .related"
      )
      .forEach(
        (element, index) => {

          element.style.animationDelay =
            `${index * 40}ms`;

        }
      );

      /* =========================================================
         HOME PAGE VIEWER
         ========================================================= */

      (() => {
        const home = document.querySelector(".home");
        if (!home) return;

        const image = document.getElementById("viewerImage");
        const upload = document.getElementById("imageUpload");
        const compare = document.getElementById("compareButton");
        const reset = document.getElementById("resetButton");
        if (!image || !upload || !compare || !reset) return;

        const defaults = {
          exposure: 0,
          contrast: 0,
          saturation: 0,
          temperature: 0,
          tint: 0,
          shadows: 0,
          highlights: 0
        };
        const values = { ...defaults };
        let showingBefore = false;
        let uploadedUrl = "";

        const applyGrade = () => {
          const brightness = 100 + values.exposure * 0.35 + values.shadows * 0.12 + values.highlights * 0.06;
          const contrast = 100 + values.contrast * 0.55;
          const saturation = 100 + values.saturation * 0.7;
          const warm = values.temperature * 0.08;
          const tint = values.tint * 0.05;
          image.style.filter = showingBefore
            ? "none"
            : `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) sepia(${Math.max(0, warm)}%) hue-rotate(${tint}deg)`;
        };

        home.querySelectorAll("[data-adjustment]").forEach(input => {
          const key = input.dataset.adjustment;
          input.addEventListener("input", () => {
            values[key] = Number(input.value);
            const output = document.getElementById(`${key}Value`);
            if (output) output.textContent = input.value;
            showingBefore = false;
            compare.textContent = "Before";
            applyGrade();
          });
        });

        compare.addEventListener("click", () => {
          showingBefore = !showingBefore;
          compare.textContent = showingBefore ? "After" : "Before";
          applyGrade();
        });

        reset.addEventListener("click", () => {
          Object.keys(defaults).forEach(key => {
            values[key] = defaults[key];
            const input = home.querySelector(`[data-adjustment="${key}"]`);
            const output = document.getElementById(`${key}Value`);
            if (input) input.value = String(defaults[key]);
            if (output) output.textContent = String(defaults[key]);
          });
          showingBefore = false;
          compare.textContent = "Before";
          applyGrade();
        });

        upload.addEventListener("change", () => {
          const file = upload.files && upload.files[0];
          if (!file) return;
          if (uploadedUrl) URL.revokeObjectURL(uploadedUrl);
          uploadedUrl = URL.createObjectURL(file);
          image.src = uploadedUrl;
          image.alt = `Uploaded grading frame: ${file.name}`;
        });

        image.addEventListener("error", () => {
          image.alt = "Color grading demo image unavailable";
        });
      })();

  }
);