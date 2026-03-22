import { useContext } from "react";
import { InstallContext } from "./InstallContext";

export const useInstall = () => useContext(InstallContext);
