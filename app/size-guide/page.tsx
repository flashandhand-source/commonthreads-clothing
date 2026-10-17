export const metadata = {
  title: "Size Guide | Commonthreads Clothing",
};

const hatSizes = [
  { size: "One Size (Adjustable)", fit: "22\" – 24\" head circumference", note: "Fits most adults, snapback/strap closure" },
];

const teeSizes = [
  { size: "S", chest: "34\" – 36\"", length: "27\"" },
  { size: "M", chest: "38\" – 40\"", length: "28\"" },
  { size: "L", chest: "42\" – 44\"", length: "29\"" },
  { size: "XL", chest: "46\" – 48\"", length: "30\"" },
  { size: "XXL", chest: "50\" – 52\"", length: "31\"" },
];

export default function SizeGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Reference
      </p>
      <h1 className="font-display mt-2 text-4xl text-black sm:text-5xl">
        SIZE GUIDE
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        General fit reference for Commonthreads hats and tees. Confirm exact
        measurements before your first order — we&apos;ll update these once
        final spec sheets are in.
      </p>

      <div className="mt-10">
        <h2 className="font-display text-2xl text-black">HATS</h2>
        <div className="mt-4 overflow-hidden rounded-lg border border-black/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-black text-cream">
              <tr>
                <th className="px-4 py-3 font-semibold">Size</th>
                <th className="px-4 py-3 font-semibold">Fit</th>
                <th className="px-4 py-3 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {hatSizes.map((row) => (
                <tr key={row.size} className="odd:bg-cream-dark/40">
                  <td className="px-4 py-3 font-medium">{row.size}</td>
                  <td className="px-4 py-3">{row.fit}</td>
                  <td className="px-4 py-3 text-ink/70">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-2xl text-black">TEES</h2>
        <div className="mt-4 overflow-hidden rounded-lg border border-black/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-black text-cream">
              <tr>
                <th className="px-4 py-3 font-semibold">Size</th>
                <th className="px-4 py-3 font-semibold">Chest</th>
                <th className="px-4 py-3 font-semibold">Length</th>
              </tr>
            </thead>
            <tbody>
              {teeSizes.map((row) => (
                <tr key={row.size} className="odd:bg-cream-dark/40">
                  <td className="px-4 py-3 font-medium">{row.size}</td>
                  <td className="px-4 py-3">{row.chest}</td>
                  <td className="px-4 py-3">{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-ink/50">
          Measurements are garment measurements, laid flat. Placeholder
          figures — swap in your supplier&apos;s real spec sheet when
          available.
        </p>
      </div>
    </div>
  );
}
