import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Printer, FileText, CreditCard } from "react-feather";

const Dashboard = ({ pageBalance, printStats }) => {
  const chartData = [
    { name: "T1", prints: 65 },
    { name: "T2", prints: 59 },
    { name: "T3", prints: 80 },
    { name: "T4", prints: 81 },
    { name: "T5", prints: 56 },
    { name: "T6", prints: 55 },
    { name: "T7", prints: 40 },
  ];

  const pieData = [
    { name: "A4", value: pageBalance.a4 },
    { name: "A3", value: pageBalance.a3 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="dashboard">
      <Row className="mb-4">
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span>Số dư trang in</span>
                <CreditCard size={24} className="text-primary" />
              </Card.Title>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span>Số lần in trong tháng</span>
                <Printer size={24} className="text-primary" />
              </Card.Title>
              <h3 className="display-4 text-center my-4">
                {printStats.monthlyPrints}
              </h3>
              <p className="text-muted text-center">lần in</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title className="d-flex justify-content-between align-items-center">
                <span>Tổng số lần in</span>
                <FileText size={24} className="text-primary" />
              </Card.Title>
              <h3 className="display-4 text-center my-4">
                {printStats.totalPrints}
              </h3>
              <p className="text-muted text-center">lần in</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Lịch sử in theo tháng</Card.Title>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="prints" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
