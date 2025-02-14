import { Brain, Moon, Clock, Activity, LineChart, Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Sleep Quality Prediction",
    description: "Advanced ML algorithms predict your sleep quality based on personal metrics",
    icon: Brain,
  },
  {
    title: "Personalized Recommendations",
    description: "Get tailored advice from sleep experts to improve your sleep habits",
    icon: Moon,
  },
  {
    title: "Sleep Journal & History",
    description: "Track your sleep patterns and see how they change over time",
    icon: Clock,
  },
  {
    title: "Goal Setting & Progress",
    description: "Set sleep goals and track your progress towards better sleep habits",
    icon: Activity,
  },
  {
    title: "Data Analytics Dashboard",
    description: "Visualize your sleep data and identify areas for improvement",
    icon: LineChart,
  },
  {
    title: "Lifestyle Management",
    description: "Tools to help you manage your daily routine for optimal sleep",
    icon: Settings,
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform offers comprehensive tools to help you achieve better sleep
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

