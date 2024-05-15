
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Outlet />
            <Link to="/1">1</Link>
          </>}>
            <Route index element={<h1>1</h1>} />
          </Route>

          <Route path="/1" element={<>
            <Outlet />
            <Link to="/2">2</Link>
          </>}>
            <Route index element={<h1>2</h1>} />
          </Route>

          <Route path="/2" element={<>
            <Outlet />
            <Link to="/">2</Link>
          </>}>
            <Route index element={<h1>3</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
