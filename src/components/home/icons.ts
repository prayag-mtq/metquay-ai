import {
  BadgeCheck,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  Database,
  FileBadge,
  House,
  Layers,
  LayoutGrid,
  type LucideIcon,
  RefreshCw,
  ScanBarcode,
  ServerCog,
  ShieldCheck,
  Truck,
  UserCog,
  Users,
  Waypoints,
  WifiOff,
} from "lucide-react";

import type { ReasonIcon, RoleIcon, WorkflowIcon } from "@/content/pages/home";

export const workflowIcons: Record<WorkflowIcon, LucideIcon> = {
  portal: House,
  sales: ChartNoAxesCombined,
  scheduler: CalendarDays,
  assignment: UserCog,
  data: Database,
  certificate: FileBadge,
  shipping: Truck,
};

export const roleIcons: Record<RoleIcon, LucideIcon> = {
  managers: Users,
  quality: ShieldCheck,
  technicians: BadgeCheck,
  it: ServerCog,
  portfolio: LayoutGrid,
};

export const reasonIcons: Record<ReasonIcon, LucideIcon> = {
  ai: BrainCircuit,
  trace: Waypoints,
  offline: WifiOff,
  scan: ScanBarcode,
  erp: RefreshCw,
  workspace: Layers,
};
