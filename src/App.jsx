import { Navigate, Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage"
import WritePage from "./pages/WritePage"

function App() {
  return (
    <>
      <header>
        <a href="/list">리스트</a>
        /
        <a href="/write">작성</a>
      </header>
      {/* <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="*" element={<Navigate to="/list" />}/>
      </Routes> */}
    </>
  )
}

export default App
