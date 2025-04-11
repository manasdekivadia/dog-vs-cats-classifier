# 🐶🐱 Dog vs Cat Image Classifier

A sleek web application that classifies images as either a **dog** or a **cat** using a Convolutional Neural Network (CNN) model.

🔗 **Live Demo**: [dog-vs-cats-classifier.vercel.app](https://dog-vs-cats-classifier.vercel.app/)
![image](https://github.com/user-attachments/assets/3da2b786-0e87-430b-96e4-144908f6c574)

---

## 🚀 Features

- 🧠 CNN-based deep learning model
- 🖼️ Upload any image and get an instant prediction
- 🌙 Dark mode UI with modern glassmorphism design
- ⚡ Deployed using **FastAPI (Render)** for backend and **React (Vercel)** for frontend

---

## 🧠 Model Overview

The model was trained using a custom Convolutional Neural Network (CNN) built with TensorFlow/Keras. It includes:

- **Conv2D**, **MaxPooling2D**, **Flatten**, and **Dense** layers
- Trained on labeled **Cat** and **Dog** images
- Achieved high validation accuracy and minimal loss after training

📂 **Model Training File**: [`convolutional_neural_network.ipynb`](./convolutional_neural_network.ipynb)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Vercel
- **Backend**: FastAPI, Python, Render
- **Model**: TensorFlow/Keras
- **File Format**: `model.pkl`

---

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dog-vs-cat-classifier.git
cd dog-vs-cat-classifier
```

### 2. Backend Setup (FastAPI)

> Navigate to the backend directory if separated

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Run FastAPI server:**

```bash
uvicorn main:app --reload
```

### 3. Frontend Setup (React)

> Navigate to the frontend directory

```bash
cd frontend
npm install
npm run dev
```

### 4. Upload Model (if not included)

Place the `model.pkl` file in the appropriate backend directory as expected by your FastAPI code.

---

## 🌐 Deployment

### 🔹 Frontend: [Vercel](https://vercel.com)
- Pushed React frontend to GitHub
- Connected GitHub repo to Vercel
- Vercel auto-deploys on every push

### 🔹 Backend: [Render](https://render.com)
- Deployed FastAPI backend with necessary build/start commands
- Connected with React frontend using the deployed API URL

---

## 📂 Project Structure

```
dog-vs-cat-classifier/
│
├── backend/
│   ├── main.py
│   ├── model.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
```

---

## ✨ UI Highlights

- 🟣 **Glassmorphism design**
- 🔁 **Hover interactions**
- 📱 **Responsive on all devices**

---

## 🙌 Credits

- Model trained using **TensorFlow/Keras**
- UI powered by **React.js** and **Tailwind CSS**
- Hosting by **Render** & **Vercel**

---

## 📜 License

MIT License - use freely for learning or building upon it!

---
