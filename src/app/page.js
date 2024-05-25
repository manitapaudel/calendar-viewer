"use client";

import { useState } from "react";

import "./globals.css";

const Home = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
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
        <button>Let&apos;s Go!</button>
      </form>
    </div>
  );
};

export default Home;
