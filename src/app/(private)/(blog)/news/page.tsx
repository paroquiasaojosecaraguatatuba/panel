import { DevNoticeCard } from "@/components/DevNoticeCard";
import { Describe } from "@/components/Typographies/Describe";
import { Title } from "@/components/Typographies/Title";

export default function News() {
  return (
    <>
      <Title>Notícias</Title>

      <Describe>
        Gerencie as notícias da sua paróquia, adicione novas notícias, edite
        informações existentes e mantenha os dados atualizados.
      </Describe>

      <div className="py-6">
        <DevNoticeCard />
      </div>
    </>
  );
}
