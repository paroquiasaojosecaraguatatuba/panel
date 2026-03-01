"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";
import { AddChurchDialog } from "../Dialogs/AddChurchDialog";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-brand-200/50">
        <TabItem
          value="tab1"
          title="Igrejas"
          isSelected={currentTab === "tab1"}
        />
        <TabItem
          value="tab2"
          title="Autoridades"
          isSelected={currentTab === "tab2"}
        />
        <TabItem
          value="tab3"
          title="Pastorais"
          isSelected={currentTab === "tab3"}
        />
        <TabItem
          value="tab4"
          title="Sobre a Paróquia"
          isSelected={currentTab === "tab4"}
        />
        <TabItem
          value="tab5"
          title="Sobre o Padroeiro"
          isSelected={currentTab === "tab5"}
        />
        <TabItem
          value="tab6"
          title="Secretaria"
          isSelected={currentTab === "tab6"}
        />
        <TabItem
          value="tab7"
          title="Redes Sociais"
          isSelected={currentTab === "tab7"}
        />
        <TabItem
          value="tab8"
          title="Contas Bancárias"
          isSelected={currentTab === "tab8"}
        />
      </Tabs.List>

      <div className="grid grid-cols-card gap-6 py-6">
        <Tabs.Content value="tab1" tabIndex={-1}>
          <AddChurchDialog />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
