import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const team = [
  {
    name: "Rusira Sandul",
    id: "W2051886 / 20231180",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Fathima Nihla",
    id: "W2053085 / 20232264",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Dewmi Jayasundara",
    id: "W2053736 / 20232161",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Chalitha T. Wickramasingha",
    id: "W20521752 / 20231629",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Dulsara Abeywardena",
    id: "W2051887/20231183",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Lakindu Perera",
    id: "W20518695 / 20231153",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Team() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">Meet the talented developers behind the Sleep Quality Platform</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">{member.id}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

