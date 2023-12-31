import "./App.css";

import PWAPrompt from "./components/AddToHomeScreen/PWAPrompt"
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SingleHadithPage from "./pages/singleHadithPage/SingleHadithPage";
import Footer from "./components/footer/Footer";
import Collections from "./pages/collections/Collections";
import Favourites from "./pages/favourites/Favourites";
import Settings from "./pages/settings/Settings";
import { HadithContextProvider } from "./store/AppContext";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/hadith/:book/:id",
          element: <SingleHadithPage />,
        },
        {
          path: "/collections",
          element: <Collections />,
        },
        {
          path: "/favourites",
          element: <Favourites />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
      ],
    },
  ]);

  return (
    <HadithContextProvider>
      <PWAPrompt />
      <RouterProvider router={router} />
    </HadithContextProvider>
  );
}

export default App;
