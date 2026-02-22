import { create } from "zustand";

type FileState = "progress" | "complete" | "error";

type FileItem = {
  file: File;
  state: FileState;
  id: string;
  attachmentId?: string;
  error?: string;
  progress?: number;
};

interface FileInputStore {
  files: FileItem[];
  addFiles: (newFiles: FileItem[], multiple: boolean) => void;
  updateFile: (id: string, partial: Partial<FileItem>) => void;
  removeFile: (id: string) => void;
  resetFiles: () => void;
}

export const useFileInputStore = create<FileInputStore>((set) => ({
  files: [],
  addFiles: (newFiles, multiple) =>
    set((state) => ({
      files: multiple ? [...state.files, ...newFiles] : newFiles,
    })),
  updateFile: (id, partial) =>
    set((state) => ({
      files: state.files.map((f) => (f.id === id ? { ...f, ...partial } : f)),
    })),
  removeFile: (id) =>
    set((state) => ({
      files: state.files.filter((f) => f.id !== id),
    })),
  resetFiles: () => set({ files: [] }),
}));
