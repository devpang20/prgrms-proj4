import { Navigate, Route, Routes } from "react-router-dom";
import History from "./pages/History"
import Main from "./pages/Main"
import Nav from "./components/Nav";
import { Button } from "@mui/material";

function App() {
  return (
    <>
      <Nav />
      <Button variant="contained">123</Button>
      <Routes>
        <Route path="/history" element={<History />} />
        <Route path="/main" element={<Main />} />
        <Route path="*" element={<Navigate to="/main" />}/>
      </Routes>
    </>
  )
}

export default App
