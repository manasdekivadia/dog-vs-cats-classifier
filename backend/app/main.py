# app/main.py

from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from app.model_utils import predict_image

app = FastAPI()

# Enable CORS for both local development and deployed frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",  # for local testing
        "https://dog-vs-cats-classifier.vercel.app"  # ✅ no trailing slash
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    contents = await file.read()
    prediction = predict_image(contents)
    return prediction  # Example: { "label": "Cat", "score": 0.95 }
