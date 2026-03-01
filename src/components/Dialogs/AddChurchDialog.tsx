"use client";

import { Church, X as CloseIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as FileInput from "@/components/Form/FileInput";
import { AddCard } from "../AddCard";

import "./styles.css";
import Button from "../Button";

export const AddChurchDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="outline-none focus-visible:ring-4 focus-visible:ring-offset-1 focus-visible:ring-brand-100 rounded-xl">
        <AddCard
          title="Adicione uma igreja"
          subtitle="para gerenciar a programação e as informações de cada comunidade da paróquia."
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
            <Dialog.Close asChild>
              <Button variant="outline">Cancelar</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button>Salvar Alterações</Button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild className="absolute top-4 right-4">
            <Button variant="ghost">
              <CloseIcon className="w-4 h-4" />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
