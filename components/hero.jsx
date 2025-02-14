import { MoonStar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <MoonStar className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Better Sleep for Better Grades
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A comprehensive sleep quality management platform designed specifically for university students. Improve
            your academic performance through better sleep habits.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Sleep Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

