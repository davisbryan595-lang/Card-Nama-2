import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopContent } from "@/components/shop-content"

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ShopContent />
      <Footer />
    </main>
  )
}
