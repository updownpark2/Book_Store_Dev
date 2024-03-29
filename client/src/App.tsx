import LayOut from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { BookStoreThemeProvider } from "./context/themeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";
import BookDetail from "./pages/BookDetail";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LayOut>
        <Home />
      </LayOut>
    ),
    errorElement: (
      <LayOut>
        <Error />
      </LayOut>
    ),
  },
  {
    path: "/books",
    element: (
      <LayOut>
        <Books />
      </LayOut>
    ),
  },
  {
    path: "/books/:bookId",
    element: (
      <LayOut>
        <BookDetail />
      </LayOut>
    ),
  },
  {
    path: "/signup",
    element: (
      <LayOut>
        <Signup />
      </LayOut>
    ),
  },
  {
    path: "/reset",
    element: (
      <LayOut>
        <ResetPassword />
      </LayOut>
    ),
  },
  {
    path: "/login",
    element: (
      <LayOut>
        <Login />
      </LayOut>
    ),
  },
]);

function App() {
  return (
    <>
      <BookStoreThemeProvider>
        <ThemeSwitcher />
        <RouterProvider router={router}></RouterProvider>
      </BookStoreThemeProvider>
    </>
  );
}

export default App;
