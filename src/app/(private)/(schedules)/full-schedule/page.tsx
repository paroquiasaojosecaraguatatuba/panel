import { DevNoticeCard } from "@/components/DevNoticeCard";
import { Describe } from "@/components/Typographies/Describe";
import { Title } from "@/components/Typographies/Title";

export default function FullSchedule() {
  return (
    <>
      <Title>Programação Completa</Title>

      <Describe>
        Consulte a programação completa da sua paróquia, desmarque ou adicione
        eventos, e mantenha a comunidade informada sobre as atividades e
        celebrações.
      </Describe>

      <div className="py-6">
        <DevNoticeCard />
      </div>
    </>
  );
}
