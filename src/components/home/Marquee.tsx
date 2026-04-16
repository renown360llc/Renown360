import { cn } from "@/lib/utils";

const row1 = [
  { name: "AWS",          color: "#FF9900", bg: "#FF990015" },
  { name: "Microsoft Azure", color: "#0078D4", bg: "#0078D415" },
  { name: "Google Cloud", color: "#4285F4", bg: "#4285F415" },
  { name: "SAP S/4HANA",  color: "#0070F2", bg: "#0070F215" },
  { name: "Salesforce",   color: "#00A1E0", bg: "#00A1E015" },
  { name: "Databricks",   color: "#FF3621", bg: "#FF362115" },
  { name: "Snowflake",    color: "#29B5E8", bg: "#29B5E815" },
  { name: "Kubernetes",   color: "#326CE5", bg: "#326CE515" },
  { name: "Oracle EBS",   color: "#C74634", bg: "#C7463415" },
  { name: "Terraform",    color: "#7B42BC", bg: "#7B42BC15" },
  { name: "HubSpot",      color: "#FF7A59", bg: "#FF7A5915" },
  { name: "ServiceNow",   color: "#81B5A1", bg: "#81B5A115" },
];

const row2 = [
  { name: "Java / Spring", color: "#5382A1", bg: "#5382A115" },
  { name: "Python",        color: "#3776AB", bg: "#3776AB15" },
  { name: "Docker",        color: "#2496ED", bg: "#2496ED15" },
  { name: "Power BI",      color: "#F2C811", bg: "#F2C81115" },
  { name: "Tableau",       color: "#E97627", bg: "#E9762715" },
  { name: "MuleSoft",      color: "#00A1DF", bg: "#00A1DF15" },
  { name: "dbt",           color: "#FF694B", bg: "#FF694B15" },
  { name: "Apache Spark",  color: "#E25A1C", bg: "#E25A1C15" },
  { name: "GitHub Actions",color: "#2088FF", bg: "#2088FF15" },
  { name: "OpenAI",        color: "#10A37F", bg: "#10A37F15" },
  { name: "Workday",       color: "#F5A623", bg: "#F5A62315" },
  { name: "Dell Boomi",    color: "#00B2A9", bg: "#00B2A915" },
];

function LogoPill({
  name,
  color,
  bg,
}: {
  name: string;
  color: string;
  bg: string;
}) {
  return (
    <div
      className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border mx-2 shrink-0 select-none"
      style={{
        backgroundColor: bg,
        borderColor: `${color}30`,
      }}
    >
      {/* Colour dot */}
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof row1;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div className={cn(reverse ? "marquee-track-reverse" : "marquee-track")}>
        {doubled.map((item, i) => (
          <LogoPill key={`${item.name}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export function Marquee() {
  return (
    <section
      id="marquee"
      className="py-12 bg-neutral-900 border-y border-neutral-800 overflow-hidden space-y-3"
    >
      <div className="text-center mb-5">
        <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500">
          Certified expertise across every major enterprise platform
        </p>
      </div>
      <MarqueeRow items={row1} />
      <MarqueeRow items={row2} reverse />
    </section>
  );
}
