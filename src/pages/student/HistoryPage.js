import React, { useState, useEffect } from "react";
import { Card, Table, Form, Row, Col, Badge, Button } from "react-bootstrap";
import { Printer, FileText, Trash } from "react-feather";
import StudentHeader from "../../components/common/StudentHeader";
import Footer from "../../components/common/Footer";
import apiService from "../../services/api";

const HistoryPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [historyData, setHistoryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const userId = localStorage.getItem("id");

  useEffect(() => {
    apiService
      .getHistory(userId)
      .then((response) => {
        setHistoryData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
      });
  }, []);

  const handleFilter = () => {
    if (!startDate && !endDate) {
      setFilteredData(historyData);
      return;
    }

    const filtered = historyData.filter((item) => {
      const itemDate = new Date(item.print_date);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;

      if (start && end) {
        return itemDate >= start && itemDate <= end;
      } else if (start) {
        return itemDate >= start;
      } else if (end) {
        return itemDate <= end;
      }
      return true;
    });

    setFilteredData(filtered);
  };

  const clearFilter = () => {
    setStartDate("");
    setEndDate("");
    setFilteredData(historyData);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <StudentHeader />
      <main className="flex-grow-1 bg-light">
        <div className="container py-5">
          <h1 className="mb-4">Lịch sử in</h1>

          {/* Filter Section */}
          <Card className="mb-4">
            <Card.Body>
              <Row className="align-items-end">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Từ ngày</Form.Label>
                    <Form.Control
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Đến ngày</Form.Label>
                    <Form.Control
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <div className="d-flex gap-2">
                    <Button variant="primary" onClick={handleFilter}>
                      Lọc
                    </Button>
                    <Button variant="secondary" onClick={clearFilter}>
                      Xóa bộ lọc
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Tài liệu</th>
                <th>Số trang</th>
                <th>Trạng thái</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.print_date}</td>
                  <td>
                    <FileText size={18} className="me-2" />
                    {item.file_name}
                  </td>
                  <td>
                    <Printer size={18} className="me-2" />
                    {item.nb_of_page_used}
                  </td>
                  <td>
                    <Badge bg={+item.statuss == 2 ? "success" : "danger"}>
                      {item.statuss}
                    </Badge>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center"
                      onClick={() => {
                        try {
                          apiService.deleteRequest(
                            item.order_num,
                            item.file_id
                          );
                          window.location.reload();
                        } catch (err) {
                          alert("Lỗi ròi !!!!!!!");
                          console.error(err);
                        }
                      }}
                      title="Xóa tài liệu"
                    >
                      <Trash size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
