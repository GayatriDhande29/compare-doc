import React, { useState } from "react";
import axios from "axios";
import image from "../utilities/image.png"; // Adjust the relative path based on your file structure
import "../FileUpload.css"; // Import the CSS file

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err) {
      alert("Error uploading file");
    }
  };

  return (
    <div className="page">
      <div className="boxB">
      <img src={image} alt="Upload Document" />
        
      <div style={{ textAlign: "center" }}>
        <h1>PUT YOUR FILE HERE </h1>
        

        <div className="file-input-wrapper">
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose File
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            hidden
          />
          <span className="file-name">
            {file ? file.name : "No file chosen"}
          </span>
        </div>
        <div className="Bline">---------------------------------------</div>

        <button onClick={handleUpload}>Upload</button>
        <h6> thankyou </h6>
        {result && <pre>{result}</pre>}
      </div>
      </div>
    </div>
  );
};

export default FileUpload;
