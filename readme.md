# 55/5 Stand & Walk Break Timer 🚶‍♂️💻

A lightweight Chrome Extension built with **Manifest V3** designed to improve your health, productivity, and ergonomics. It automates a 55-minute focus session followed by a mandatory 5-minute movement break to remind you to stand up, stretch, and walk around.

---

## ✨ Features

- **Automated 55/5 Cycle:** Alternates seamlessly between 55 minutes of focus work and 5 minutes of walking/stretching breaks.
- **Desktop Notifications:** Displays native Chrome desktop notifications when it's time to take a break and when it's time to return to work.
- **Persistent Timer State:** Uses `chrome.storage.local` and background service workers to ensure the timer continues accurately even if the browser popup is closed or Chrome is restarted.
- **Minimalist & Clean UI:** Simple, distraction-free popup menu with live countdown updates.

---

## 📁 Project Structure

```text
├── manifest.json   # Chrome Extension configuration (Manifest V3)
├── background.js   # Background service worker for handling alarms & notifications
├── popup.html      # UI structure and styling for the popup menu
└── popup.js        # Logic for managing the popup timer UI and storage state
```

---

## 🛠️ Installation & Setup

Since this extension is in development mode, you can load it directly into Chrome as an unpacked extension:

1. **Clone or Download** this repository/folder to your local machine.
2. Open Google Chrome and navigate to:
   ```text
   chrome://extensions/
   ```
3. Enable **Developer mode** using the toggle switch in the top right corner.
4. Click the **Load unpacked** button in the top left corner.
5. Select the directory containing the project files (`manifest.json`, `background.js`, `popup.html`, `popup.js`).
6. The extension is now installed! Click the puzzle icon in Chrome's toolbar to pin the **55/5 Stand & Walk Break Timer**.

---

## 🚀 How to Use

1. Click on the extension icon in your Chrome toolbar.
2. Click **Start Focus** to initiate your 55-minute work session.
3. Once the 55 minutes expire, a system notification will remind you to take a 5-minute break.
4. After the 5-minute break, another notification will alert you to resume focus mode.
5. You can click **Reset Timer** at any point in the popup menu to stop or restart the sequence.

---

## 🔧 Permissions Used

This extension requests the following permissions in `manifest.json`:

- `alarms`: To set reliable background timers for work and break intervals.
- `notifications`: To deliver desktop alerts when sessions start or end.
- `storage`: To remember the timer state and end time across popup instances.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
