import { Typography, Box } from "@mui/material";
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';

export default function About({ mode }) {
    return (
        <>
            <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography component="p" fontWeight="bold" >Address: </Typography>
                <Typography component="p" color="text.secondary" marginLeft="0.5rem">Bulacan</Typography>
            </Box>
            <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography component="p" fontWeight="bold" >Phone: </Typography>
                <Typography component="p" color="text.secondary" marginLeft="0.5rem">0969696969</Typography>
            </Box>
            <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography component="p" fontWeight="bold" >Email: </Typography>
                <Typography component="p" color="text.secondary" marginLeft="0.5rem">
                    {mode === "dark" ? "ikaruganda@gmail.com" : "ikarupogi@gmail.com"}
                </Typography>
            </Box>
            <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography component="p" fontWeight="bold" >Birthday: </Typography>
                <Typography component="p" color="text.secondary" marginLeft="0.5rem">January 6, 2009</Typography>
            </Box>
            <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography component="p" fontWeight="bold" >Gender: </Typography>
                {
                    mode === "dark" ? <TransgenderIcon sx={{ marginLeft:"0.5rem", marginRight:"0.5rem", color:"text.secondary" }} /> : <MaleIcon sx={{ marginLeft:"0.5rem", marginRight:"0.5rem", color:"text.secondary" }} />
                }
            </Box>
        </>
    );
};
