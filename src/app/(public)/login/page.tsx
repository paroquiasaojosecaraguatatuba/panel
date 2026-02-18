import Button from "@/components/Button";
import { Input } from "@/components/Form/Input";
import { Describe } from "@/components/Typographies/Describe";
import { Lock, Mail } from "lucide-react";
import Image from "next/image";

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

        <form className="w-full">
          <div className="flex flex-col gap-3 pb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-brand-800"
            >
              Email
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-brand-300" />
              </Input.Prefix>
              <Input.Control id="email" type="text" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pb-5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-brand-800"
            >
              Senha
            </label>
            <Input.Root>
              <Input.Prefix>
                <Lock className="h-5 w-5 text-brand-300" />
              </Input.Prefix>
              <Input.Control id="password" type="password" />
            </Input.Root>
          </div>

          <Button type="submit" className="w-full mt-4">
            Entrar
          </Button>
        </form>
      </div>
    </main>
  );
}
