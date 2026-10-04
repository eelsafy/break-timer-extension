const WORK_TIME = 55;
const BREAK_TIME = 5;

const statusEl = document.getElementById('status');
const timerEl = document.getElementById('timer');
const toggleBtn = document.getElementById('toggleBtn');

let updateInterval;

function updateUI() {
  chrome.storage.local.get(['mode', 'endTime'], (data) => {
    if (!data.endTime || !data.mode) {
      statusEl.textContent = 'Idle';
      statusEl.className = 'work';
      timerEl.textContent = '55:00';
      toggleBtn.textContent = 'Start Focus';
      toggleBtn.className = 'btn-start';
      clearInterval(updateInterval);
      return;
    }

    toggleBtn.textContent = 'Reset Timer';
    toggleBtn.className = 'btn-stop';

    const remainingMs = data.endTime - Date.now();

    if (remainingMs <= 0) {
      timerEl.textContent = '00:00';
      return;
    }

    const totalSecs = Math.ceil(remainingMs / 1000);
    const mins = String(Math.floor(totalSecs / 60)).padStart(2, '0');
    const secs = String(totalSecs % 60).padStart(2, '0');

    timerEl.textContent = `${mins}:${secs}`;

    if (data.mode === 'work') {
      statusEl.textContent = 'Focusing (55m)';
      statusEl.className = 'work';
    } else {
      statusEl.textContent = 'Walk Break (5m)';
      statusEl.className = 'break';
    }
  });
}

toggleBtn.addEventListener('click', () => {
  chrome.storage.local.get(['endTime'], (data) => {
    if (data.endTime) {
      // Stop/Reset
      chrome.alarms.clearAll();
      chrome.storage.local.clear();
      updateUI();
    } else {
      // Start
      const endTime = Date.now() + WORK_TIME * 60 * 1000;
      chrome.storage.local.set({ mode: 'work', endTime });
      chrome.alarms.create('workTimer', { delayInMinutes: WORK_TIME });
      updateUI();
      updateInterval = setInterval(updateUI, 1000);
    }
  });
});

// Run immediate check and start ticker when popup opens
updateUI();
updateInterval = setInterval(updateUI, 1000);