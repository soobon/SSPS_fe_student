import React from "react";

const Footer = () => {
return (
<footer className="bg-light py-3 mt-5">
<div className="container text-center">
<p>&copy; 2023 HCMUT_SSPS. All rights reserved.</p>
</div>
</footer>
);
};

export default Footer

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
return (
<header className="bg-white shadow-sm sticky-top">
<div className="container py-3 d-flex justify-content-between align-items-center">
<img src="https://placehold.co/100x50" alt="HCMUT_SSPS Logo" />
<nav>
<ul className="nav">
<li className="nav-item">
<Link to="/" className="nav-link text-dark">
Trang chủ
</Link>
</li>
<li className="nav-item">
<Link to="/upload" className="nav-link text-dark">
Tài liệu
</Link>
</li>
<li className="nav-item">
<Link to="/history" className="nav-link text-dark">
Lịch sử
</Link>
</li>
<li className="nav-item">
<Link to="/buy-pages" className="nav-link text-dark">
Mua thêm trang in
</Link>
</li>
</ul>
</nav>
</div>
</header>
);
};

export default Header;

import React from 'react';

const LoadingSpinner = () => {
return (
<div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
<div className="spinner-border text-primary" role="status">
<span className="visually-hidden">Loading...</span>
</div>
</div>
);
};

export default LoadingSpinner;import React, { useState } from 'react';

const BuyPages = () => {
const [pagesToBuy, setPagesToBuy] = useState(10);
const [paymentMethod, setPaymentMethod] = useState('BKPay');

const handlePurchase = () => {
// Implement purchase logic
console.log(`Purchasing ${pagesToBuy} pages using ${paymentMethod}`);
};

return (
<div className="bg-white p-5 rounded shadow-sm mb-4">
<p>Số dư trang in hiện tại: A4: 100 trang, A3: 50 trang</p>
<div className="mb-3">
<label className="form-label">Số lượng trang muốn mua (A4)</label>
<input type="number" className="form-control" value={pagesToBuy} onChange={(e) => setPagesToBuy(e.target.value)} />
</div>
<div className="mb-3">
<p>Tương đương số trang A3: {Math.floor(pagesToBuy / 2)}</p>
</div>
<div className="mb-3">
<p>Tổng chi phí: {pagesToBuy \* 5000} VND</p>
</div>
<div className="mb-3">
<label className="form-label">Phương thức thanh toán</label>
<select className="form-select" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
<option value="BKPay">BKPay</option>
</select>
</div>
<div className="d-flex justify-content-between">
<button className="btn btn-primary" onClick={handlePurchase}>Thanh toán</button>
<button className="btn btn-danger">Hủy</button>
</div>
</div>
);
};

export default BuyPages;import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import {
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
ResponsiveContainer,
} from "recharts";
import { Printer, FileText, CreditCard } from "react-feather";

const Dashboard = ({ studentName, pageBalance, printStats }) => {
const chartData = [
{ name: "Jan", prints: 65 },
{ name: "Feb", prints: 59 },
{ name: "Mar", prints: 80 },
{ name: "Apr", prints: 81 },
{ name: "May", prints: 56 },
{ name: "Jun", prints: 55 },
{ name: "Jul", prints: 40 },
];

return (
<div className="dashboard">
<h1 className="mb-4">Welcome, {studentName}</h1>
<Row className="mb-4">
<Col md={4}>
<Card className="dashboard-card h-100">
<Card.Body>
<Card.Title>Page Balance</Card.Title>
<div className="d-flex justify-content-between align-items-center mt-3">
<div>
<h3 className="mb-0">{pageBalance.a4}</h3>
<p className="text-muted">A4 Pages</p>
</div>
<div>
<h3 className="mb-0">{pageBalance.a3}</h3>
<p className="text-muted">A3 Pages</p>
</div>
</div>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className="dashboard-card h-100">
<Card.Body>
<Card.Title>Monthly Prints</Card.Title>
<div className="d-flex justify-content-between align-items-center mt-3">
<h3 className="mb-0">{printStats.monthlyPrints}</h3>
<Printer size={24} className="text-primary" />
</div>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className="dashboard-card h-100">
<Card.Body>
<Card.Title>Total Prints</Card.Title>
<div className="d-flex justify-content-between align-items-center mt-3">
<h3 className="mb-0">{printStats.totalPrints}</h3>
<FileText size={24} className="text-primary" />
</div>
</Card.Body>
</Card>
</Col>
</Row>
<Row className="mb-4">
<Col md={8}>
<Card className="dashboard-card">
<Card.Body>
<Card.Title>Print History</Card.Title>
<ResponsiveContainer width="100%" height={300}>
<BarChart data={chartData}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="prints" fill="#0d6efd" />
</BarChart>
</ResponsiveContainer>
</Card.Body>
</Card>
</Col>
<Col md={4}>
<Card className="dashboard-card h-100">
<Card.Body>
<Card.Title>Quick Actions</Card.Title>
<div className="d-grid gap-2 mt-3">
<Button variant="primary" size="lg">
<Printer size={18} className="me-2" /> Print Document
</Button>
<Button variant="outline-primary" size="lg">
<CreditCard size={18} className="me-2" /> Buy Pages
</Button>
</div>
</Card.Body>
</Card>
</Col>
</Row>
</div>
);
};

export default Dashboard;
import React from 'react';
import { Card, Table, Form, Row, Col } from 'react-bootstrap';

const PrintHistory = () => {
const historyData = [
{ id: 1, date: '2023-07-15', document: 'Assignment.pdf', pages: 5, status: 'Completed' },
{ id: 2, date: '2023-07-14', document: 'Lecture_Notes.docx', pages: 10, status: 'Completed' },
{ id: 3, date: '2023-07-13', document: 'Research_Paper.pdf', pages: 15, status: 'Failed' },
{ id: 4, date: '2023-07-12', document: 'Presentation.pptx', pages: 20, status: 'Completed' },
];

return (
<div className="print-history">
<h1 className="page-title">Print History</h1>
<Card className="dashboard-card">
<Card.Body>
<Row className="mb-3">
<Col md={6}>
<Form.Group>
<Form.Label>Start Date</Form.Label>
<Form.Control type="date" />
</Form.Group>
</Col>
<Col md={6}>
<Form.Group>
<Form.Label>End Date</Form.Label>
<Form.Control type="date" />
</Form.Group>
</Col>
</Row>
<Table responsive striped hover>
<thead>
<tr>
<th>Date</th>
<th>Document</th>
<th>Pages</th>
<th>Status</th>
</tr>
</thead>
<tbody>
{historyData.map((item) => (
<tr key={item.id}>
<td>{item.date}</td>
<td>{item.document}</td>
<td>{item.pages}</td>
<td>
<span className={`badge bg-${item.status === 'Completed' ? 'success' : 'danger'}`}>
{item.status}
</span>
</td>
</tr>
))}
</tbody>
</Table>
</Card.Body>
</Card>
</div>
);
};

export default PrintHistory;import React, { useState } from "react";

const PrintSettings = () => {
const [printer, setPrinter] = useState("");
const [paperSize, setPaperSize] = useState("A4");
const [printPages, setPrintPages] = useState("");
const [printSides, setPrintSides] = useState("one-sided");
const [copies, setCopies] = useState(1);

return (
<div>
<div className="bg-white p-5 rounded shadow-sm mb-4">
<h2 className="h5">Chọn máy in</h2>
<select
className="form-select mb-4"
value={printer}
onChange={(e) => setPrinter(e.target.value)} >
<option value="">Select a printer</option>
<option value="printer1">Máy in 1 - Vị trí A</option>
<option value="printer2">Máy in 2 - Vị trí B</option>
<option value="printer3">Máy in 3 - Vị trí C</option>
</select>
<div className="bg-light p-4 rounded">
<p>ID: 001</p>
<p>Hãng: HP</p>
<p>Model: LaserJet Pro</p>
<p>Vị trí: Phòng 101</p>
</div>
</div>
<div className="bg-white p-5 rounded shadow-sm mb-4">
<h2 className="h5">Tùy chọn in</h2>
<div className="mb-3">
<label className="form-label">Kích thước giấy</label>
<select
className="form-select"
value={paperSize}
onChange={(e) => setPaperSize(e.target.value)} >
<option value="A4">A4</option>
<option value="A3">A3</option>
</select>
</div>
<div className="mb-3">
<label className="form-label">Số trang cần in</label>
<input
type="text"
className="form-control"
placeholder="Tất cả hoặc chọn range"
value={printPages}
onChange={(e) => setPrintPages(e.target.value)}
/>
</div>
<div className="mb-3">
<label className="form-label">In một mặt/hai mặt</label>
<select
className="form-select"
value={printSides}
onChange={(e) => setPrintSides(e.target.value)} >
<option value="one-sided">Một mặt</option>
<option value="two-sided">Hai mặt</option>
</select>
</div>
<div className="mb-3">
<label className="form-label">Số bản sao</label>
<input
type="number"
className="form-control"
value={copies}
onChange={(e) => setCopies(e.target.value)}
/>
</div>
</div>
<div className="bg-white p-5 rounded shadow-sm mb-4">
<h2 className="h5">Xem trước chi phí in</h2>
<p>Số trang sẽ bị trừ: 10</p>
</div>
<div className="d-flex justify-content-between">
<button className="btn btn-primary">Xác nhận in</button>
<button className="btn btn-danger">Quay lại</button>
</div>
</div>
);
};

export default PrintSettings;
import React, { useState } from 'react';
import { Card, Form, Button, ProgressBar } from 'react-bootstrap';
import { Upload } from 'react-feather';

const UploadDocument = () => {
const [file, setFile] = useState(null);
const [uploading, setUploading] = useState(false);
const [progress, setProgress] = useState(0);

const handleFileChange = (event) => {
setFile(event.target.files[0]);
};

const handleUpload = () => {
if (file) {
setUploading(true);
// Simulate upload process
let uploadProgress = 0;
const interval = setInterval(() => {
uploadProgress += 10;
setProgress(uploadProgress);
if (uploadProgress >= 100) {
clearInterval(interval);
setUploading(false);
}
}, 500);
}
};

return (
<div className="upload-document">
<h1 className="page-title">Upload Document</h1>
<Card className="dashboard-card">
<Card.Body>
<div className="text-center mb-4">
<Upload size={48} className="text-primary" />
<h5 className="mt-3">Drag and drop your file here</h5>
<p className="text-muted">or click to browse</p>
</div>
<Form.Group controlId="formFile" className="mb-3">
<Form.Control type="file" onChange={handleFileChange} />
</Form.Group>
{file && (
<p className="mt-3">
Selected file: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
</p>
)}
{uploading && (
<ProgressBar animated now={progress} label={`${progress}%`} className="mt-3" />
)}
<Button
variant="primary"
onClick={handleUpload}
disabled={!file || uploading}
className="w-100 mt-3" >
{uploading ? 'Uploading...' : 'Upload Document'}
</Button>
</Card.Body>
</Card>
</div>
);
};

export default UploadDocument;import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import BuyPages from "../../components/student/BuyPages";

const BuyPagesPage = () => {
return (
<div>
<Header />
<div className="container-fluid">
<div className="row">
<div className="col-md-9">
<main className="py-4">
<h1 className="mb-4">Mua thêm trang in</h1>
<BuyPages />
</main>
</div>
</div>
</div>
<Footer />
</div>
);
};

export default BuyPagesPage;
import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import PrintHistory from "../../components/student/PrintHistory";

const HistoryPage = () => {
return (
<div>
<Header />
<div className="container-fluid">
<div className="row">
<div className="col-md-9">
<main className="py-4">
<h1 className="mb-4">Lịch sử in</h1>
<PrintHistory />
</main>
</div>
</div>
</div>
<Footer />
</div>
);
};

export default HistoryPage;
import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Dashboard from '../../components/student/Dashboard';

const HomePage = () => {
// Mock data
const studentName = "Nguyễn Văn A";
const pageBalance = { a4: 100, a3: 50 };
const printStats = { monthlyPrints: 10, totalPrints: 200 };

return (
<div>
<Header />
<div className="container-fluid">
<div className="row">
<div className="col-md-9">
<main className="py-4">
<Dashboard studentName={studentName} pageBalance={pageBalance} printStats={printStats} />
</main>
</div>
</div>
</div>
<Footer />
</div>
);
};

export default HomePage;import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import UploadDocument from '../../components/student/UploadDocument';

const UploadPage = () => {
return (
<div>
<Header />
<div className="container-fluid">
<div className="row">
<div className="col-md-9">
<main className="py-4">
<h1 className="mb-4">Tải lên tài liệu</h1>
<UploadDocument />
</main>
</div>
</div>
</div>
<Footer />
</div>
);
};

export default UploadPage;import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/student/HomePage";
import UploadPage from "./pages/student/UploadPage";
import HistoryPage from "./pages/student/HistoryPage";
import BuyPagesPage from "./pages/student/BuyPagesPage";

function App() {
return (
<Router>
<Routes>
<Route exact path="/" element={<HomePage />} />
<Route path="/upload" element={<UploadPage />} />
<Route path="/history" element={<HistoryPage />} />
<Route path="/buy-pages" element={<BuyPagesPage />} />
</Routes>
</Router>
);
}

export default App;
#   H C M U T _ S S O _ f e  
 