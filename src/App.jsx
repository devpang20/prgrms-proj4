import { Navigate, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage"
import WritePage from "./pages/WritePage"
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="*" element={<Navigate to="/list" />}/>
      </Routes>
    </>
  )
}

export default App
