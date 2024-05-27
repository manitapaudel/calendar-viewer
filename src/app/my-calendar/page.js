"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { ToastContext } from "@/app/utils/context";
import { getLocalStorage } from "@/app/utils";
import Calendar from "@/app/components/calendar";
import Toast from "@/app/components/toast";

const MyCalendar = () => {
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState("Event Created Successfully");
  const [isUserInfoLoaded, setIsUserInfoLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  // const userInfo = getLocalStorage("userInfo", null);
  const router = useRouter();

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 10000);
  };

  useEffect(() => {
    const userInfo = getLocalStorage("userInfo", null);
    if (userInfo === null) {
      router.push("/");
    } else {
      setUserInfo(userInfo);
    }
    setIsUserInfoLoaded(true);
  }, [router]);

  if (!isUserInfoLoaded) {
    return <div>Loading...</div>; // Render a loading indicator while userInfo is being loaded
  }

  if (userInfo === null) {
    router.push("/");
    return null;
  }

  return (
    <div className="my-calendar-page">
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
