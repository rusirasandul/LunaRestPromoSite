import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Team from "@/components/team"
import Technologies from "@/components/technologies"
import Research from "@/components/research"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Team />
      <Technologies />
      <Research />
      <Footer />
    </main>
  );
}
