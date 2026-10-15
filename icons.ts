import { BookOpen, CalendarDays, LayoutTemplate, Wrench, type LucideIcon } from "lucide-react";
import type { CategoryId } from "@/lib/products";

export const categoryIcons: Record<CategoryId, LucideIcon> = {
  templates: LayoutTemplate,
  "productivity-tools": Wrench,
  planners: CalendarDays,
  ebooks: BookOpen,
};
