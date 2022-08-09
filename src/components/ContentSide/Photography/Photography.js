import "./photography.css";
import { motion } from "framer-motion";
import ImageList from "./imagelist/ImageList";
const Photography = () => {
  return (
    <motion.div
      className="photo-page"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <ImageList /> */}
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div>
    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="" loading="lazy"></img>
  </div>
  <div >
    <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="" loading="lazy"></img>
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="" loading="lazy"></img>
  </div>
  <div>
    <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="" loading="lazy"></img>
  </div>
  <div >
    <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" alt="" loading="lazy"></img>
  </div>
</div>
    </motion.div>
  );
};
export default Photography;
