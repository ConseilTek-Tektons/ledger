export const rbacConfig = {
  roles: {
    owner: { label: "Owner", description: "Full control of security, policy, and workspace data." },
    admin: { label: "Admin", description: "Manages configuration, integrations, identities, and access." },
    billing_admin: { label: "Billing administrator", description: "Owns versioned product and price catalogue and subscription lifecycle and proration." },
    billing_analyst: { label: "Billing analyst", description: "Operates authorised subscription workflows and records." },
    viewer: { label: "Viewer", description: "Reads permitted operational data." },
    auditor: { label: "Auditor", description: "Reads immutable history, controls, and evidence." },
  },
  permissions: {
    "dashboard.view": "View operational dashboard",
    "subscription.manage": "Create and update subscription records",
    "workflow.approve": "Approve controlled workflow transitions",
    "reports.view": "View operational reports",
    "sensitive.export": "Export sensitive workspace data",
    "assistant.ask": "Ask the Ledger knowledge guide",
    "audit.view": "Read audit history",
    "access.manage": "Configure roles and identity mappings",
    "settings.manage": "Manage workspace settings and integrations",
  },
  rolePermissions: {
    owner: ["*"], admin: ["*"],
    billing_admin: ["dashboard.view", "subscription.manage", "workflow.approve", "reports.view", "assistant.ask", "audit.view"],
    billing_analyst: ["dashboard.view", "subscription.manage", "reports.view", "assistant.ask"],
    viewer: ["dashboard.view", "reports.view"], auditor: ["dashboard.view", "reports.view", "audit.view"],
  } as Record<string, readonly string[]>,
  identityGroupMappings: {
    "ledger-owners": "owner", "ledger-admins": "admin",
    "ledger-managers": "billing_admin", "ledger-operators": "billing_analyst",
    "ledger-viewers": "viewer", "internal-audit": "auditor",
  } as Record<string, string>,
  defaultRole: "viewer",
};
