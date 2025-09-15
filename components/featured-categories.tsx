import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    title: "Wedding Cards",
    description: "Elegant designs for your special day",
    image: "/elegant-wedding-greeting-card-with-romantic-couple.jpg",
    href: "/shop?category=wedding",
  },
  {
    title: "Anniversary Cards",
    description: "Celebrate your love milestones",
    image: "/beautiful-anniversary-greeting-card-with-hearts-an.jpg",
    href: "/shop?category=anniversary",
  },
  {
    title: "Birthday Cards",
    description: "Make birthdays extra special",
    image: "/cheerful-birthday-greeting-card-with-celebration-e.jpg",
    href: "/shop?category=birthday",
  },
  {
    title: "Holiday Cards",
    description: "Seasonal greetings with love",
    image: "/festive-holiday-greeting-card-with-warm-colors-and.jpg",
    href: "/shop?category=holiday",
  },
  {
    title: "Thank You Cards",
    description: "Express gratitude beautifully",
    image: "/elegant-thank-you-greeting-card-with-floral-elemen.jpg",
    href: "/shop?category=thank-you",
  },
  {
    title: "Love Notes",
    description: "Sweet messages for everyday",
    image: "/romantic-love-note-card-with-couple-theme-and-soft.jpg",
    href: "/shop?category=love-notes",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of greeting cards for every special occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Link href={category.href}>
                  <Button variant="outline" className="w-full bg-transparent">
                    Explore Collection
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
