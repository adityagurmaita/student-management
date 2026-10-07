# Student Management

![Project](https://img.shields.io/badge/project-student_management-347ac1) ![Status](https://img.shields.io/badge/status-demo-blue)

**HTML · CSS · JavaScript · localStorage**

A browser-based student-record workspace with a dashboard, safe rendering and CSV export.

## ✨ Features
- Overview stats: total students, average marks and how many are below 75% attendance.
- Add and edit records with validation and duplicate roll-number protection.
- Search by name or roll number; deleting a filtered row removes the correct record.
- Low-attendance highlighting, one-click sample records and CSV export with formula-injection protection.
- Records persist in the browser with localStorage; corrupt saved data is handled gracefully.

## 🚀 Run locally
Open `index.html`, or serve the repository with `python3 -m http.server 8080`. No package installation is needed.

## 📌 Limits
There is no login, server database or cross-device sync. Clearing browser storage removes saved records. Do not use this demo for sensitive or official student data.
