import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Settings, LogOut } from "react-feather";

const UserAccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button
        className="btn btn-link text-dark dropdown-toggle d-flex align-items-center"
        type="button"
        onClick={toggleDropdown}
      >
        <User size={18} className="me-2" />
        <span>Nguyễn Văn A</span>
      </button>
      <ul className={`dropdown-menu${isOpen ? " show" : ""}`}>
        <li>
          <Link to="/account" className="dropdown-item">
            <User size={18} className="me-2" />
            Thông tin tài khoản
          </Link>
        </li>
        <li>
          <Link to="/settings" className="dropdown-item">
            <Settings size={18} className="me-2" />
            Cài đặt
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link to="/logout" className="dropdown-item text-danger">
            <LogOut size={18} className="me-2" />
            Đăng xuất
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountDropdown;