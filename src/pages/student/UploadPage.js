import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import StudentHeader from "../../components/common/StudentHeader";
import Footer from "../../components/common/Footer";
import UploadDocument from "../../components/student/UploadDocument";
import PrintSettings from "../../components/student/PrintSettings";

const UploadPrintPage = () => {
  const [file, setFile] = useState(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [showPrintSettings, setShowPrintSettings] = useState(false);
  const [printConfirmed, setPrintConfirmed] = useState(false);
  const [printSettings, setPrintSettings] = useState(null);

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleUploadComplete = () => {
    setUploadComplete(true);
  };

  const handlePrintConfirm = (settings) => {
    setPrintSettings(settings);
    setPrintConfirmed(true);
  };

  const handleReset = () => {
    setFile(null);
    setUploadComplete(false);
    setShowPrintSettings(false);
    setPrintConfirmed(false);
    setPrintSettings(null);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <StudentHeader />
      <main className="flex-grow-1 bg-light">
        <div className="container py-5">
          <h1 className="mb-4">Tải lên và In tài liệu</h1>

          {!showPrintSettings && !printConfirmed && (
            <UploadDocument
              onFileUpload={handleFileUpload}
              onUploadComplete={handleUploadComplete}
            />
          )}

          {showPrintSettings && !printConfirmed && (
            <PrintSettings onPrintConfirm={handlePrintConfirm} />
          )}

          {!printConfirmed && (
            <div className="d-flex justify-content-between mt-4">
              {showPrintSettings ? (
                <>
                  <Button
                    variant="outline-secondary"
                    onClick={() => setShowPrintSettings(false)}
                  >
                    Quay lại
                  </Button>
                  <Button
                    variant="primary"
                    form="print-settings-form"
                    type="submit"
                  >
                    Xác nhận in
                  </Button>
                </>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => setShowPrintSettings(true)}
                  disabled={!uploadComplete}
                >
                  Tiếp tục đến cài đặt in
                </Button>
              )}
            </div>
          )}

          {printConfirmed && (
            <Alert variant="success" className="mt-4">
              <h4 className="alert-heading">Đã xác nhận in thành công!</h4>
              <p>Vui lòng đến máy in đã chọn để lấy tài liệu của bạn.</p>
              <hr />
              <p className="mb-0">
                Tên file: {file.name}
                <br />
                Máy in: {printSettings.printer}
                <br />
                Số bản sao: {printSettings.copies}
              </p>
              <Button variant="link" className="p-0 mt-3" onClick={handleReset}>
                Tải lên tài liệu mới
              </Button>
            </Alert>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadPrintPage;
