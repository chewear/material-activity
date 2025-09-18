import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from "./App.jsx";

const themes = createTheme({
  colorSchemes : {
    dark: 'true',
  },
});

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <App />
    </ThemeProvider>
);


