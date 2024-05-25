"use client";

import { useState } from "react";

import { ToastContext } from "@/app/utils/context";
import Calendar from "@/app/components/calendar";
import Toast from "@/app/components/toast";

const MyCalendar = () => {
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
};

export default MyCalendar;
