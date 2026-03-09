import { createBrowserRouter, RouterProvider } from "react-router";
// import ContentContextProvider from "./context/content-context";

import HomePage from "@/pages/Home/HomePage";
import RootLayout from "@/RootLayout";
import GalleryPage from "@/pages/Gallery/GalleryPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage/ProjectDetailPage";
import ProjectsPage from "@/pages/ProjectsPage/ProjectsPage";
import ContactPage from "@/pages/Contact/Contact";
import IconSandbox from "@/pages/IconSandbox/IconSandbox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "art", element: <GalleryPage /> },
      { path: "projects/:proId", element: <ProjectDetailPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "icons", element: <IconSandbox /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
