import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/romantic-couple-holding-beautiful-greeting-cards--.jpg"
          alt="Romantic couple with greeting cards"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Create Beautiful Cards for Your <span className="text-primary">Special Moments</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
          Personalized greeting cards that capture the essence of your love story. Perfect for weddings, anniversaries,
          and every celebration in between.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
            Request Free Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white/20 px-8 py-3 text-lg"
          >
            Shop Cards
          </Button>
          <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
            Book Now
          </Button>
        </div>
      </div>
    </section>
  )
}
