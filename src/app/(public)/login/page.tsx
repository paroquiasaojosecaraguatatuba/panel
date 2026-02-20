import { Describe } from "@/components/Typographies/Describe";
import Image from "next/image";
import { Form } from "./form";

export default function Login() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col gap-6 row-start-2 items-center justify-center max-w-96 w-full mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center border-b border-brand-100/60 pb-6">
          <Image
            src="/avatar.svg"
            alt="São José com o Menino Jesus"
            width={75}
            height={75}
            priority
          />
          <h1 className="text-2xl font-medium text-brand-900 mt-4">
            Acessar Painel
          </h1>
          <Describe>Jesus, Maria e José, a nossa família vossa é!</Describe>
        </div>

        <Form />
      </div>
    </main>
  );
}
