import { BackButton } from "@/components/BackButton";
import { Title } from "@/components/Typographies/Title";

import * as FileInput from "@/components/Form/FileInput";
import Button from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";

export default function AddChurch() {
  return (
    <>
      <BackButton href="/churches" />

      <Title>Adicionar Igreja</Title>

      <form
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-brand-100/60"
      >
        <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
          <label htmlFor="cover" className="text-md font-medium text-brand-800">
            Capa
            <span className="mt-0.5 block text-sm font-normal text-brand-800">
              Esta imagem será exibida publicamente.
            </span>
          </label>
          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.FileList />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
          <label
            htmlFor="name"
            className="text-sm font-medium text-brand-800 dark:text-zinc-300"
          >
            Nome da Comunidade
          </label>
          <Input.Root>
            <Input.Control id="name" type="text" />
          </Input.Root>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
          <label
            htmlFor="name"
            className="text-sm font-medium text-brand-800 dark:text-zinc-300"
          >
            Classificação
          </label>
          <Select placeholder="" defaultValue="chapel">
            <SelectItem value="chapel" text="Comunidade" defaultChecked />
            <SelectItem value="parish_church" text="Matriz" />
          </Select>
        </div>

        <div className="lg:grid-cols-form flex flex-col gap-3 pb-5 lg:grid">
          <label
            htmlFor="address"
            className="text-sm font-medium text-brand-800 dark:text-zinc-300"
          >
            Endereço
          </label>
          <Input.Root>
            <Input.Control id="address" type="text" />
          </Input.Root>
        </div>
      </form>

      <div className="lg:grid lg:grid-cols-form flex gap-3 pt-4 lg:justify-end items-center border-t border-brand-100/60">
        <div className="flex lg:justify-end col-start-2">
          <Button>Adicionar Igreja</Button>
        </div>
      </div>
    </>
  );
}
