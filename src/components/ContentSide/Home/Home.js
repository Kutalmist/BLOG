import "./home.css";
import { motion } from "framer-motion";
import Avatar from "@mui/material/Avatar";
import SpeedDial from "./speeddial/SpeedDial";
import IconButton from "@mui/material/IconButton";
import { faThumbsUp,faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profil from "C:/Users/P1607/Desktop/blog/src/images/profil.jpg";
const Home = () => {
  return (
    <motion.div
      className="home-page"
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home-container">
        <Avatar
          className="profil-img"
          sx={{ width: 150, height: 150 }}
          src={Profil}
        />
        <p className="profil-name">Kutalmıs Tamur</p>
        <p className="profil-statu">( FrontEnd Developer )</p>
        <div className="profil-desc">
          <p>
            Merhaba, 2019 yılında fotoğrafçılık işini bırakarak Detaysoft
            ailesine tasarımcı olarak başladım bu süreçte CSS,JS,HTML,UI5
            öğrenirken daha sonra web servisleri öğrenerek Fiori takımına geçiş
            yaptım bu sürede birçok projelere katkı sağlarken ANGULAR,REACT gibi
            frameworklerde projeler yaptım hobi olarak FLUTTER ve NODE.JS
            araştırması ve bireysel projeler yapıyorum.
          </p>
          <br></br>
          <p>
            <IconButton >
              <FontAwesomeIcon className="profil-liked" icon={faThumbsUp} />
            </IconButton>
            <IconButton  color="primary">
              <FontAwesomeIcon className="profil-nliked" icon={faThumbsDown} />
            </IconButton>
          </p>
        </div>
      </div>
      <SpeedDial />
    </motion.div>
  );
};
export default Home;
