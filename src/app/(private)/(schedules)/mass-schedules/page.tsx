import { DevNoticeCard } from "@/components/DevNoticeCard";
import { Describe } from "@/components/Typographies/Describe";
import { Title } from "@/components/Typographies/Title";

export default function MassSchedules() {
  return (
    <>
      <Title>Horários de Missa</Title>

      <Describe>
        Gerencie os horários de missa da sua paróquia, adicione novos horários,
        edite informações existentes e mantenha os dados atualizados.
      </Describe>

      <div className="py-6">
        <DevNoticeCard />
      </div>
    </>
  );
}
