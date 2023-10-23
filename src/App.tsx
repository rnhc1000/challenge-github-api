import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProfileNotFound from "./routes/ProfileNotFound";
import ProfileSearch from "./routes/ProfileSearch";

function App() {

  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/' element={<Home />}></Route>
            <Route path="404" element={<ProfileNotFound />}></Route>
            <Route path="search" element={<ProfileSearch />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
