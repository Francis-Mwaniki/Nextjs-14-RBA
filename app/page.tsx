import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Shield, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center"> 
          <h1 className="text-2xl font-bold text-orange-600">Techies</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-orange-600 hover:text-orange-800">Login</Link>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
            Welcome to Techies
          </h2>
          <p className="text-xl text-orange-600 mb-8">
            The all-in-one solution for managing Techies
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Get Started <ArrowRight className="ml-2" /></Link>
          </Button>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Zap className="w-12 h-12 text-orange-500" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and performance"
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-orange-500" />}
            title="Secure"
            description="Your data is protected with state-of-the-art security"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-orange-500" />}
            title="Collaborative"
            description="Work seamlessly with your team in real-time"
          />
        </section>

        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4 text-orange-600">Why Choose Us?</h3>
          <ul className="inline-block text-left">
            {[
              "Intuitive user interface",
              "24/7 customer support",
              "Regular updates and new features",
              "Customizable to fit your needs"
            ].map((item, index) => (
              <li key={index} className="flex items-center mb-2">
                <CheckCircle className="w-5 h-5 text-orange-500 mr-2" />
                <span className="text-orange-600">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-bold mb-4 text-orange-600">Ready to get started?</h3>
          <p className="text-xl text-orange-600 mb-8">
            Join thousands of satisfied users and take Techies to the next level
          </p>
          <Button size="lg" asChild>
            <Link href="/register">Sign Up Now <ArrowRight className="ml-2" /></Link>
          </Button>
        </section>
      </main>

      <footer className="bg-orange-100 py-8">
        <div className="container mx-auto px-4 text-center text-orange-600">
          <p>&copy; 2024 Techies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="mb-4 inline-block p-3 bg-blue-100 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
