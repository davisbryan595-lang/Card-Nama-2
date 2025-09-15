import { Button } from "@/components/ui/button"
import { Palette, Type, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Palette,
    title: "Choose Your Design",
    description: "Select from hundreds of beautiful templates",
  },
  {
    icon: Type,
    title: "Add Your Message",
    description: "Personalize with your heartfelt words",
  },
  {
    icon: Heart,
    title: "Customize Colors",
    description: "Match your personal style and theme",
  },
  {
    icon: Sparkles,
    title: "Preview & Order",
    description: "See your creation before we print it",
  },
]

export function CreateCardSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Create Your Perfect Card
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our interactive design tool makes it easy to create personalized greeting cards that perfectly capture
              your feelings and style.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Creating Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/elegant-greeting-card-design-interface-showing-cus.jpg" alt="Card creation interface" fill className="object-cover" />
            </div>
            {/* Floating Card Preview */}
            <div className="absolute -bottom-6 -left-6 w-32 h-40 bg-card rounded-lg shadow-lg border border-border p-4">
              <div className="w-full h-full bg-primary/20 rounded flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
