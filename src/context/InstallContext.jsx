import { useState } from "react";
import { InstallContext } from "./InstallContext";

export const InstallProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const installApp = (app) => {
    setInstalledApps((prev) => [...prev, app]);
  };

  const uninstallApp = (id) => {
    setInstalledApps((prev) => prev.filter((a) => a.id !== id));
  };

  const isInstalled = (id) => installedApps.some((a) => a.id === id);
  return (
    <InstallContext.Provider
      value={{ installedApps, installApp, uninstallApp, isInstalled }}
    >
      {children}
    </InstallContext.Provider>
  );
};
