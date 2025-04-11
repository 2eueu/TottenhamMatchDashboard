# ⚽ TottenhamMatchDashboard

**A web application for analyzing and visualizing Tottenham Hotspur's match statistics using interactive dashboards.**

---

## 🏆 Project Overview

TottenhamMatchDashboard is an interactive web dashboard that visualizes Tottenham Hotspur's match performance, league standings, and team statistics.  
It connects to a MySQL database to manage structured football data, and fetches real-time updates using the [Football-Data.org](https://www.football-data.org/) API.

---

## 🛠️ Tech Stack

### Languages  
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Backend & Database  
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

### Libraries & Tools  
- `Chart.js`: Data visualization  
- `Fetch API`: Client-server communication  
- `Bootstrap`: UI layout & responsive design

### API  
- [Football-Data.org](https://www.football-data.org/): Real-time football match data

---

## 🔍 Key Features

### 1. Match Schedule & Results
- Displays match timeline and results for Tottenham Hotspur
- Visualizes key match events using bar charts

### 2. Team Statistics
- Compares stats like possession rate, shots, and goals per opponent
- Line charts for side-by-side comparison

### 3. League Standings
- Premier League table with live updates
- Highlights relegation zone teams in red

### 4. Interactive Dashboard
- Filters by date, stat type, and opponent

---

## 🧩 Architecture Overview

### 🔧 MySQL Integration
- Backend communicates with MySQL to store match data  
- Tables: `matches`, `teams`, `stats`, `events`

### 🔁 System Flow  
<p align="center">
  <img src="./assets/protocol.png" alt="System Protocol" width="600"/>
</p>

---

## 🖼️ Screenshots

### 🔷 Main Dashboard Page
<p align="center">
  <img src="./assets/main.png" alt="Main Dashboard Screenshot" width="750"/>
</p>

### 🧠 MySQL Database Schema
<p align="center">
  <img src="./assets/mysql.png" alt="MySQL Structure" width="600"/>
</p>

### 📊 Match Result Chart
<p align="center">
  <img src="./assets/result.png" alt="Match Results Chart" width="750"/>
</p>

---

## 🚀 How to Run

```bash
# 1. Clone the repository
git clone https://github.com/username/TottenhamMatchDashboard.git

# 2. Install dependencies
npm install

# 3. Set up your MySQL database
# Import ./db/schema.sql and update your .env file

# 4. Start the server
node index.js

# 5. Access via browser
http://localhost:5000
