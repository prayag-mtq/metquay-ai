import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tabs } from "@/components/ui/Tabs";
import { roles } from "@/content/pages/home";
import { roleIcons } from "./icons";

export function RoleTabs() {
  const items = roles.items.map((role) => {
    const Icon = roleIcons[role.icon];
    return {
      id: role.id,
      label: role.label,
      icon: <Icon aria-hidden="true" className="size-4" />,
      panel: (
        <div className="mx-auto grid max-w-4xl gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-[1fr_1.3fr] md:p-10">
          <div>
            <p className="text-small font-semibold text-purple">{role.label}</p>
            <h3 className="mt-2 text-h3">{role.headline}</h3>
          </div>
          <ul className="space-y-4">
            {role.points.map((point) => (
              <li key={point} className="flex gap-3 text-body text-muted">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-lime" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      ),
    };
  });

  return (
    <Section id="roles" labelledBy="roles-title">
      <Container>
        <SectionHeader id="roles-title" eyebrow={roles.eyebrow} title={roles.title} lead={roles.lead} />
        <Tabs label="Roles" items={items} className="mt-10" />
      </Container>
    </Section>
  );
}
