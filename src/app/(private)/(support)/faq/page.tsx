import { DevNoticeCard } from "@/components/DevNoticeCard";
import { Describe } from "@/components/Typographies/Describe";
import { Title } from "@/components/Typographies/Title";

export default function Faq() {
  return (
    <>
      <Title>Perguntas Frequentes (FAQ)</Title>

      <Describe>
        Encontre respostas para as perguntas mais comuns sobre o uso do painel
        de controle.
      </Describe>

      <div className="py-6">
        <DevNoticeCard />
      </div>
    </>
  );
}
