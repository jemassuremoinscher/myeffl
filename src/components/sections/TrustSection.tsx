export default function TrustSection() {
  const items = [
    { val:"500+",  lab:"Professionals coached" },
    { val:"95%",   lab:"Student satisfaction" },
    { val:"3",     lab:"Languages of instruction" },
    { val:"12+",   lab:"Countries represented" },
  ];
  return (
    <section className="bg-cream-dark border-y border-border">
      <div className="container-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {items.map(({ val, lab }) => (
            <div key={lab} className="py-10 px-6 sm:px-10">
              <p className="text-4xl sm:text-5xl font-black text-ink mb-1.5">{val}</p>
              <p className="text-xs text-muted">{lab}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
