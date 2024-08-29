"use client"
import React, { createContext, useContext } from "react";import { motion } from "framer-motion";


const PageUnderConstruction = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <motion.div
            className="text-4xl font-bold text-gray-700 mb-4"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            🚧 En Construcción 🚧
          </motion.div>
    
          <motion.p
            className="text-lg text-gray-600"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Estamos trabajando en algo increíble. ¡Vuelve pronto!
          </motion.p>
    
          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn", delay: 0.8 }}
          >
            <div className="h-5 w-5 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="h-5 w-5 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
            <div className="h-5 w-5 bg-yellow-400 rounded-full animate-pulse delay-400"></div>
          </motion.div>
        </div>
      );
}

export default PageUnderConstruction