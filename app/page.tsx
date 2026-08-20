"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Wrench, Building2, SprayCan, Paintbrush, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
]

const services = [
  {
    icon: SprayCan,
    title: "Sand Blasting",
    description: "Professional surface preparation using high-pressure sand blasting for metal structures, pipelines, and industrial equipment. We ensure optimal surface finish for coating adhesion.",
    image: "/images/sand-blasting-1.jpg",
  },
  {
    icon: Wrench,
    title: "Mechanical Works",
    description: "Complete mechanical engineering solutions including fabrication, installation, and maintenance of industrial machinery, piping systems, and heavy equipment.",
    image: "/images/mechanical-work-1.jpg",
  },
  {
    icon: Building2,
    title: "Civil Works",
    description: "Comprehensive civil construction services for industrial facilities, commercial buildings, and infrastructure projects across Pakistan.",
    image: "/images/project-civil.jpg",
  },
  {
    icon: Paintbrush,
    title: "Industrial Painting",
    description: "Expert industrial coating and painting services for corrosion protection, aesthetic enhancement, and surface preservation of metal structures.",
    image: "/images/painting-work.jpg",
  },
  {
    icon: Shield,
    title: "Sheet Insulation",
    description: "Thermal and acoustic insulation solutions for industrial pipes, tanks, and equipment to improve energy efficiency and safety.",
    image: "/images/insulation-work.jpg",
  },
  {
    icon: Users,
    title: "Labor Supply",
    description: "Skilled and semi-skilled workforce supply for various industrial projects, ensuring quality manpower for your operational needs.",
    image: "/images/labor-supply.jpg",
  },
]

const projects = [
  {
    title: "Lucky Electric Power Plant",
    location: "Karachi",
    client: "MaoMing Construction",
    image: "/images/project-power-plant.jpg",
    category: "Power Generation",
  },
  {
    title: "Pakistan Oxygen",
    location: "Karachi",
    client: "Direct Client",
    image: "/images/project-oxygen.jpg",
    category: "Industrial Gas",
  },
  {
    title: "Panther Tyres",
    location: "Sheikhupura",
    client: "Direct Client",
    image: "/images/project-tyres.jpg",
    category: "Manufacturing",
  },
  {
    title: "WASA Project",
    location: "Faisalabad",
    client: "IECS Engineering",
    image: "/images/project-wasa.jpg",
    category: "Water Infrastructure",
  },
  {
    title: "Al Makkah Textile",
    location: "Faisalabad",
    client: "Direct Client",
    image: "/images/project-textile.jpg",
    category: "Textile Industry",
  },
  {
    title: "Bahria Town",
    location: "Karachi",
    client: "Atta & Sons",
    image: "/images/project-civil.jpg",
    category: "Real Estate",
  },
]

const clients = [
  "Panther Tyres Sheikhupura",
  "Behal Bhakkar Workshop",
  "Pakistan Oxygen Karachi",
  "Sapphire Dairy Farm Raiwind",
  "Gasco Engineering",
  "Al Makkah Textile Faisalabad",
  "TDFC Engineering Workshop",
  "Lucky Electric Power Plant Karachi",
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">IA</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-primary text-lg leading-tight">IRSHAD AZHAR</p>
                <p className="text-xs text-muted-foreground">ENTERPRISES</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Industrial facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <p className="text-white/80 text-sm uppercase tracking-wider mb-4">Established 2013</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              IRSHAD AZHAR
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2">ENTERPRISES</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Your trusted partner for Mechanical Works, Civil Works, Sand Blasting, Painting, Sheet Insulation & Labor Supply across Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="#services">Our Services <ChevronRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/mechanical-work-2.jpg"
                  alt="Mechanical workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider mb-4">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Excellence Since 2013
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                IRSHAD AZHAR ENTERPRISES was established in the year 2013. We specialize in All Mechanical Works, Civil Works, Sand Blasting, Painting, Sheet Insulation & Labor Supply.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Since 2013, we continue to strive for providing reliable, effective & cost-effective projects to many companies. We are committed to follow Rules and Code of Practice/Standards with HSE at the top and client ultimate satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">HSE Compliant</p>
                    <p className="text-sm text-muted-foreground">Safety First Approach</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Expert Team</p>
                    <p className="text-sm text-muted-foreground">Skilled Professionals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Services - Sand Blasting & Mechanical */}
      <section className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-white/80 font-semibold uppercase tracking-wider mb-4">Featured Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Core Specializations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sand Blasting Feature */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/images/sand-blasting-2.jpg"
                  alt="Sand blasting operations"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                    <SprayCan className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Sand Blasting</h3>
                </div>
                <p className="text-white/90 mb-4">
                  Industry-leading surface preparation services using state-of-the-art sand blasting equipment. We handle large-scale industrial projects including pipelines, storage tanks, structural steel, and heavy machinery.
                </p>
                <ul className="text-white/80 text-sm space-y-2">
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Pipeline Surface Preparation</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Structural Steel Cleaning</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Tank & Vessel Blasting</li>
                </ul>
              </div>
            </div>

            {/* Mechanical Work Feature */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/images/mechanical-work-1.jpg"
                  alt="Mechanical engineering work"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mechanical Works</h3>
                </div>
                <p className="text-white/90 mb-4">
                  Complete mechanical engineering solutions from design to execution. Our expert team handles fabrication, installation, and maintenance of complex industrial systems.
                </p>
                <ul className="text-white/80 text-sm space-y-2">
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Heavy Equipment Installation</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Piping & Fabrication</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Industrial Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Complete Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive industrial solutions tailored to meet your project requirements with excellence and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group overflow-hidden border-0 shadow-lg bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">Our Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Completed Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of our successful project deliveries across various industries in Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="relative h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {project.location}
                  </p>
                  <p className="text-white/60 text-xs mt-1">Project By: {project.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Company Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals driving IRSHAD AZHAR ENTERPRISES forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CEO 1 */}
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <div className="relative h-80">
                <Image
                  src="/images/ceo-irshad-ahmed.jpg"
                  alt="Irshad Ahmed - CEO"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">Irshad Ahmed</h3>
                <p className="text-primary font-medium mb-3">Chief Executive Officer</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Founder and CEO with over a decade of experience in mechanical and civil engineering projects across Pakistan.
                </p>
              </CardContent>
            </Card>

            {/* CEO 2 */}
            <Card className="overflow-hidden border-0 shadow-xl bg-white">
              <div className="relative h-80">
                <Image
                  src="/images/ceo-director.jpg"
                  alt="Operations Director"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-1">Muhammad Azhar</h3>
                <p className="text-primary font-medium mb-3">Operations Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading operations with expertise in project management, quality control, and client relationship management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider mb-4">Trusted By</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Valued Clients
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have built lasting relationships with leading companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="bg-secondary rounded-xl p-6 text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 group"
              >
                <p className="font-medium text-sm group-hover:text-primary-foreground text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-white/80 font-semibold uppercase tracking-wider mb-4">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contact Us Today
              </h2>
              <p className="text-white/90 mb-8">
                If you have any queries for the pre-qualification of our company, please do not hesitate to contact us. We will be really glad to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Lahore Office</p>
                    <p className="text-white/80 text-sm">216 Zam Zam Mall, 2nd Floor H-3 Johar Town, Lahore</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Karachi Office</p>
                    <p className="text-white/80 text-sm">C-129/185, 2nd Floor Gulistan-E-Jauhar, Karachi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-white/80 text-sm">Contact for inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-white/80 text-sm">info@irshadazhar.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">Service Required</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="sand-blasting">Sand Blasting</option>
                    <option value="mechanical">Mechanical Works</option>
                    <option value="civil">Civil Works</option>
                    <option value="painting">Industrial Painting</option>
                    <option value="insulation">Sheet Insulation</option>
                    <option value="labor">Labor Supply</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">IA</span>
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-tight">IRSHAD AZHAR</p>
                  <p className="text-xs text-white/60">ENTERPRISES</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Providing reliable industrial solutions since 2013.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Sand Blasting</li>
                <li>Mechanical Works</li>
                <li>Civil Works</li>
                <li>Industrial Painting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>Lahore: H-3 Johar Town</li>
                <li>Karachi: Gulistan-E-Jauhar</li>
                <li>info@irshadazhar.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} IRSHAD AZHAR ENTERPRISES. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
