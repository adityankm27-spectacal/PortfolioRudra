import SectionHeading from "./SectionHeading";
import WorkGrid, { type WorkItem } from "./WorkGrid";
import { projects, workCategories } from "@/lib/content";
import { publicAssetExists } from "@/lib/asset";

// Placeholder gradients cycled per card until real screenshots are dropped in /public/images/work/.
const gradients = [
  "from-sky-900/70 via-ink-card to-ink",
  "from-amber-900/60 via-ink-card to-ink",
  "from-emerald-900/60 via-ink-card to-ink",
  "from-teal-900/60 via-ink-card to-ink",
  "from-orange-900/60 via-ink-card to-ink",
  "from-indigo-900/60 via-ink-card to-ink",
];

export default function Work() {
  // Resolve image existence server-side, then hand serializable data to the client grid.
  const items: WorkItem[] = projects.map((p, i) => ({
    ...p,
    hasImage: publicAssetExists(p.image),
    gradient: gradients[i % gradients.length],
  }));

  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow="The Work — Jo Kaam Kiya Hai"
        title="Selected Builds"
      />
      <WorkGrid items={items} categories={workCategories} />
    </section>
  );
}
