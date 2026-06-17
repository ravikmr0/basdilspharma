type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 animate-fade-in">
      <p className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2 sm:mb-3">
        {eyebrow}
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-3 sm:mb-4 leading-tight">
        {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
