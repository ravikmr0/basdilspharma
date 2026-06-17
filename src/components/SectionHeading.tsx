type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
      <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-6 leading-tight">
        {title}
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
