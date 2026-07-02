
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Noon Account Management A-Z",
    description: "",
    image: "./imgs/sajid project 1.jpeg",
    tags: ["Product Listing","SEO Optimization","Inventory Management", "Order & Customer Support", "Sales Growth", ],
    links: {
      github: "",
      live: "/imgs/sajid project 1.jpeg",
    },
  },
  {
    id: 2,
    title: "Noon Seller Account Setup",
    description: "",
    image: "./imgs/sajid project 2.jpeg",
    tags: ["Business Registration", "Trade Licence", "VAT Registration","Document Verification", "Seller Account Activation",],
    links: {
      github: "",
      live: "/imgs/sajid project 2.jpeg",
    },
  },
  {
    id: 3,
    title: "Noon Brand Approvals",
    description: "",
    image: "./imgs/sajid project 3.jpeg",
    tags: ["Trade Mark Verification", "Invoice Verification", "Brand Authorization", "Documentation support", "Fast Approval Process", "Affordable Price", ],
    links: {
      github: "",
      live: "/imgs/sajid project 3.jpeg",
    },
  }
];
