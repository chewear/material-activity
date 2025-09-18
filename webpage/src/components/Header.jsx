import { AppBar,Typography, Box, Switch } from "@mui/material"
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header({ mode, setMode }) {
    return (
        <AppBar position="static" sx={{ height:"4rem",display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:"0.5rem", paddingX:"1rem" }}>
            <Typography  variant="h5" sx={{ fontWeight:"bold" }}>
                {mode === "dark" ? "Frances Jamie's Page" : "Francis James's Page"}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <SunnyIcon />
            <Switch
                checked={mode === 'dark'}
                onChange={(event) => setMode(event.target.checked ? 'dark' : 'light')}
                color="default"
            />
            <DarkModeIcon />
            </Box>
        </AppBar>
    );
}