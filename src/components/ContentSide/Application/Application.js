import "./application.css";
import { motion } from "framer-motion";
const Application = () => {
  return (
    <motion.div
    intial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <p>uygulamlar</p>
  </motion.div>
  );
};
export default Application;
