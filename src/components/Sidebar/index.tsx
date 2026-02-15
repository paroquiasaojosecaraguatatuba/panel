import {
  Calendar,
  Church,
  Cog,
  Images,
  LifeBuoy,
  SquareStack,
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r bg-brand-900 border-zinc-200 px-5 py-8">
      <Logo />

      <nav className="space-y-0.5">
        <NavItem title="Paróquia" icon={Church} />
        <NavItem title="Agenda" icon={Calendar} />
        <NavItem title="Blog" icon={SquareStack} />
        <NavItem title="Galeria" icon={Images} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <div className="h-px bg-brand-700" />

        <Profile />
      </div>
    </aside>
  );
}
