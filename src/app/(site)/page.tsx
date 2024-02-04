import { Button } from "@/components/ui/button"
import { TitleSection } from "@/components/landing-page/title-section"

export default function HomePage() {
  return (
    <section className="">
      <div className="mt-10 gap-4 overflow-hidden px-4 sm:flex sm:flex-col sm:px-6 md:items-center md:justify-center">
        <TitleSection
          pill="✨ Your workspace, perfected"
          title="All-in-one Collaborative Notes Taking Platform"
        />
        <Button>Get Docion</Button>
      </div>
    </section>
  )
}
