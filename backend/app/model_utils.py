# app/model_utils.py

import pickle
import numpy as np
from PIL import Image
import io

# Load the model once when server starts
with open("app/model.pkl", "rb") as f:
    model = pickle.load(f)

def predict_image(file_bytes):
    image = Image.open(io.BytesIO(file_bytes)).convert("RGB")
    image = image.resize((64, 64))  # Update if your model uses a different size
    image_array = np.array(image) / 255.0
    image_array = image_array.reshape(1, 64, 64, 3)  # Update based on model input shape
    
    prediction = model.predict(image_array)
    score = float(prediction[0][0])
    label = "Dog 🐶" if score > 0.5 else "Cat🐱"

    return {
        "score": score,
        "label": label
    }
