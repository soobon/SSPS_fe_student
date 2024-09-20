import React, { useState } from "react";
import { Card, Table, Form, Row, Col, Badge } from "react-bootstrap";
import { Calendar, Printer, FileText } from "react-feather";
import StudentHeader from "../../components/common/StudentHeader";
import Footer from "../../components/common/Footer";

const HistoryPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const historyData = [
    {
      id: 1,
      date: "2023-07-15",
      document: "Assignment.pdf",
      pages: 5,
      status: "Completed",
    },
    {
      id: 2,
      date: "2023-07-14",
      document: "Lecture_Notes.docx",
      pages: 10,
      status: "Completed",
    },
    {
      id: 3,
      date: "2023-07-13",
      document: "Research_Paper.pdf",
      pages: 15,
      status: "Failed",
    },
    {
      id: 4,
      date: "2023-07-12",
      document: "Presentation.pptx",
      pages: 20,
      status: "Completed",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <StudentHeader />
      <main className="flex-grow-1 bg-light">
        <div className="container py-5">
          <h1 className="mb-4">Lịch sử in</h1>
          <Card className="shadow-sm">
            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Ngày bắt đầu</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Calendar size={18} />
                      </span>
                      <Form.Control
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Ngày kết thúc</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <Calendar size={18} />
                      </span>
                      <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Ngày</th>
                    <th>Tài liệu</th>
                    <th>Số trang</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>
                        <FileText size={18} className="me-2" />
                        {item.document}
                      </td>
                      <td>
                        <Printer size={18} className="me-2" />
                        {item.pages}
                      </td>
                      <td>
                        <Badge
                          bg={
                            item.status === "Completed" ? "success" : "danger"
                          }
                        >
                          {item.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
