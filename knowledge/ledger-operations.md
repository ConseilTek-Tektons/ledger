# Ledger operations knowledge

## Usage rating

Metering uses idempotency keys and exact decimal arithmetic across tiered, volume, package, and stairstep models.

Every charge explains the source events, price version, quantity calculation, and rounding policy.

## Subscription proration

Mid-cycle changes split service periods at exact effective instants and apply the contracted proration convention.

Preview and committed results use the same pure calculation module.

## Revenue schedule

Invoice lines map to performance obligations and dated recognition schedules.

Schedules reconcile to billed, unbilled, deferred, and recognised control accounts without model-generated amounts.

## Product boundary

Ledger does not process payments, store card data, calculate tax, file returns, or provide network fraud scoring. Keep a regulated processor and tax service.
