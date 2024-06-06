import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ModalComponent = () => {
  const [skill, setSkill] = useState("");
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          console.log("Time's up!");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/student/login");
    }
  }, [count, navigate]);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Please log in to continue.
        </h2>
        <h1 className="text-sm font-semibold mb-4 text-center">
          You will be redirected to login page in {count} seconds.
        </h1>
      </div>
    </div>
  );
};

export default ModalComponent;
