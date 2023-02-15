import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../admin/pages/AdminHome";
import AdminProducts from "../admin/pages/AdminProducts";
import Profile from "../admin/pages/Profile";
import Users from "../admin/pages/Users";
import ProductDetails from "../components/shared/ProductDetails";
import Admin from "../layouts/Admin";
import Root from "../layouts/Root";
import Blogs from "../pages/Blogs";
import Cart from "../pages/Cart";
import Compare from "../pages/Compare";
import Contact from "../pages/Contact";
import Favorite from "../pages/Favorite";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import OurShop from "../pages/OurShop";
import Products from "../pages/Products";
import SignIn from "../pages/users/SignIn";
import SignUp from "../pages/users/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-shop", element: <OurShop /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products/:category", element: <Products /> },
      { path: "/product/:id", element: <ProductDetails /> },
      {
        path: "/compare-product",
        element: (
          <PrivateRoute>
            <Compare />
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist-product",
        element: (
          <PrivateRoute>
            <Favorite />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "admin",
    element: (
      <AdminRoute>
        <Admin />,
      </AdminRoute>
    ),
    children: [
      { path: "/admin", element: <AdminHome /> },
      { path: "products", element: <AdminProducts /> },
      { path: "users", element: <Users /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

export default router;
