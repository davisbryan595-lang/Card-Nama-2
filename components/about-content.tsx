import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, Users, Award } from "lucide-react"
import Link from "next/link"

export function AboutContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Turning Moments Into Memories With Personalized Cards
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/couple-looking-at-greeting-cards-together-in-cozy-.jpg"
                alt="Couple looking at greeting cards"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-gray-900">How Cardnama Began</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cardnama was born from a simple belief: every special moment deserves a card as unique as the love it
                represents. Founded by a team of designers and romantics, we noticed that finding the perfect greeting
                card often meant settling for something close enough.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We set out to change that. Our mission is to make greeting cards more personal and memorable by giving
                you the power to create something truly yours. Whether it's a wedding, anniversary, birthday, or just
                because, we believe your card should tell your story.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to help thousands of couples and families create meaningful connections through
                beautifully personalized cards that capture their unique relationships and special moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Creativity</h3>
                <p className="text-gray-600">
                  We believe every card should be a work of art that reflects your unique style and personality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalization</h3>
                <p className="text-gray-600">
                  Your story is unique, and your cards should be too. We make personalization simple and beautiful.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality</h3>
                <p className="text-gray-600">
                  Premium materials and professional printing ensure your cards look and feel exceptional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Happiness</h3>
                <p className="text-gray-600">
                  Your joy is our success. We're here to make your card creation experience delightful.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <img
                src="/friendly-team-of-designers-working-on-greeting-car.jpg"
                alt="Cardnama team working together"
                className="w-full h-80 object-cover rounded-2xl shadow-xl mb-8"
              />
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                We're Here to Make Your Celebrations Special
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our passionate team of designers, writers, and customer care specialists work together to ensure every
                card you create brings joy to both you and your loved ones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-xl"
                >
                  <Link href="/contact">Request Free Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold px-8 py-3 rounded-xl bg-transparent"
                >
                  <Link href="/shop">Shop Cards Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
