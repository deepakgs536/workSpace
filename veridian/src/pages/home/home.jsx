import { Box, Typography } from "@mui/material";
import React from "react";
import DownArrow from "@mui/icons-material/TurnRight";
import { Styles } from "./styles";

export default function Home() {
  return (
    <Box sx={Styles.boxStyle}>
      {/* Transparent Overlay Image Left */}
        {/* Headline */}
        <Typography
          sx={Styles.yellowBackground}
        >
          Investment management
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={Styles.bigText}
        >
          Empowering Investments with Expertise 
          and Strategy
        </Typography>

        {/* Call to Action */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#006547",
            padding: "12px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(0, 101, 71,0.7)", // The last value (0.5) controls the opacity
            },
          }}
        >
          <Typography
            sx={Styles.knowMore}
          >
            Know more
          </Typography>
          <DownArrow sx={{ color: "#FFFFFF", transform: "rotate(90deg)" }} />
        </Box>
    </Box>
  );
}



