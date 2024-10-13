// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
