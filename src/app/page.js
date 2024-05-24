"use client";

import { useState } from "react";

import { ToastContext } from "./utils/context";
import Calendar from "./components/calendar";
import Toast from "./components/toast";

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("Event Created Successfully");

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 10000);
  };

  return (
    <div>
      <Toast
        message={message}
        type="success"
        extraClass={`${showToast ? "show" : ""}`}
        setShowToast={setShowToast}
      />
      <ToastContext.Provider
        value={{ showToast, setShowToast, handleShowToast, setMessage }}
      >
        <Calendar />
      </ToastContext.Provider>
    </div>
  );
}
