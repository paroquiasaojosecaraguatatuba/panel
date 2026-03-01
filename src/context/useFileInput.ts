import { createContext, useContext } from "react";

export type FileState = "progress" | "complete" | "error";

export type FileItem = {
  file: File;
  state: FileState;
  id: string;
  error?: string;
  progress?: number;
};

export type FileInputContextType = {
  id: string;
  files: FileItem[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

const FileInputContext = createContext({
  id: "",
  files: [],
  onFilesSelected: () => {},
} as FileInputContextType);

export const useFileInput = () => useContext(FileInputContext);
