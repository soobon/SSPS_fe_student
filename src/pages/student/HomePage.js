import React, { useState, useEffect } from "react";
import StudentHeader from "../../components/common/StudentHeader";
import Footer from "../../components/common/Footer";
import Dashboard from "../../components/student/Dashboard";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import apiService from "../../services/api";

const HomePage = () => {
  const [studentID, setStudentID] = useState("012345678");
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem("studentName") || "";
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingStats, setIsLoadingStats] = useState(false);
  const [printStats, setPrintStats] = useState({
    totalPrints: 0,
    totalPages: 0,
    balance: 0,
  });
  const [chartData, setChartData] = useState([
    { name: "T1", prints: 0 },
    { name: "T2", prints: 0 },
    { name: "T3", prints: 0 },
    { name: "T4", prints: 0 },
    { name: "T5", prints: 0 },
    { name: "T6", prints: 0 },
    { name: "T7", prints: 0 },
    { name: "T8", prints: 0 },
    { name: "T9", prints: 0 },
    { name: "T10", prints: 0 },
    { name: "T11", prints: 0 },
    { name: "T12", prints: 0 },
  ]);

  // Load user info first
  useEffect(() => {
    const cached = localStorage.getItem("studentName");
    if (cached) {
      setStudentName(cached);
      setIsLoading(false);
    } else {
      apiService
        .getInfo(studentID)
        .then((userInfo) => {
          setStudentName(userInfo.data.name);
          localStorage.setItem("studentName", userInfo.data.name);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsLoading(false);
        });
    }
  }, [studentID]);

  // Load statistics after initial render
  useEffect(() => {
    const loadStatistics = async () => {
      const cached = localStorage.getItem("chartData");
      if (cached) {
        setChartData(JSON.parse(cached));
        return;
      }

      setIsLoadingStats(true);
      try {
        const promises = Array.from({ length: 12 }, (_, i) =>
          apiService.getStatistic(studentID, i + 1)
        );
        const statsResults = await Promise.all(promises);
        const newChartData = statsResults.map((res, index) => ({
          name: `T${index + 1}`,
          prints: res.data.printing_count_for_specific_month,
        }));
        setChartData(newChartData);
        localStorage.setItem("chartData", JSON.stringify(newChartData));
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoadingStats(false);
      }
    };

    if (!isLoading) {
      loadStatistics();
    }
  }, [studentID, isLoading]);

  // Update print stats from API
  useEffect(() => {
    const loadPrintStats = async () => {
      try {
        const stats = await apiService.getStatistic(
          studentID,
          new Date().getMonth() + 1
        );
        setPrintStats({
          balance: stats.data.nb_of_page_left,
          totalPrints: stats.data.printing_count,
          totalPages: stats.data.total_page_used,
        });
        console.log("Print stats:", printStats);
      } catch (error) {
        console.error("Error fetching print stats:", error);
      }
    };

    if (!isLoading) {
      loadPrintStats();
    }
  }, [studentID, isLoading]);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <StudentHeader />
      <main className="flex-grow-1">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 mb-4">
                Chào mừng, {isLoading ? "loading..." : studentName}!
              </h1>
              <p className="lead text-muted mb-5">
                Quản lý in ấn của bạn trở nên dễ dàng hơn với HCMUT SSPS.
              </p>
              <Dashboard
                printStats={printStats}
                chartData={chartData}
                isLoadingStats={isLoadingStats}
              />
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
