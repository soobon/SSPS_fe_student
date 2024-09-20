import React from "react";
import StudentHeader from "../../components/common/StudentHeader";
import Footer from "../../components/common/Footer";
import Dashboard from "../../components/student/Dashboard";

const HomePage = () => {
  // Mock data
  const studentName = "Nguyễn Văn B";
  const pageBalance = { a4: 100, a3: 50 };
  const printStats = { monthlyPrints: 10, totalPrints: 200 };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <StudentHeader />
      <main className="flex-grow-1">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 mb-4">Chào mừng, {studentName}!</h1>
              <p className="lead text-muted mb-5">
                Quản lý in ấn của bạn trở nên dễ dàng hơn với HCMUT SSPS.
              </p>
              <Dashboard pageBalance={pageBalance} printStats={printStats} />
            </div>
            <div className="col-lg-4">
              <img
                src="https://img.freepik.com/free-vector/printing-industry-flat-illustration_23-2148899280.jpg?t=st=1726754615~exp=1726758215~hmac=9ccc0c1614228e52d3be16bf0d559dbca4a57ed416f6bef57fafad0331ac83ab&w=1380"
                alt="Printing Illustration"
                className="img-fluid mb-4"
              />
              <div className="card bg-primary text-white">
                <div className="card-body">
                  <h5 className="card-title">Bạn đã biết?</h5>
                  <p className="card-text">
                    In hai mặt giúp tiết kiệm 50% giấy và góp phần bảo vệ môi
                    trường.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
