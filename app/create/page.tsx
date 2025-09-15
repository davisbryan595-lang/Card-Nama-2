import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CardPersonalizer } from "@/components/card-personalizer"

export default function CreateCardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CardPersonalizer />
      <Footer />
    </main>
  )
}
