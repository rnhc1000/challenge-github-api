import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProfileNotFound from "./routes/ProfileNotFound";
import SearchProfile from "./routes/SearchProfile";
import ReturnProfile from "./routes/ReturnProfile";

function App() {

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="*" element={<ProfileNotFound />}></Route>
            <Route path="search" element={<SearchProfile />}></Route>
            <Route path="profile" element={<ReturnProfile />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
