const technologies = [
  "AWS", "Azure", "GCP", "SAP S/4HANA", "Salesforce", "Oracle EBS",
  "Kubernetes", "Terraform", "Databricks", "Snowflake", "Java", "Python",
  "React", "Node.js", "HubSpot", "MuleSoft", "Kafka", "OpenAI",
  "Tableau", "Power BI", "GitHub Actions", "ArgoCD",
];

export function Marquee() {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="bg-white border-y border-line py-8 overflow-hidden">
      <div className="container-wide mb-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 text-center">
          Enterprise technology expertise
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="mx-5 flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-surface text-sm font-medium text-ink/60 whitespace-nowrap shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
