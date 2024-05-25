"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getLocalStorage, setLocalStorage } from "./utils";
import "./globals.css";

const Home = () => {
  const [name, setName] = useState("");

  const userInfo = getLocalStorage("userInfo", null);
  const router = useRouter();

  useEffect(() => {
    if (userInfo !== null) {
      router.push("/my-calendar");
    }
  });

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalStorage("userInfo", {
      name,
    });
    router.push("/my-calendar");
  };

  return (
    <div className="onboarding">
      <h1>
        Hey there! <span>Welcome.</span>
      </h1>
      <h2>
        Let&apos;s start with your name, to get a more personalized feel to your
        calendar
      </h2>
      <form>
        <label>
          {" "}
          What would you like to be referred as?<sup>*</sup>
        </label>
        <input
          type="text"
          placeholder="Please enter a username"
          value={name}
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit}>Let&apos;s Go!</button>
      </form>
    </div>
  );
};

export default Home;
