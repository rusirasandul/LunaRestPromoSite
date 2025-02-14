import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const techStacks = [
  {
    title: "Frontend",
    technologies: ["React", "Tailwind CSS", "Chart.js"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express", "PostgreSQL", "Firebase Auth"],
  },
  {
    title: "Machine Learning",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    title: "APIs",
    technologies: ["Fitbit API", "Sleep Cycle API", "Google Calendar API"],
  },
]

export default function Technologies() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Technology Stack</h2>
          <p className="mt-4 text-lg text-gray-600">Built with modern technologies for optimal performance</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {techStacks.map((stack, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{stack.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="list-disc list-inside">
                    {stack.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

