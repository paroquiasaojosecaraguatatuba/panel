"use client";

import {
  Calendar,
  Church,
  Cog,
  Image,
  LifeBuoy,
  Menu,
  MessageSquare,
} from "lucide-react";
import { Logo } from "./Logo";
import * as Collapsible from "@radix-ui/react-collapsible";
import { NavItem } from "./NavItem";
import { Profile } from "./Profile";

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed top-0 right-0 left-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-brand-gradient py-4 data-[state=open]:bottom-0 lg:right-auto lg:border-r lg:py-8 lg:data-[state=closed]:bottom-0 lg:w-90">
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <button
            type="button"
            className="ml-auto rounded-md p-2 hover:cursor-pointer hover:bg-brand-700/30 focus-visible:ring-2 focus-visible:ring-brand-400 outline-none transition-colors"
          >
            <Menu className="h-6 w-6 text-brand-300" />
          </button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
