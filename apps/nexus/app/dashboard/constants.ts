import {
  HiCalendar,
  HiDocumentDuplicate,
  HiFolder,
  HiHome,
  HiUsers,
} from "react-icons/hi2";

export const navigation = [
  { name: "Dashboard", href: "#", icon: HiHome, current: true },
  { name: "Purchase Requests", href: "#", icon: HiCalendar, current: false },
  { name: "Purchase Orders", href: "#", icon: HiFolder, current: false },
  { name: "Invoices", href: "#", icon: HiUsers, current: false },
  { name: "Budgets", href: "#", icon: HiDocumentDuplicate, current: false },
];

export const org = [
  { id: 1, name: "Workflows", href: "#", initial: "W", current: false },
  { id: 2, name: "Cashflow", href: "#", initial: "C", current: false },
  { id: 3, name: "Vendors", href: "#", initial: "V", current: false },
  // { id: 3, name: "Budgets", href: "#", initial: "W", current: false },
];
export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
