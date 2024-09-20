import React, { useState } from "react";
import { Card, Form, Button, ProgressBar, Alert } from "react-bootstrap";
import { Upload, File, CheckCircle } from "react-feather";

const UploadDocument = ({ onFileUpload, onUploadComplete }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    onFileUpload(selectedFile);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    onFileUpload(droppedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleUpload = () => {
    if (file) {
      setUploading(true);
      setUploadComplete(false);
      // Simulate upload process
      let uploadProgress = 0;
      const interval = setInterval(() => {
        uploadProgress += 10;
        setProgress(uploadProgress);
        if (uploadProgress >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadComplete(true);
          onUploadComplete();
        }
      }, 500);
    }
  };

  return (
    <Card className="shadow-sm mb-4">
      <Card.Body>
        <div
          className="text-center p-5 border rounded mb-4"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{ backgroundColor: "#f8f9fa" }}
        >
          {file ? (
            <div>
              <File size={48} className="text-primary mb-3" />
              <p>{file.name}</p>
            </div>
          ) : (
            <div>
              <Upload size={48} className="text-primary mb-3" />
              <h5>Kéo và thả file của bạn vào đây</h5>
              <p className="text-muted">hoặc nhấp để chọn file</p>
            </div>
          )}
          <Form.Control
            type="file"
            onChange={handleFileChange}
            className="d-none"
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            className="btn btn-outline-primary mt-3"
          >
            Chọn file
          </label>
        </div>
        {file && !uploadComplete && (
          <div className="mb-3">
            <p>
              File đã chọn: {file.name} (
              {(file.size / 1024 / 1024).toFixed(2)} MB)
            </p>
            {uploading ? (
              <ProgressBar
                animated
                now={progress}
                label={`${progress}%`}
              />
            ) : (
              <Button
                variant="primary"
                onClick={handleUpload}
                disabled={uploading}
              >
                Tải lên
              </Button>
            )}
          </div>
        )}
        {uploadComplete && (
          <Alert variant="success" className="d-flex align-items-center">
            <CheckCircle size={24} className="me-2" />
            <div>Tải lên thành công! File của bạn đã sẵn sàng để in.</div>
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default UploadDocument;