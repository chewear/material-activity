import { useColorScheme, Container } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { customTheme } from "./theme/theme";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import ProfileMain from "./components/ProfileMain";

function App() {
  const { mode, setMode } = useColorScheme();
  const theme = createTheme(customTheme(mode));

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="false" disableGutters={true} >
        {/* App Bar */}
        <Header mode={mode} setMode={setMode} />

        {/* Content Container */}
        <Container maxWidth="md" sx={{ display:"flex", alignItems:"start", gap:"4rem", padding:"2rem", marginTop:"2rem" }}>

          {/* Profile Card - left side*/}
          <ProfileCard mode={mode}/>

          {/* User Information - right side*/}
          <ProfileMain mode={mode}/>
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
