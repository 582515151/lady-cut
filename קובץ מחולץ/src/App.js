import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-10 rounded-2xl shadow-xl text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-pink-600">Lady Cut</h1>
        <p className="text-gray-700">Welcome to your beauty editor app ✂️</p>
      </motion.div>
    </div>
  );
}

export default App;