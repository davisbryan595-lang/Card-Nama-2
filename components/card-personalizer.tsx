"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star, Sparkles, Gift, Calendar, Users } from "lucide-react"

const cardTemplates = [
  {
    id: 1,
    name: "Romantic Blush",
    category: "Wedding",
    price: 24.99,
    image: "/elegant-wedding-card-design-with-floral-elements-a.jpg",
    colors: ["#FFE4E6", "#FDF2F8", "#FFFFFF"],
  },
  {
    id: 2,
    name: "Golden Elegance",
    category: "Anniversary",
    price: 22.99,
    image: "/elegant-golden-anniversary-card.jpg",
    colors: ["#FEF3C7", "#FFFBEB", "#F9FAFB"],
  },
  {
    id: 3,
    name: "Floral Dreams",
    category: "Birthday",
    price: 19.99,
    image: "/beautiful-floral-birthday-card.jpg",
    colors: ["#F3E8FF", "#FDF4FF", "#FFFFFF"],
  },
  {
    id: 4,
    name: "Modern Minimalist",
    category: "Thank You",
    price: 18.99,
    image: "/modern-minimalist-thank-you-card.jpg",
    colors: ["#F0F9FF", "#FFFFFF", "#F8FAFC"],
  },
]

const occasions = [
  { icon: Heart, name: "Wedding", color: "text-rose-500" },
  { icon: Gift, name: "Birthday", color: "text-purple-500" },
  { icon: Star, name: "Anniversary", color: "text-yellow-500" },
  { icon: Sparkles, name: "Thank You", color: "text-blue-500" },
  { icon: Calendar, name: "Holiday", color: "text-green-500" },
  { icon: Users, name: "Celebration", color: "text-pink-500" },
]

export function CardPersonalizer() {
  const [selectedTemplate, setSelectedTemplate] = useState(cardTemplates[0])
  const [selectedOccasion, setSelectedOccasion] = useState("Wedding")
  const [personalization, setPersonalization] = useState({
    recipientName: "",
    senderName: "",
    message: "",
    font: "elegant",
    color: "#1F2937",
  })

  const handleAddToCart = () => {
    const cartItem = {
      id: `custom-${Date.now()}`,
      name: `Custom ${selectedTemplate.name}`,
      price: selectedTemplate.price,
      image: selectedTemplate.image,
      personalization,
      occasion: selectedOccasion,
      quantity: 1,
    }

    // Get existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
    const updatedCart = [...existingCart, cartItem]
    localStorage.setItem("cart", JSON.stringify(updatedCart))

    // Dispatch custom event to update cart count
    window.dispatchEvent(new CustomEvent("cartUpdated"))

    alert("Custom card added to cart!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Create Your Perfect Card</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Design a personalized greeting card that captures your unique message and style
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Card Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Preview</h2>
              <div className="relative">
                <img
                  src={selectedTemplate.image || "/placeholder.svg"}
                  alt={selectedTemplate.name}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 text-center max-w-xs">
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      {personalization.recipientName || "Recipient Name"}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      {personalization.message || "Your personalized message will appear here..."}
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      From: {personalization.senderName || "Your Name"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedTemplate.name}</h3>
                  <p className="text-gray-600">{selectedOccasion} Card</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">${selectedTemplate.price}</p>
                  <Badge variant="secondary" className="mt-1">
                    Custom Design
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Panel */}
          <div className="space-y-6">
            {/* Occasion Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Choose Occasion</h3>
                <div className="grid grid-cols-3 gap-3">
                  {occasions.map((occasion) => {
                    const Icon = occasion.icon
                    return (
                      <button
                        key={occasion.name}
                        onClick={() => setSelectedOccasion(occasion.name)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          selectedOccasion === occasion.name
                            ? "border-rose-300 bg-rose-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <Icon className={`w-6 h-6 mx-auto mb-2 ${occasion.color}`} />
                        <p className="text-sm font-medium text-gray-700">{occasion.name}</p>
                      </button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Template Selection */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Template</h3>
                <div className="grid grid-cols-2 gap-4">
                  {cardTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template)}
                      className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                        selectedTemplate.id === template.id
                          ? "border-rose-300 ring-2 ring-rose-200"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={template.image || "/placeholder.svg"}
                        alt={template.name}
                        className="w-full h-24 object-cover"
                      />
                      <div className="p-2">
                        <p className="text-sm font-medium text-gray-900">{template.name}</p>
                        <p className="text-xs text-gray-600">${template.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personalization */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalize Your Card</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Name</label>
                    <Input
                      value={personalization.recipientName}
                      onChange={(e) =>
                        setPersonalization((prev) => ({
                          ...prev,
                          recipientName: e.target.value,
                        }))
                      }
                      placeholder="Enter recipient's name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <Textarea
                      value={personalization.message}
                      onChange={(e) =>
                        setPersonalization((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder="Write your heartfelt message..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <Input
                      value={personalization.senderName}
                      onChange={(e) =>
                        setPersonalization((prev) => ({
                          ...prev,
                          senderName: e.target.value,
                        }))
                      }
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Font Style</label>
                    <select
                      value={personalization.font}
                      onChange={(e) =>
                        setPersonalization((prev) => ({
                          ...prev,
                          font: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    >
                      <option value="elegant">Elegant Script</option>
                      <option value="modern">Modern Sans</option>
                      <option value="classic">Classic Serif</option>
                      <option value="playful">Playful Handwriting</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add to Cart */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-600">Total Price</p>
                  <p className="text-3xl font-bold text-gray-900">${selectedTemplate.price}</p>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Free Shipping
                </Badge>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Add Custom Card to Cart
              </Button>

              <p className="text-xs text-gray-500 text-center mt-3">
                ✨ Professional printing on premium cardstock • 5-7 business days delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
