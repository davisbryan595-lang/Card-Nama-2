import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutContent />
      <Footer />
    </main>
  )
}
