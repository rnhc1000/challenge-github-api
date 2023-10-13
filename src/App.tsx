

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ProfileNotFound from "./routes/ProfileNotFound";
import SearchProfile from "./routes/SearchProfile";

function App() {

  return (
    <>
            <main>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path="*" element={<ProfileNotFound />}></Route>
                    <Route path="search" element={<SearchProfile />}></Route>
                </Routes>
            </BrowserRouter>

        </main>



    </>
  )
}

export default App
