import { Box, Avatar, Typography } from "@mui/material";
import IkaruNightPicture from "../assets/ikaru-night.png";
import IkaruDayPicture from "../assets/ikaru-day.jpg";

export default function ProfileCard({ mode }) {
    return (
        <Box width="50%" height="100vh" sx={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
          <Avatar
            alt="Remy Sharp"
            src={mode === "dark" ? IkaruNightPicture : IkaruDayPicture}
            sx={{ width: "20rem", height: "20rem", border:"4px solid black", marginBottom:"1rem", boxShadow:"0 4px 20px rgba(0, 0, 0, 0.8)" }}
          />
          <Typography component="h1" variant="h5" textAlign="center" sx={{ fontWeight:"bold", marginTop:"1rem" }}>
            {mode === "dark" ? "BERJUEGA, Frances Jamie" : "BERJUEGA, Francis James"}
          </Typography>
          <Typography component="p" textAlign="center" sx={{ marginTop:"0.5rem", color:"text.secondary" }}>
            {mode === "dark" ? "Professional Dancer" : "Full-Stack Developer"}
          </Typography>
        </Box>
    );
}