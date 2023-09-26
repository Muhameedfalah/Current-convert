import React from "react";
import { motion } from 'framer-motion';

export const Amount = ({ error, value, onChange }) => {
  const errorClass = error ? "has-error" : "";

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { y: -20 },
    visible: { y: 0 },
  };
  
  const textStyle = {
    fontWeight: 'bold',
    color: 'rgb(40, 210, 182)',
  };
  

  return (
    <label className={errorClass}>
    <motion.div
      className={errorClass}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <motion.div variants={textVariants} style={textStyle}>
        Exchange Rate
      </motion.div>
    </motion.div>
      <input
        type="text"
        placeholder="Set Amount"
        value={value}
        onChange={onChange}
        style={{
          borderRadius: "10px",
          marginBottom: "-20px"
        }}
      />
      {error && <div className="error-hint">{error}</div>}
    </label>
  );
};
