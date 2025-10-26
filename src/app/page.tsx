"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Mail, MessageSquare, Search, Shield, Smartphone, Star, TrendingDown, Zap, Heart } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Features", id: "features" },
            { name: "Products", id: "products" },
            { name: "Reviews", id: "testimonials" },
            { name: "Download", id: "contact" }
          ]}
          brandName="ShopApp"
          button={{
            text: "Download Now",
            href: "https://apps.apple.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Shop Smarter with Our iPhone App"
          description="Discover the ultimate shopping experience designed exclusively for iPhone users. Browse, compare, and buy with confidence."
          tag="Now Available"
          tagIcon={Smartphone}
          buttons={[
            {
              text: "Download Free",
              href: "https://apps.apple.com"
            },
            {
              text: "View Features",
              href: "features"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/26100279/pexels-photo-26100279.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="iPhone shopping app interface"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured iPhones"
          description="Browse our curated selection of the latest iPhone models with competitive prices and fast delivery"
          tag="Best Sellers"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "iPhone 15 Pro Max",
              price: "$1,199",
              imageSrc: "https://images.pexels.com/photos/16005007/pexels-photo-16005007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "iPhone 15 Pro Max"
            },
            {
              id: "2",
              name: "iPhone 15",
              price: "$799",
              imageSrc: "https://images.pexels.com/photos/15941877/pexels-photo-15941877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "iPhone 15"
            },
            {
              id: "3",
              name: "iPhone 15 Mini",
              price: "$699",
              imageSrc: "https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "iPhone 15 Mini"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Our App"
          description="Powerful features designed to make your iPhone shopping experience seamless and enjoyable"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Smart Search",
              description: "Find exactly what you're looking for with our AI-powered search that understands your preferences",
              icon: Search,
              button: {
                text: "Learn More",
                href: "#search"
              }
            },
            {
              title: "Price Tracking",
              description: "Never miss a deal with automatic price alerts and comparison tools across multiple retailers",
              icon: TrendingDown,
              button: {
                text: "Learn More",
                href: "#pricing"
              }
            },
            {
              title: "Secure Checkout",
              description: "Shop with confidence using Touch ID, Face ID, and encrypted payment processing",
              icon: Shield,
              button: {
                text: "Learn More",
                href: "#security"
              }
            },
            {
              title: "Quick Reviews",
              description: "Read authentic user reviews and ratings to make informed purchasing decisions",
              icon: MessageSquare,
              button: {
                text: "Learn More",
                href: "#reviews"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Users Say"
          description="Join thousands of satisfied iPhone users who love shopping with our app"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "iOS Developer",
              testimonial: "This app has completely transformed how I shop for tech products. The interface is intuitive and the price tracking feature saved me hundreds of dollars.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Chen"
            },
            {
              id: "2",
              name: "Michael Rodriguez",
              role: "Product Manager",
              testimonial: "The best shopping app I've used on iOS. Fast, reliable, and the search functionality is incredibly smart. Highly recommend to anyone with an iPhone.",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Rodriguez"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "UX Designer",
              testimonial: "Beautiful design and seamless user experience. The app feels native to iOS and shopping has never been easier. Five stars!",
              imageSrc: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Thompson"
            },
            {
              id: "4",
              name: "David Park",
              role: "Tech Entrepreneur",
              testimonial: "Exceptional app with great attention to detail. The secure checkout process and price alerts make it my go-to shopping companion.",
              imageSrc: "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Park"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Updated"
          description="Get notified about new iPhone deals, app updates, and exclusive shopping tips delivered straight to your inbox."
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing you agree to receive marketing emails. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "iPhone Models", href: "products" },
                { label: "Download App", href: "https://apps.apple.com" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "#help" },
                { label: "Contact Us", href: "contact" },
                { label: "App Store", href: "https://apps.apple.com" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" }
              ]
            }
          ]}
          copyrightText="© 2025 ShopApp. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}