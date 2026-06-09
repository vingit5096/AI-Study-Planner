# AI-Study-Planner
# SmartStudy AI

An AI-powered study planning web application that helps students organize exam preparation, track progress, generate personalized study schedules, and receive intelligent recommendations using Google Gemini AI.

## Features

* Create and manage exam schedules
* Add and track study topics
* Monitor completion progress
* Generate AI-powered study plans
* Get personalized AI recommendations
* Export study reports as PDF
* Store data locally in the browser
* Responsive user interface

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js

### AI

* Google Gemini API

### Other Tools

* jsPDF
* LocalStorage

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

## Environment Variables

Create a `.env` file inside the backend directory:

```env
GEMINI_KEY=YOUR_API_KEY
```

## Project Structure

```text
SmartStudy-AI
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Workflow

1. Create an exam
2. Add study topics
3. Generate AI study plan
4. Track topic completion
5. Get AI recommendations
6. Export progress report as PDF

## Future Improvements

* JWT Authentication
* MongoDB Integration
* Multiple Exam Support
* Email Notifications
* Analytics Dashboard

## Author

**Vingit**

Built using React, Node.js, Express.js, Tailwind CSS, and Google Gemini AI.
