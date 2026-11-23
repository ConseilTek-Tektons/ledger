import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "ledger",
  name: "Ledger",
  category: "Revenue",
  tagline: "Billing logic you own, on the processor you already use.",
  description: "A subscription-billing platform for catalogues, metering, rating, invoicing, dunning, and revenue schedules.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/ledger",
  nav: [
  {
    "label": "Customers",
    "badge": "4"
  },
  {
    "label": "Catalogue"
  },
  {
    "label": "Subscriptions"
  },
  {
    "label": "Invoices"
  },
  {
    "label": "Revenue"
  }
],
  demoUsers: [
    { id: "demo-admin", name: "Morgan Lee", email: "morgan@northstar.example", role: "admin", label: "Workspace administrator" },
    { id: "demo-manager", name: "Avery Brooks", email: "avery@northstar.example", role: "billing_admin", label: "Billing administrator" },
    { id: "demo-operator", name: "Jordan Patel", email: "jordan@northstar.example", role: "billing_analyst", label: "Billing analyst" },
  ],
  ai: {
    name: "Ledger knowledge guide",
    description: "Ask grounded questions about versioned product and price catalogue, subscription lifecycle and proration, idempotent usage metering and rating, or operating policy.",
    systemPrompt: "You are Ledger's grounded knowledge guide. Answer only from authorised workspace context and approved knowledge. Cite the supporting record or policy. Never mutate data, approve a workflow, or make a regulated decision.",
    suggestedQuestions: ["Explain usage rating.","Explain subscription proration.","Explain revenue schedule."],
  },
};
