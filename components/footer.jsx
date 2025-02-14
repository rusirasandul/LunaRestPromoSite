import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Sleep Quality Platform</h3>
            <p className="mt-4 text-sm">A comprehensive sleep management solution for university students</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-4 text-sm">
              Informatics Institute of Technology
              <br />
              University of Westminster
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-primary-foreground hover:text-primary-foreground/80">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm">© 2024 CS-40 Group Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

