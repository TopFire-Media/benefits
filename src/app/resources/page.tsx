import type { Metadata } from "next";
import ResourceAllocation from "@/components/ResourceAllocation";
import ResourceNav from "@/components/ResourceNav";

export const metadata: Metadata = {
  title: "Dev Team Resource Allocation | TopFire Media",
  description:
    "Where the dev team's 120 weekly hours go — before, during, and after the transition to a modern React workflow.",
};

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#06060c" }}>
      <ResourceNav />
      <ResourceAllocation />
    </main>
  );
}
