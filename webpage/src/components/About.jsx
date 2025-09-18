import { Typography, Box } from "@mui/material";
import MaleIcon from '@mui/icons-material/Male';
export default function About() {
    return (
        <>
            <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography variant="h6" fontWeight="bold" >Address: </Typography>
                <Typography variant="h6" marginLeft="0.5rem">Bulacan</Typography>
            </Box>
             <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography variant="h6" fontWeight="bold" >Phone: </Typography>
                <Typography variant="h6" marginLeft="0.5rem">0969696969</Typography>
            </Box>
             <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography variant="h6" fontWeight="bold" >Email: </Typography>
                <Typography variant="h6" marginLeft="0.5rem">ikarupogi@gmail.com</Typography>
            </Box>
             <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography variant="h6" fontWeight="bold" >Birthday: </Typography>
                <Typography variant="h6" marginLeft="0.5rem">January 6, 2009</Typography>
            </Box>
             <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
                <Typography variant="h6" fontWeight="bold" >Gender: </Typography>
                <MaleIcon sx={{ marginLeft:"0.5rem", marginRight:"0.5rem" }} />
            </Box>
        </>
    );
};
