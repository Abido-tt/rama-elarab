import * as React from "react"
import * as MenuPrimitive from "@radix-ui/react-menu"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const Menu = MenuPrimitive.Root
const MenuTrigger = MenuPrimitive.Trigger
const MenuContent = MenuPrimitive.Content
const MenuItem = MenuPrimitive.Item
const MenuItemIndicator = MenuPrimitive.ItemIndicator
const MenuSeparator = MenuPrimitive.Separator
const MenuLabel = MenuPrimitive.Label
const MenuGroup = MenuPrimitive.Group
const MenuSub = MenuPrimitive.Sub
const MenuSubTrigger = MenuPrimitive.SubTrigger
const MenuSubContent = MenuPrimitive.SubContent

export {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuItemIndicator,
  MenuSeparator,
  MenuLabel,
  MenuGroup,
  MenuSub,
  MenuSubTrigger,
  MenuSubContent,
  MenuPrimitive as MenuPrimitive
}