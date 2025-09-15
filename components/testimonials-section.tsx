"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah & Michael",
    occasion: "Wedding",
    rating: 5,
    text: "Cardnama created the most beautiful wedding invitations for us. The quality was exceptional and the personalization options were perfect for our special day.",
    image: "/happy-couple-portrait--wedding-photo-style--romant.jpg",
  },
  {
    name: "Emma & David",
    occasion: "Anniversary",
    rating: 5,
    text: "For our 10th anniversary, we wanted something special. The custom card we created captured our love story perfectly. Highly recommend!",
    image: "/mature-couple-smiling--anniversary-celebration--wa.jpg",
  },
  {
    name: "Jessica & Ryan",
    occasion: "Engagement",
    rating: 5,
    text: "The engagement announcement cards were stunning! Everyone loved the elegant design and the quality was outstanding. Thank you Cardnama!",
    image: "/young-couple-engagement-photo--happy-and-excited--.jpg",
  },
  {
    name: "Lisa & Mark",
    occasion: "Holiday",
    rating: 5,
    text: "Our holiday cards were a huge hit with family and friends. The customization process was so easy and the final result exceeded our expectations.",
    image: "/couple-in-winter-setting--holiday-theme--cozy-and-.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Couples Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real couples who chose Cardnama for their special moments
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Testimonial Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-foreground mb-4 italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].occasion}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
