import Link from "next/link"
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-playfair text-2xl font-bold">Cardnama</span>
            </div>
            <p className="text-background/80 mb-4">
              Creating beautiful, personalized greeting cards for life's most precious moments.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop" className="text-background/80 hover:text-primary transition-colors">
                  Shop Cards
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-background/80 hover:text-primary transition-colors">
                  Create Your Card
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=wedding" className="text-background/80 hover:text-primary transition-colors">
                  Wedding Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=anniversary"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Anniversary Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=birthday"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Birthday Cards
                </Link>
              </li>
              <li>
                <Link href="/shop?category=holiday" className="text-background/80 hover:text-primary transition-colors">
                  Holiday Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-background/80">hello@cardnama.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-background/80">123 Love Street, Heart City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Cardnama. All rights reserved. Made with ❤️ for couples everywhere.
          </p>
        </div>
      </div>
    </footer>
  )
}
