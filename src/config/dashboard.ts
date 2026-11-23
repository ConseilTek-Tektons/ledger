import type { DashboardConfig } from "./dashboard-schema";
export type { DashboardItem } from "./dashboard-schema";

export const dashboard: DashboardConfig = {
  eyebrow: "REVENUE · OPERATIONS",
  heading: "Ledger keeps the operating record visible, governed, and ready for action.",
  summary: "Versioned product and price catalogue, Subscription lifecycle and proration, Idempotent usage metering and rating are backed by PostgreSQL records and explicit workflow history.",
  primaryAction: "Create subscription", secondaryAction: "Open workspace",
  secondaryNotice: "Workspace opened with current identity, role, and record filters.",
  managePermission: "subscription.manage", metricLabel: "Ledger operating health",
  metrics: [{"label":"Active subscriptions","value":"12,842","change":"+3.1%","context":"current workspace","tone":"positive","progress":"82%"},{"label":"Monthly bill run","value":"$3.42M","change":"9,184 invoices","context":"operational window","tone":"positive","progress":"76%"},{"label":"Metering accepted","value":"99.998%","change":"40M events","context":"current workspace","tone":"warning","progress":"91%"},{"label":"Deferred revenue","value":"$18.6M","change":"reconciled","context":"operational window","tone":"positive","progress":"96%"}],
  trend: [46,52,49,64,71,78,86].map((value, index) => ({ label: String(index), value })),
  listTitle: "Active subscriptions", workspaceAction: "Open governed workspace",
  items: [{"id":1,"primary":"LED-842 · Northstar · Enterprise annual","secondary":"Versioned product and price catalogue","tertiary":"Updated today","status":"Trial","accent":"violet"},{"id":2,"primary":"LED-831 · Acme · Usage expansion","secondary":"Subscription lifecycle and proration","tertiary":"Evidence current","status":"Active","accent":"lime"},{"id":3,"primary":"LED-820 · Globex · Regional price book","secondary":"Idempotent usage metering and rating","tertiary":"Updated today","status":"Past due","accent":"cyan"},{"id":4,"primary":"LED-809 · Initech · Renewal amendment","secondary":"Invoicing, credits, and dunning","tertiary":"Evidence current","status":"Renewing","accent":"lime"}],
  sideTitle: "Control posture", sideSubtitle: "Derived from workflow and evidence",
  sideItems: [
    { title: "Versioned product and price catalogue", detail: "Policy and evidence current", value: "Healthy" },
    { title: "Subscription lifecycle and proration", detail: "A small review queue needs attention", value: "Review", warning: true },
    { title: "Idempotent usage metering and rating", detail: "Within the configured operating target", value: "On track" },
  ],
  insightTitle: "Subscription lifecycle and proration has the clearest next action.",
  insightBody: "The recommendation is grounded in current subscription records, workflow events, and approved operating policy. It remains advisory until an authorised user acts.",
  insightNotice: "Recommendation opened with its supporting records and policy citations.",
  itemNoun: "Subscription", modalEyebrow: "NEW SUBSCRIPTION", modalTitle: "Add subscription",
  formFields: [
    { name: "title", label: "Subscription title", placeholder: "Northstar · Enterprise annual" },
    { name: "owner", label: "Owner", placeholder: "Billing analyst" },
    { name: "reference", label: "Reference", placeholder: "LED-843" },
  ],
  defaultSecondary: "Versioned product and price catalogue", defaultTertiary: "Created now", newItemStatus: "Draft",
  policyPreview: "The subscription inherits workspace visibility, requires subscription.manage, and records its creator and changes in the audit trail.",
  submitLabel: "Create subscription",
};
