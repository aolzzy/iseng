document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.getElementById("resistorViewer");
  const stage = document.getElementById("resistorStage");
  const flow = document.getElementById("arusFlow");
  const statusText = document.getElementById("statusResistor");
  const btnStart = document.getElementById("btnAnimasiResistor");
  const btnPause = document.getElementById("btnPauseAnimasiResistor");
  const btnReset = document.getElementById("btnResetAnimasiResistor");

  const chips = {
    arus: document.getElementById("chip-arus-masuk"),
    hambatan: document.getElementById("chip-hambatan"),
    panas: document.getElementById("chip-panas"),
    stabil: document.getElementById("chip-stabil"),
  };

  if (!viewer || !stage || !flow || !statusText || !btnStart || !btnPause || !btnReset) return;

  let rafId = null;
  let startStamp = 0;
  let pausedElapsed = 0;
  let isRunning = false;
  let materials = [];

  function clearActiveChip() {
    Object.values(chips).forEach((chip) => chip && chip.classList.remove("active"));
  }

  function setPhase(phase) {
    clearActiveChip();
    if (phase === "arus") {
      chips.arus && chips.arus.classList.add("active");
      statusText.textContent = "Status: arus mulai masuk ke resistor.";
      stage.dataset.phase = "arus";
    } else if (phase === "hambatan") {
      chips.hambatan && chips.hambatan.classList.add("active");
      statusText.textContent = "Status: resistor menghambat arus sesuai nilai resistansi.";
      stage.dataset.phase = "hambatan";
    } else if (phase === "panas") {
      chips.panas && chips.panas.classList.add("active");
      statusText.textContent = "Status: sebagian energi berubah menjadi panas kecil pada resistor.";
      stage.dataset.phase = "panas";
    } else {
      chips.stabil && chips.stabil.classList.add("active");
      statusText.textContent = "Status: tegangan dan arus melewati resistor dalam kondisi stabil.";
      stage.dataset.phase = "stabil";
    }
  }

  function setGlow(value) {
    materials.forEach((mat, index) => {
      if (typeof mat.setEmissiveFactor === "function") {
        if (index === 0) {
          mat.setEmissiveFactor([value, value * 0.45, 0.02]);
        } else {
          mat.setEmissiveFactor([value * 0.35, value * 0.18, 0.01]);
        }
      }
    });
  }

  function resetVisual() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    isRunning = false;
    startStamp = 0;
    pausedElapsed = 0;

    stage.classList.remove("animating");
    stage.dataset.phase = "standby";
    clearActiveChip();
    flow.style.width = "0%";
    statusText.textContent = "Status: standby";
    viewer.cameraOrbit = "0deg 78deg 115%";
    viewer.exposure = "1";
    setGlow(0);
  }

  function animate(ts) {
    if (!startStamp) startStamp = ts;
    const elapsed = pausedElapsed + (ts - startStamp);
    const cycle = elapsed % 5200;

    stage.classList.add("animating");
    isRunning = true;

    const orbit = Math.sin(elapsed * 0.0012) * 16;
    const tilt = 76 + Math.sin(elapsed * 0.0019) * 3;
    const distance = 112 + Math.sin(elapsed * 0.0014) * 7;
    viewer.cameraOrbit = `${orbit.toFixed(2)}deg ${tilt.toFixed(2)}deg ${distance.toFixed(2)}%`;
    viewer.exposure = (1.02 + (Math.sin(elapsed * 0.0035) + 1) * 0.08).toFixed(2);

    const glow = 0.02 + ((Math.sin(elapsed * 0.006) + 1) / 2) * 0.28;
    setGlow(glow);

    flow.style.width = `${15 + ((elapsed / 38) % 85)}%`;

    if (cycle < 1300) {
      setPhase("arus");
    } else if (cycle < 2600) {
      setPhase("hambatan");
    } else if (cycle < 3900) {
      setPhase("panas");
    } else {
      setPhase("stabil");
    }

    rafId = requestAnimationFrame(animate);
  }

  btnStart.addEventListener("click", () => {
    if (isRunning && rafId) return;
    startStamp = 0;
    rafId = requestAnimationFrame(animate);
  });

  btnPause.addEventListener("click", () => {
    if (!rafId) return;
    cancelAnimationFrame(rafId);
    rafId = null;
    isRunning = false;
    stage.classList.remove("animating");
    pausedElapsed += performance.now() - startStamp;
    startStamp = 0;
    statusText.textContent = "Status: animasi dijeda.";
  });

  btnReset.addEventListener("click", resetVisual);

  viewer.addEventListener("load", () => {
    if (viewer.model && Array.isArray(viewer.model.materials)) {
      materials = viewer.model.materials;
    }
    resetVisual();
  });

  resetVisual();
});
