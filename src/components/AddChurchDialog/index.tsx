"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Church, X as CloseIcon, UploadCloud } from "lucide-react";
import { AddCard } from "../AddCard";

import "./styles.css";

export const AddChurchDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-brand-400 rounded-xl">
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
            <div>
              <label
                htmlFor="photo"
                className="flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:ring-1 hover:ring-brand-300 hover:bg-brand-0/60"
              >
                <div className="rounded-full border-6 border-zinc-100 bg-zinc-200/50 p-2">
                  <UploadCloud className="h-5 w-5 text-zinc-600" />
                </div>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm">
                    <span className="font-semibold text-brand-700">
                      Clique para enviar
                    </span>{" "}
                    a foto da igreja
                  </span>
                  <span className="text-xs">
                    PNG, JPG ou JPEG (max. 1200x900px)
                  </span>
                </div>
              </label>

              <input type="file" className="sr-only" id="photo" />
            </div>
          </div>

          <div className="p-4 flex gap-3 justify-end items-center border-t border-zinc-200">
            <Dialog.Close
              type="button"
              className="cursor-pointer rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-brand-0 hover:border-brand-300 outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              Cancelar
            </Dialog.Close>
            <Dialog.Close
              type="submit"
              className="cursor-pointer rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-900 outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              Salvar Alterações
            </Dialog.Close>
          </div>

          <Dialog.Close className="group rounded-full w-7 h-7 absolute top-4 right-4 bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-brand-0 hover:ring-1 hover:ring-brand-300 cursor-pointer transition-colors outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2">
            <CloseIcon className="w-4 h-4 text-zinc-400 group-hover:text-zinc-500" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
