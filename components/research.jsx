"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">Sleep Quality Platform</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Team</Button>
            <Button variant="ghost">Research</Button>
            <Button variant="ghost">Technologies</Button>
            <Button>Get Started</Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Features
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Team
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Research
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Technologies
            </Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

