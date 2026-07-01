import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Account Setup & Management",
    icon: Terminal,
    skills: [
      "Noon Account Setup",
      "Account Management",
      "Brand Approval",
      "LLC Formation",
      "Business Verification",
      "Account Health Management",
    ],
  },
  {
    name: "Product Listings",
    icon: Layout,
    skills: [
      "Product Listing",
      "Listing Optimization",
      "SEO Optimization",
      "Variation Listings",
      "Image Optimization",
      "Content Enhancement",
    ],
  },
  {
    name: "Sales & Marketing",
    icon: Code,
    skills: [
      "Sales Bootup Strategies",
      "Pricing Strategy",
      "Promotions & Campaigns",
      "Product Visibility",
      "Buy Box Optimization",
      "Competitor Analysis",
    ],
  },
  {
    name: "Inventory & Operations",
    icon: Database,
    skills: [
      "Inventory Management",
      "Order Management",
      "Stock Planning",
      "Returns Handling",
      "Performance Monitoring",
    ],
  },
  {
    name: "Analytics & Growth",
    icon: Cpu,
    skills: [
      "Sales Analytics",
      "Keyword Research",
      "Performance Reports",
      "Conversion Optimization",
      "Business Growth Strategy",
    ],
  },
  {
    name: "Seller Support",
    icon: Palette,
    skills: [
      "Marketplace Consultation",
      "Store Optimization",
      "Product Launch Strategy",
      "Seller Training",
      "Customer Support",
    ],
  },
];