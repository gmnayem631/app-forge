import { useState } from "react";
import { InstallContext } from "./InstallContext";

export const InstallProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState(() => {
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
  });

  const installApp = (app) => {
    const updated = [...installedApps, app];
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  const uninstallApp = (id) => {
    const updated = installedApps.filter((a) => a.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
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
