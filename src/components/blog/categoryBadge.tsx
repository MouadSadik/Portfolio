"use client"

import { Badge } from "@/components/ui/badge"

export function CategoryBadge({ title }: { title: string }) {
  return <Badge variant="destructive">{title}</Badge>
}
