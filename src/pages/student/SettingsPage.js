import React, { useState } from "react";
import StudentHeader from "../../components/common/StudentHeader";
import Footer from "../../components/common/Footer";

const SettingsPage = () => {
  const [email, setEmail] = useState("nguyenvana@example.com");
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    lowBalanceAlert: true,
  });

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNotificationChange = (e) => {
    setNotificationPreferences({
      ...notificationPreferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to update settings)
    console.log("Settings updated:", { email, notificationPreferences });
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <StudentHeader />
      <main className="flex-grow-1 bg-light">
        <div className="container py-5">
          <h1 className="mb-4">Cài đặt tài khoản</h1>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <h5 className="mb-3">Tùy chọn thông báo</h5>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="emailNotifications"
                    name="emailNotifications"
                    checked={notificationPreferences.emailNotifications}
                    onChange={handleNotificationChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="emailNotifications"
                  >
                    Nhận thông báo qua email
                  </label>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="lowBalanceAlert"
                    name="lowBalanceAlert"
                    checked={notificationPreferences.lowBalanceAlert}
                    onChange={handleNotificationChange}
                  />
                  <label className="form-check-label" htmlFor="lowBalanceAlert">
                    Cảnh báo khi số trang in sắp hết
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Lưu thay đổi
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;
