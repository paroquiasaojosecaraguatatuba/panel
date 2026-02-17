"use client";

import {
  Calendar,
  Church,
  Cog,
  Image,
  LifeBuoy,
  MessageSquare,
} from "lucide-react";
import { Logo } from "./Logo";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r  border-zinc-200  py-8 bg-brand-gradient">
      <div className="px-6">
        <Logo />
      </div>

      <div className="h-px bg-brand-700/30" />

      <div className="space-y-0.5 px-4">
        <NavItem
          title="Paróquia"
          icon={Church}
          links={[
            {
              title: "Igrejas",
              href: "/churches",
            },
            {
              title: "Autoridades",
              href: "/autoridades",
            },
            {
              title: "Pastorais",
              href: "/pastorais",
            },
          ]}
        />
        <NavItem title="Agenda" icon={Calendar} links={[]} />
        <NavItem title="Blog" icon={MessageSquare} links={[]} />
        <NavItem title="Galeria" icon={Image} links={[]} />
      </div>

      <div className="mt-auto flex flex-col gap-6 ">
        <div className="h-px bg-brand-700/30" />

        <nav className="space-y-0.5 px-4">
          <NavItem title="Suporte" icon={LifeBuoy} links={[]} />
          <NavItem title="Configurações" icon={Cog} links={[]} />
        </nav>

        <div className="h-px bg-brand-700/30" />

        <div className="px-6">
          <Profile />
        </div>
      </div>
    </aside>
  );
}
