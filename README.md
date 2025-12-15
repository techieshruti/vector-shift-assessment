# VectorShift Frontend Technical Assessment
This project implements a visual pipeline builder using React on the frontend and FastAPI on the backend. Users can create pipelines by dragging nodes, connecting them, and submitting the pipeline for validation.

## 🚀 Features
### **Frontend**
* Drag-and-drop pipeline editor using ReactFlow
* Reusable BaseNode abstraction for scalable node creation
* Supported node types:
  * Input
  * Text (supports dynamic variables)
  * LLM
  * Output
* Dynamic Text node:
* Auto-resizing textarea
* Detects {{variable}} patterns and generates input handles dynamically
* Unified and consistent node styling
* Submit pipeline to backend and display validation results

### **Backend**
* Built with FastAPI
* Endpoint to parse pipeline data
* Calculates:
  * Number of nodes
  * Number of edges
  * Whether the pipeline is a Directed Acyclic Graph (DAG)
* CORS enabled for frontend-backend communication

## 🛠 Tech Stack
* Frontend: React, ReactFlow, Zustand
* Backend: Python, FastAPI, Uvicorn
* State Management: Zustand
* Styling: Inline styles (centralized via BaseNode)
*State Management: Zustand

## 📁 Project Structure
```
vectorshift_assessment/
├── frontend/
│   ├── src/
│   │   ├── nodes/
│   │   │   ├── BaseNode.jsx
│   │   │   ├── inputNode.js
│   │   │   ├── textNode.js
│   │   │   ├── llmNode.js
│   │   │   └── outputNode.js
│   │   ├── store.js
│   │   ├── submit.js
│   │   └── ui.js
│   └── package.json
│
├── backend/
│   ├── main.py
│   └── venv/
│
└── README.md
```

## ▶️ How to Run the Project
### 1️⃣ Backend Setup
```
cd backend
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn
python -m uvicorn main:app --reload
```

### Backend runs at:
```
http://127.0.0.1:8000
```
### Swagger UI:
```
http://127.0.0.1:8000/docs
```

## 2️⃣ Frontend Setup
```
cd frontend
npm install
npm start
```

### Frontend runs at:
```
http://localhost:3000
```

## 🧪 How to Use the App
1 Drag nodes (Input, Text, LLM, Output) onto the canvas
2 Enter text in the Text node (e.g. Hello {{name}})
3 Connect nodes using the handles
4 Click Submit
5 An alert displays:
  * Number of nodes
  * Number of edges
  * Whether the pipeline is a DAG

## 🧠 Design Decisions
* BaseNode abstraction was introduced to eliminate duplication and make node creation scalable
* TextNode parsing logic is isolated and uses memoization to avoid unnecessary re-renders
* Backend DAG validation uses DFS for cycle detection
* Minimal styling was applied to keep the UI clean and consistent

## ✅ Assessment Coverage
✔ Node abstraction
✔ Unified styling
✔ Dynamic Text node logic
✔ Backend integration
✔ DAG validation
✔ Frontend ↔ Backend communication

## 📌 Notes
This project focuses on structure, correctness, and scalability rather than production-level UI polish. The implementation follows the requirements outlined in the VectorShift frontend technical assessment.
