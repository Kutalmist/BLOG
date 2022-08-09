import "./advisor.css";
import { motion } from "framer-motion";
const Advisor = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p>danisman</p>
    </motion.div>
  );
};
export default Advisor;
