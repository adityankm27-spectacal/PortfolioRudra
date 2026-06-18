export default function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 border-b border-line pb-5">
      <div>
        <p className="eyebrow mb-3 flex items-center gap-2 text-red">
          <span className="h-1.5 w-1.5 rounded-full bg-red" />
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl uppercase leading-none tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      <span className="font-display text-2xl text-line sm:text-4xl">{index}</span>
    </div>
  );
}
