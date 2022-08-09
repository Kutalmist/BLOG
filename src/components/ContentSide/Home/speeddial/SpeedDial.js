import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const actions = [
  { icon: <InstagramIcon />, name: "Instagram", key: "ig" },
  { icon: <LinkedInIcon />, name: "Linkedin", key: "lin" },
  { icon: <GitHubIcon />, name: "Github", key: "git" },
  { icon: <TwitterIcon />, name: "Twitter", key: "tw" },
];
const onSocailMedia = (event) => {
  switch (event) {
    case "ig":
      window.open('https://www.instagram.com/kutalmist24/?hl=tr', '_blank');
      break;
    case "lin":
      window.open('https://www.linkedin.com/in/kutalmist', '_blank');
      break;
    case "git":
      window.open('https://git.detaysoft.com/kutalmis', '_blank');
      break;
    case "tw":
      window.open('https://twitter.com/thendeadperson', '_blank');
      break;
    default:
    // code block
  }
};

export default function OpenIconSpeedDial() {
  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        className="profil-speeddial"
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", right: 1 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => {
              onSocailMedia(action.key);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
