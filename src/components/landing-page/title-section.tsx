interface TitleSectionProps {
  title: string
  subHeading?: string
  pill: string
}
export const TitleSection = ({
  pill,
  title,
  subHeading,
}: TitleSectionProps) => {
  return (
    <>
      <section className="flex flex-col items-start justify-center gap-4 md:items-center">
        <article className="rounded-full p-[1px] text-sm">
          <div className="rounded-full border px-3 py-1 dark:bg-black">
            {pill}
          </div>
        </article>
        {subHeading ? (
          <>
            <h2 className="text-left text-3xl font-semibold sm:max-w-[750px] sm:text-5xl md:text-center">
              {title}
            </h2>
            <p className="sm:max-w-[450px] md:text-center">{subHeading}</p>
          </>
        ) : (
          <h1 className="text-left text-4xl font-semibold sm:max-w-[850px] sm:text-6xl md:text-center">
            {title}
          </h1>
        )}
      </section>
    </>
  )
}
