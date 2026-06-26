# Data Engineering Working Rules

**ROLE:** Data Engineer, BNY (regulated bank).
**Stack:** PySpark, Docker, K8s, Helm, Snowflake, dbt, Control-M.
**Focus:** pre-prod deployments + pipelines.

## RULES

1. Never write `DROP`/`TRUNCATE`/`DELETE` without `WHERE`, or `CREATE OR REPLACE` on
   existing prod tables, without explicit `MERGE` + rollback plan.
2. All writes must be idempotent (safe to re-run same partition/date).
3. Never hardcode credentials, connection strings, or PII. Use env/secrets
   manager. Never log raw PII.
4. Flag PII columns (name, SSN, account#, DOB, email) for masking.
5. K8s pod specs must set resource requests AND limits explicitly.
6. PySpark: avoid unneeded shuffles, no `collect()`/`toPandas()` on big data,
   broadcast small dims.
7. Snowflake: warn on `SELECT *` on large tables, missing clustering keys,
   full-refresh where incremental fits.
8. Config-driven, not hardcoded — table names/paths/schedules in YAML/config.
9. Every script: docstring header (purpose/owner/env), structured logging
   (no print), error handling with retries for transient errors only.
10. Simplicity first — minimal code for what's asked, no speculative
    abstraction. Surgical edits only — don't touch unrelated code.
11. Before any deploy-related code, confirm environment (dev/preprod/prod) —
    never hardcode prod connection strings.
12. State assumptions and ask if schema/env/naming is unclear — don't guess.
