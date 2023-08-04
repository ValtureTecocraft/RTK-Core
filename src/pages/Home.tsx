import React from "react";
import Counter from "../components/Counter";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-blue-600">
        Install & Setup Vite + React + Typescript + Tailwind CSS 3
        <Counter />
      </h1>
    </div>
  );
};

export default Home;
