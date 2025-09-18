import { AppBar,Typography, Box, Switch, useColorScheme, Container, Avatar } from "@mui/material"
import SunnyIcon from '@mui/icons-material/Sunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import UserInformation from "./components/UserInformation";
import Divider from '@mui/material/Divider';

function App() {
  const { mode, setMode } = useColorScheme();

  return (
    <Container maxWidth="false" disableGutters={true} >
      <AppBar position="static" sx={{ height:"4rem",display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:"0.5rem", paddingX:"1rem" }}>
        <Typography  variant="h5" sx={{ fontWeight:"bold" }}>Ikaru's Page</Typography>
         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <SunnyIcon />
          <Switch
            checked={mode === 'dark'}
            onChange={(event) => setMode(event.target.checked ? 'dark' : 'light')}
          />
          <DarkModeIcon />
        </Box>
      </AppBar>
      <Container maxWidth="md" sx={{ padding:"2rem", display:"flex", alignItems:"start", gap:"2rem" }}>
        <Box width="50%" height="100vh" sx={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jpGMzsnajYyh0_w__Qfo9L_xvxHeN3A3wQ&s"
            sx={{ width: "20rem", height: "20rem", border:"4px solid black" }}
          />
          <Typography variant="h5" textAlign="center" sx={{ fontWeight:"bold", marginTop:"1rem" }}>BERJUEGA, Francis James</Typography>
          <Typography variant="h6" textAlign="center" sx={{ marginTop:"0.5rem" }}>Full-Stack Developer</Typography>
        </Box>
        <Box width="50%">
          <Box>
            <Box sx={{ display:"flex", alignItems:"center", height:"2rem" }}>
              <Typography variant="h4" sx={{ fontWeight:"bold" }}>BERJUEGA</Typography>
              <LocationOnIcon sx={{ marginLeft:"1rem" }} />
              <Typography variant="h6">Bulacan</Typography>
            </Box>
            <Typography variant="h6">Full Stack Dev</Typography>
            <Rating name="read-only" value={10} max={10} readOnly />
          </Box>
          <Divider sx={{ marginY:"1rem" }}/>
         <UserInformation/>
        </Box>
      </Container>
    </Container>
  )
}

export default App
