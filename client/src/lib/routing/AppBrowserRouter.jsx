import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../../pages/rootLayout/RootLayout";
import { CapturePage } from "../../pages/capturePage/CapturePage";
import { SettingsPage } from "../../pages/settingsPage/SettingsPage";

export const AppBrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <CapturePage />
      },
      {
        path: '/settings',
        element: <SettingsPage />
      }
    ]
  }
])