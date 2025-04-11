import React, { useState } from 'react';
import axios from 'axios';
import './image.css';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/predict', formData);
      setPrediction(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <div className="glass-box">
        <h2 className="heading">Dogs And Cats Classifier</h2>

        <div className="file-input-wrapper">
          <label htmlFor="file-upload" className="custom-file-button">
            Choose File
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="file-input-hidden"
          />
          <span className="file-name">{file ? file.name : ''}</span>
        </div>

        <button
          onClick={handleSubmit}
          className="predict-button"
        >
          Predict
        </button>

        {prediction && (
          <div className="result-box">
            <p><strong>Prediction:</strong> {prediction.score.toFixed(4)}</p>
            <p><strong>Label:</strong> {prediction.label}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
