import { createBrowserRouter, RouterProvider, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home.tsx";
import News from "./pages/News.tsx";
import Contact from "./pages/Contact.tsx";

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <Outlet /> 
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { path: "/", element: <Home /> },
      { path: "/news", element: <News /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

