import { createBrowserRouter, RouterProvider } from "react-router";
import ContentContextProvider from "./context/content-context";

import HomePage from "./pages/HomePage";
import RootLayout from "./RootLayout";
import GalleryPage from "./pages/GalleryPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectPage from "./pages/ProjectPage";
import AboutMePage from "./pages/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "art", element: <GalleryPage /> },
      { path: "about-me", element: <AboutMePage /> },
      { path: "projects/:proId", element: <ProjectDetailPage /> },
      { path: "projects", element: <ProjectPage /> },
    ],
  },
]);

function App() {
  return (
    <ContentContextProvider>
      <RouterProvider router={router} />
    </ContentContextProvider>
  );
}

export default App;
