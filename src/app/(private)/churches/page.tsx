import { AddCard } from "@/components/AddCard";
import { Describe } from "@/components/Typographies/Describe";
import { Title } from "@/components/Typographies/Title";
import { Church } from "lucide-react";
import Link from "next/link";

export default function Churches() {
  return (
    <>
      <Title>Igrejas</Title>

      <Describe>
        Gerencie as igrejas da sua paróquia, adicione novas igrejas, edite
        informações existentes e mantenha os dados atualizados.
      </Describe>

      <div className="grid grid-cols-card gap-6 py-6">
        <Link href="/churches/add">
          <AddCard
            title="Adicione uma igreja"
            subtitle="para
            gerenciar a programação e as informações de cada comunidade da
            paróquia."
            icon={Church}
          />
        </Link>
      </div>
    </>
  );
}
