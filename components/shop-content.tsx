"use client"

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Heart, Search } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: 1,
    title: "Elegant Wedding Invitation",
    category: "wedding",
    price: 24.99,
    originalPrice: 29.99,
    image: "/elegant-wedding-card-design-with-floral-elements-a.jpg",
    description: "Beautiful floral wedding invitation with elegant typography",
    rating: 5,
    reviews: 127,
    isNew: true,
  },
  {
    id: 2,
    title: "Anniversary Love Card",
    category: "anniversary",
    price: 18.99,
    originalPrice: null,
    image: "/romantic-anniversary-card-with-hearts-and-couple-s.jpg",
    description: "Romantic anniversary card perfect for celebrating milestones",
    rating: 5,
    reviews: 89,
    isNew: false,
  },
  {
    id: 3,
    title: "Birthday Celebration Card",
    category: "birthday",
    price: 16.99,
    originalPrice: 19.99,
    image: "/colorful-birthday-card-with-celebration-theme-and.jpg",
    description: "Vibrant birthday card with festive celebration design",
    rating: 4,
    reviews: 156,
    isNew: false,
  },
  {
    id: 4,
    title: "Holiday Wishes Card",
    category: "holiday",
    price: 21.99,
    originalPrice: null,
    image: "/festive-holiday-card-with-winter-theme-and-warm-c.jpg",
    description: "Festive holiday card with warm seasonal greetings",
    rating: 5,
    reviews: 203,
    isNew: true,
  },
  {
    id: 5,
    title: "Thank You Floral Card",
    category: "thank-you",
    price: 15.99,
    originalPrice: null,
    image: "/elegant-thank-you-card-with-botanical-elements-a.jpg",
    description: "Elegant thank you card with beautiful botanical elements",
    rating: 5,
    reviews: 94,
    isNew: false,
  },
  {
    id: 6,
    title: "Love Note Card Set",
    category: "love-notes",
    price: 32.99,
    originalPrice: 39.99,
    image: "/romantic-love-note-card-set-with-multiple-designs.jpg",
    description: "Set of 6 romantic love note cards for everyday expressions",
    rating: 5,
    reviews: 78,
    isNew: true,
  },
  {
    id: 7,
    title: "Vintage Wedding Card",
    category: "wedding",
    price: 26.99,
    originalPrice: null,
    image: "/vintage-style-wedding-card-with-classic-elegance-.jpg",
    description: "Vintage-inspired wedding card with timeless elegance",
    rating: 4,
    reviews: 112,
    isNew: false,
  },
  {
    id: 8,
    title: "Modern Anniversary Card",
    category: "anniversary",
    price: 19.99,
    originalPrice: 24.99,
    image: "/modern-minimalist-anniversary-card-with-geometric.jpg",
    description: "Modern minimalist anniversary card with geometric design",
    rating: 4,
    reviews: 67,
    isNew: false,
  },
]

const categories = [
  { value: "all", label: "All Categories" },
  { value: "wedding", label: "Wedding" },
  { value: "anniversary", label: "Anniversary" },
  { value: "birthday", label: "Birthday" },
  { value: "holiday", label: "Holiday" },
  { value: "thank-you", label: "Thank You" },
  { value: "love-notes", label: "Love Notes" },
]

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
]

export function ShopContent() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "newest":
          return b.isNew ? 1 : -1
        default:
          return 0
      }
    })

    return sorted
  }, [selectedCategory, sortBy, searchQuery])

  const handleAddToCart = (productId: number) => {
    console.log("Added to cart:", productId)
    // Add to cart functionality will be implemented in the cart functionality task
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">Shop Greeting Cards</h1>
        <p className="text-lg text-muted-foreground">
          Discover our beautiful collection of personalized greeting cards for every special occasion
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cards..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-muted-foreground">
          Showing {filteredAndSortedProducts.length} of {products.length} cards
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
                {product.originalPrice && <Badge variant="destructive">Sale</Badge>}
              </div>
              {/* Wishlist Button */}
              <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            {/* Product Info */}
            <CardContent className="p-4">
              <div className="mb-2">
                <Badge variant="outline" className="text-xs">
                  {categories.find((cat) => cat.value === product.category)?.label}
                </Badge>
              </div>

              <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xs ${i < product.rating ? "text-yellow-400" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={() => handleAddToCart(product.id)}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-lg text-foreground mb-2">No cards found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
          <Button
            onClick={() => {
              setSearchQuery("")
              setSelectedCategory("all")
              setSortBy("featured")
            }}
            variant="outline"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
