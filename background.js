const WORK_TIME = 55; // minutes
const BREAK_TIME = 5;  // minutes

// Handle alarm triggers
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "workTimer") {
    // Work session complete -> Start break
    chrome.storage.local.set({ mode: "break", endTime: Date.now() + BREAK_TIME * 60 * 1000 });
    
    chrome.notifications.create({
      type: "basic",
      iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
      title: "Time for a Break! 🚶‍♂️",
      message: "You've been focused for 55 minutes. Stand up, stretch, and walk around for 5 minutes!",
      priority: 2
    });

    chrome.alarms.create("breakTimer", { delayInMinutes: BREAK_TIME });

  } else if (alarm.name === "breakTimer") {
    // Break complete -> Start work
    chrome.storage.local.set({ mode: "work", endTime: Date.now() + WORK_TIME * 60 * 1000 });
    
    chrome.notifications.create({
      type: "basic",
      iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
      title: "Break Over! 💻",
      message: "Ready to focus? Starting your 55-minute session now.",
      priority: 2
    });

    chrome.alarms.create("workTimer", { delayInMinutes: WORK_TIME });
  }
});