import React, { useState } from "react";
import { Card, Form, Alert } from "react-bootstrap";
import { Printer, FileText, DollarSign } from "react-feather";

const PrintSettings = ({ onPrintConfirm }) => {
  const [printer, setPrinter] = useState("");
  const [paperSize, setPaperSize] = useState("A4");
  const [printPages, setPrintPages] = useState("");
  const [printSides, setPrintSides] = useState("one-sided");
  const [copies, setCopies] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onPrintConfirm({
      printer,
      paperSize,
      printPages,
      printSides,
      copies,
    });
  };

  return (
    <Form id="print-settings-form" onSubmit={handleSubmit}>
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2 className="h5 mb-4">
            <Printer className="me-2" size={20} />
            Chọn máy in
          </h2>
          <Form.Select
            className="mb-4"
            value={printer}
            onChange={(e) => setPrinter(e.target.value)}
            required
          >
            <option value="">Chọn máy in</option>
            <option value="Máy in 1 - Vị trí A">Máy in 1 - Vị trí A</option>
            <option value="Máy in 2 - Vị trí B">Máy in 2 - Vị trí B</option>
            <option value="Máy in 3 - Vị trí C">Máy in 3 - Vị trí C</option>
          </Form.Select>
          {printer && (
            <Alert variant="info">
              <p className="mb-1">
                <strong>ID:</strong> 001
              </p>
              <p className="mb-1">
                <strong>Hãng:</strong> HP
              </p>
              <p className="mb-1">
                <strong>Model:</strong> LaserJet Pro
              </p>
              <p className="mb-0">
                <strong>Vị trí:</strong> Phòng 101
              </p>
            </Alert>
          )}
        </Card.Body>
      </Card>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2 className="h5 mb-4">
            <FileText className="me-2" size={20} />
            Tùy chọn in
          </h2>
          <Form.Group className="mb-3">
            <Form.Label>Kích thước giấy</Form.Label>
            <Form.Select
              value={paperSize}
              onChange={(e) => setPaperSize(e.target.value)}
            >
              <option value="A4">A4</option>
              <option value="A3">A3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Số trang cần in</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tất cả hoặc chọn range (vd: 1-5, 8, 11-13)"
              value={printPages}
              onChange={(e) => setPrintPages(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>In một mặt/hai mặt</Form.Label>
            <Form.Select
              value={printSides}
              onChange={(e) => setPrintSides(e.target.value)}
            >
              <option value="one-sided">Một mặt</option>
              <option value="two-sided">Hai mặt</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Số bản sao</Form.Label>
            <Form.Control
              type="number"
              value={copies}
              onChange={(e) => setCopies(e.target.value)}
              min="1"
            />
          </Form.Group>
        </Card.Body>
      </Card>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h2 className="h5 mb-3">
            <DollarSign className="me-2" size={20} />
            Xem trước chi phí in
          </h2>
          <p className="mb-0">
            <strong>Số trang sẽ bị trừ:</strong>{" "}
            {copies * (printPages ? printPages.split(",").length : 1)}
          </p>
        </Card.Body>
      </Card>
    </Form>
  );
};

export default PrintSettings;
