"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User } from "react-feather";
import { useEffect } from "react";

export function MyHomePage() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation only triggers once
    threshold: 0.3, // Trigger animation when 30% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  // const fontVariable = libreFranklin.variable;
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full px-4 lg:px-6 h-14 flex items-center bg-white bg-opacity-75 shadow-md z-50">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src="./logo.png"
            alt="K-ommerce Logo"
            width={500} // Set appropriate width
            height={300}
            className="h-10 w-10 glowing-button"
          />
          <span className="sr-only">K-ommerce</span>
        </Link>

        <div className="relative mx-auto w-full max-w-lg flex items-center">
          <div className="relative group">
            <button className="ml-auto text-sm font-medium btn btn-primary hover:toggle underline-offset-4 flex items-center gap-1">
              All
            </button>
            <div className=" w-48 bg-white shadow-md rounded-md flex-col dropdown-menu absolute hidden group-hover:block">
              <ul className="py-1">
                <li>
                  <Link
                    href="#FeaturedProducts"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Premium T-shirts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#NewArrivals"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Handbags
                  </Link>
                </li>
                <li>
                  <Link
                    href="#BestSellers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Shoes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#BestSellers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Belts
                  </Link>
                </li>
                <li>
                  <Link
                    href="#BestSellers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Scarfs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#BestSellers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Jackets
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Input
            type="text"
            placeholder="Search..."
            className="ml-2 glowing-button flex-grow"
          />
          <button type="submit" className="ml-2">
            <Search className="h-6 w-6 text-grey-600 hover:text-[#D3D3D3] transition-all duration-200 enabled:opacity-100" />
          </button>
        </div>

        <nav className="ml-auto flex gap-4 sm:gap-6">
          {/* Shop Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium btn btn-primary hover:toggle underline-offset-4 flex items-center gap-1">
              Shop
            </button>
            <div className=" w-48 bg-white shadow-md rounded-md flex-col dropdown-menu absolute hidden group-hover:block">
              <ul className="py-1">
                <li>
                  <Link
                    href="#FeaturedProducts"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Featured Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#NewArrivals"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#BestSellers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Best Sellers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
              About
            </button>
            <div className=" w-48 bg-white shadow-md rounded-md flex-col dropdown-menu absolute hidden group-hover:block">
              <ul className="py-1">
                <li>
                  <Link
                    href="#OurStory"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Team"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Careers"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
              Contact
            </button>
            <div className=" w-48 bg-white shadow-md rounded-md flex-col dropdown-menu absolute hidden group-hover:block">
              <ul className="py-1">
                <li>
                  <Link
                    href="mailto:brittokevin.04@gmail.com"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    href="#ContactForm"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contact Number
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Support"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Home Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
              Orders
            </button>
            <div className=" w-48 bg-white shadow-md rounded-md flex-col dropdown-menu absolute hidden group-hover:block">
              <ul className="py-1">
                <li>
                  <Link
                    href="#Returns"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Refunds"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Refunds
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
              Kids
            </button>
            <div className=" w-48 bg-white shadow-md rounded-md flex-col dropdown-menu absolute hidden group-hover:block">
              <ul className="py-1">
                <li>
                  <Link
                    href="#Boys"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Boys
                  </Link>
                </li>
                <li>
                  <Link
                    href="#Girls"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Girls
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* User Icon */}
          <Link href="./login" className="relative">
            <User className="h-6 w-6 text-grey-600 hover:text-[#D3D3D3] transition-all duration-200 disabled:opacity-50" />
          </Link>

          {/* Cart Icon */}
          <Link href="./cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-grey-600 hover:text-[#D3D3D3] transition-all duration-200 disabled:opacity-50" />
          </Link>
        </nav>
      </header>
      <main className="bg-custom-image flex-1">
        <section className="w-full h-screen px-4 md:px-6 py-12 md:py-24 lg:py-32 animate-fadeIn">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="relative overflow-hidden rounded-glass bg-glass shadow-glass backdrop-blur-glass border-glass">
                <div className="relative z-10 bg-background/80 backdrop-blur-lg rounded-lg p-6 shadow-lg">
                  <Image
                    src="./whiteshirt.png"
                    width="550"
                    height="550"
                    alt="Hero Product"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  />
                </div>
              </div>

              <div
                className="flex flex-col justify-center space-y-4 animate-[fadeIn_2s_ease-in-out]"
                id="fadeElement"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Style with Our Premium Apparel
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover our carefully curated collection of high-quality
                    clothing and accessories that will transform your wardrobe.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#ShopNow"
                    className="glowing-button inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 "
                    prefetch={false}
                  >
                    Shop Now
                  </Link>
                  <Link
                    href="#Learn More"
                    className="glowing-button inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-screen py-12 md:py-24 lg:py-32 bg-muted">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Featured Products
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our latest collection of stylish and high-quality
                products.
              </p>
            </div>
            <div
              ref={ref}
              className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-12 "
            >
              <Card>
                <CardHeader>
                  <Image
                    src="./colorful.png"
                    width="300"
                    height="300"
                    alt="Product Image"
                    className="mx-auto aspect-square overflow-hidden rounded-t-xl object-cover relative overflow-hidden rounded-glass bg-glass shadow-glass backdrop-blur-glass border-glass"
                  />
                </CardHeader>

                <CardContent className="space-y-2">
                  <h3 className="text-lg font-medium">Premium T-Shirt</h3>
                  <p className="text-muted-foreground">₹2,999</p>
                  <Button variant="outline" className="glowing-button">
                    More Details
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Image
                    src="./leatherbagpack.png"
                    width="300"
                    height="300"
                    alt="Product Image"
                    className="mx-auto aspect-square overflow-hidden rounded-t-xl object-cover relative overflow-hidden rounded-glass bg-glass shadow-glass backdrop-blur-glass border-glass"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-medium">Leather Backpack</h3>
                  <p className="text-muted-foreground">₹6,999</p>
                  <Button variant="outline" className="glowing-button">
                    More Details
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="./denimjacket.png"
                    width="300"
                    height="300"
                    alt="Product Image"
                    className="mx-auto aspect-square overflow-hidden rounded-t-xl object-cover relative overflow-hidden rounded-glass bg-glass shadow-glass backdrop-blur-glass border-glass"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-medium">Denim Jacket</h3>
                  <p className="text-muted-foreground">₹3,999</p>
                  <Button variant="outline" className="glowing-button">
                    More Details
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="./scarf.png"
                    width="300"
                    height="300"
                    alt="Product Image"
                    className="mx-auto aspect-square overflow-hidden rounded-t-xl object-cover relative overflow-hidden rounded-glass bg-glass shadow-glass backdrop-blur-glass border-glass"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-medium">Silk Scarf</h3>
                  <p className="text-muted-foreground">₹2,999</p>
                  <Button variant="outline" className="glowing-button">
                    More Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about their experience with
                  our products.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="space-y-6 glowing-button ">
                  <div className="flex items-center space-x-6 ">
                    <Avatar>
                      <AvatarImage
                        src="./user1.png"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-lg font-medium">John Doe</h6>
                      <p className="text-muted-foreground">Customer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {`"K-ommerce has exceeded my expectations with the exceptional
                       "quality and sophisticated style" of their
                        products. Their "offerings" have significantly
                         enhanced my wardrobe. I will surely recommend them to
                       friends and family."`}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-6 glowing-button">
                  <div className="flex items-center space-x-6">
                    <Avatar>
                      <AvatarImage
                        src="./user2.png"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h6 className="text-lg font-medium">Jane Smith</h6>
                      <p className="text-muted-foreground">Customer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;I am thoroughly impressed by the meticulous attention
                    to detail and craftsmanship of the products from K-ommerce.
                    They have become an essential part of my wardrobe. And will
                    always rely on them.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-6 glowing-button">
                  <div className="flex items-center space-x-6 ">
                    <Avatar>
                      <AvatarImage
                        src="./user3.png"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-medium">Michael Johnson</h4>
                      <p className="text-muted-foreground">Customer</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    “K-ommerce has consistently exceeded my expectations with
                    their exceptional customer service. I&apos;ve been a loyal
                    customer for years and have never been disappointed. Used
                    this platform for the 1st time.&quot;”
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:flex-row justify-between">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold border-b-2 border-gray-600 pb-2">
                Shop
              </h3>
              <Link
                href="#New Arrivals"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                New Arrivals
              </Link>
              <Link
                href="#Clothing"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Clothing
              </Link>
              <Link
                href="#Accessories"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Accessories
              </Link>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold border-b-2 border-gray-600 pb-2">
                Company
              </h3>
              <Link
                href="#About Us"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                About Us
              </Link>
              <Link
                href="#Contact"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Contact
              </Link>
              <Link
                href="#Careers"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Careers
              </Link>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold border-b-2 border-gray-600 pb-2">
                Legal
              </h3>
              <Link
                href="#Privacy Policy"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Privacy Policy
              </Link>
              <Link
                href="#Terms of Service"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Terms of Service
              </Link>
              <Link
                href="#Refund Policy"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Refund Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold border-b-2 border-gray-600 pb-2">
                Media
              </h3>
              <Link
                href="#Facebook"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Facebook
              </Link>
              <Link
                href="#Instagram"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Instagram
              </Link>
              <Link
                href="#Twitter"
                className="block text-sm hover:text-gray-400 transition-colors"
                prefetch={false}
              >
                Twitter
              </Link>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold border-b-2 border-gray-600 pb-2">
                Contact
              </h3>
              <p className="text-sm">Email: kevinbrit@kommerce.com</p>
              <p className="text-sm">Phone: +91 9988776655</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <form className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email "
                className="flex-1 px-4 py-2 rounded-md border border-gray-600 bg-[#FFFFFF] text-black"
                required
              />
              <Button
                className="bg-[#000000] text-white py-2 px-4 rounded-md hover:bg-[#bcbcbc] transition-colors"
                type="submit"
              >
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-400 max-w-xs">
              Sign up for our newsletter to stay up-to-date on the latest
              products and promotions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }
