"use client";

import { Church, X as CloseIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as FileInput from "@/components/Form/FileInput";
import { AddCard } from "../AddCard";

import "./styles.css";

export const AddChurchDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="outline-none focus-visible:ring-4 focus-visible:ring-offset-1 focus-visible:ring-brand-100 rounded-xl">
        <AddCard
          title="Adicione uma igreja"
          subtitle="para
            gerenciar a programação e as informações de cada comunidade da
            paróquia."
          icon={Church}
        />
      </Dialog.Trigger>

      <Dialog.Overlay className="dialog-overlay" />

      <Dialog.Portal>
        <Dialog.Content className="mw-80 focus-visible:outline-none dialog-content">
          <Dialog.Title className="text-lg font-semibold border-b border-zinc-200 p-4">
            Adicionar Igreja
          </Dialog.Title>

          <div className="p-4">
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="p-4 flex gap-3 justify-end items-center border-t border-zinc-200">
            <Dialog.Close
              type="button"
              className="cursor-pointer rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-brand-0 hover:border-brand-300 outline-none focus-visible:ring-4 focus-visible:ring-brand-100 focus-visible:ring-offset-1"
            >
              Cancelar
            </Dialog.Close>
            <Dialog.Close
              type="submit"
              className="cursor-pointer rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-900 outline-none focus-visible:ring-4 focus-visible:ring-brand-100 focus-visible:ring-offset-1"
            >
              Salvar Alterações
            </Dialog.Close>
          </div>

          <Dialog.Close className="group rounded-full w-7 h-7 absolute top-4 right-4 bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-0 hover:ring-1 hover:ring-brand-300 cursor-pointer transition-colors outline-none focus-visible:ring-4 focus-visible:ring-brand-100 focus-visible:ring-offset-1">
            <CloseIcon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-500" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
