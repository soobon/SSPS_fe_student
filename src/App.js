import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/student/HomePage";
import UploadPrintPage from "./pages/student/UploadPage";
import HistoryPage from "./pages/student/HistoryPage";
import BuyPagesPage from "./pages/student/BuyPagesPage";
import AccountPage from "./pages/student/AccountPage";
import SettingsPage from "./pages/student/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPrintPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/buy-pages" element={<BuyPagesPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
