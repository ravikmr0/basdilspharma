type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  asH1?: boolean;
  tone?: 'light' | 'dark';
};

export function SectionHeading({ eyebrow, title, description, asH1 = false, tone = 'light' }: SectionHeadingProps) {
  const HeadingTag = asH1 ? 'h1' : 'h2';
  const isDark = tone === 'dark';

  return (
    <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4 animate-fade-in">
      <p className={`text-xs sm:text-sm font-bold uppercase tracking-[0.18em] mb-2 sm:mb-3 ${isDark ? 'text-secondary-200' : 'text-primary-700'}`}>
        {eyebrow}
      </p>
      <HeadingTag className={`text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-3 sm:mb-4 leading-tight ${isDark ? 'text-white' : 'text-primary-950'}`}>
        {title}
      </HeadingTag>
      <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? 'text-primary-100' : 'text-slate-600'}`}>
        {description}
      </p>
    </div>
  );
}
