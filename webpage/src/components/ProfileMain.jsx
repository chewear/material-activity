import { Box, Typography, Rating, Divider } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import UserInformation from "./UserInformation";

export default function ProfileMain({ mode }) {
    return (
        <Box width="50%">

            <Box display="flex" flexDirection="column" gap="0.5rem">
                <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                    <Typography variant="h4" sx={{ fontWeight:"bold" }}>BERJUEGA</Typography>
                    <LocationOnIcon sx={{ marginLeft:"1rem" }} />
                    <Typography component="p" color="text.secondary" fontStyle="italic">Bulacan</Typography>
                </Box>
                <Typography component="p" color="text.secondary" fontStyle="italic">
                    {mode === "dark" ? "Professional Dancer" : "Full-Stack Developer"}
                </Typography>
                <Rating name="read-only" value={10} max={10} readOnly />
            </Box>

            <Divider sx={{ marginY:"2rem" }}/>

            <UserInformation mode={mode} />
            
        </Box>
    )
}