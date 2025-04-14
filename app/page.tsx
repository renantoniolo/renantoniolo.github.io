import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Layers, MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span>Renan Toniolo</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/renantoniolo" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/renantoniolo" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button asChild size="sm" className="hidden md:flex">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Renan Toniolo</h1>
                  <h2 className="text-xl font-medium text-muted-foreground md:text-2xl">Mobile Developer</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Passionate about creating innovative mobile applications with a focus on user experience and
                    performance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-background bg-background">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Renan Toniolo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <User className="mr-2 inline-block h-4 w-4" />
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Who I Am</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  I'm a Mobile Developer with expertise in iOS and Android development. With several years of experience
                  in the industry, I've worked on a variety of projects ranging from e-commerce applications to fintech
                  solutions. I'm passionate about creating intuitive and performant mobile experiences that solve
                  real-world problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <Code className="mr-2 inline-block h-4 w-4" />
                  Skills
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  I specialize in mobile development with a focus on creating responsive, user-friendly applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Mobile Development</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Swift</Badge>
                    <Badge>Objective-C</Badge>
                    <Badge>Kotlin</Badge>
                    <Badge>Java</Badge>
                    <Badge>React Native</Badge>
                    <Badge>Flutter</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Frontend</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>React</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Backend</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Firebase</Badge>
                    <Badge>RESTful APIs</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Tools & Platforms</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Xcode</Badge>
                    <Badge>Android Studio</Badge>
                    <Badge>VS Code</Badge>
                    <Badge>Jira</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Design</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>Figma</Badge>
                    <Badge>Sketch</Badge>
                    <Badge>Adobe XD</Badge>
                    <Badge>UI/UX</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Other</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>CI/CD</Badge>
                    <Badge>Agile</Badge>
                    <Badge>Scrum</Badge>
                    <Badge>TDD</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <Layers className="mr-2 inline-block h-4 w-4" />
                  Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  A selection of my recent projects and applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <Card className="overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project 1"
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">E-commerce App</h3>
                  <p className="mt-2 text-muted-foreground">
                    A full-featured mobile shopping application with payment integration.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">Swift</Badge>
                    <Badge variant="outline">iOS</Badge>
                    <Badge variant="outline">Firebase</Badge>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="#" className="inline-flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" className="inline-flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project 2"
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Fintech Solution</h3>
                  <p className="mt-2 text-muted-foreground">
                    A secure banking application with real-time transaction tracking.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">Kotlin</Badge>
                    <Badge variant="outline">Android</Badge>
                    <Badge variant="outline">RESTful API</Badge>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="#" className="inline-flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" className="inline-flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Project 3"
                    width={400}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Health & Fitness App</h3>
                  <p className="mt-2 text-muted-foreground">
                    A comprehensive fitness tracking application with personalized workout plans.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Cross-platform</Badge>
                    <Badge variant="outline">Firebase</Badge>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <Button size="sm" variant="outline" asChild>
                      <Link href="#" className="inline-flex items-center gap-1">
                        <Github className="h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href="#" className="inline-flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link href="https://github.com/renantoniolo">
                  View More Projects on GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <Briefcase className="mr-2 inline-block h-4 w-4" />
                  Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Work History</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  My professional journey and career highlights.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 py-12">
              {/* Job 1 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Senior Mobile Developer</h3>
                      <p className="text-muted-foreground">Tech Company Inc.</p>
                    </div>
                    <div className="text-sm text-muted-foreground">2020 - Present</div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      Led the development of multiple iOS and Android applications, managing a team of 5 developers.
                      Implemented CI/CD pipelines and improved app performance by 40%.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary">Swift</Badge>
                      <Badge variant="secondary">Kotlin</Badge>
                      <Badge variant="secondary">React Native</Badge>
                      <Badge variant="secondary">Team Leadership</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job 2 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Mobile Developer</h3>
                      <p className="text-muted-foreground">Digital Solutions Ltd.</p>
                    </div>
                    <div className="text-sm text-muted-foreground">2017 - 2020</div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      Developed and maintained iOS applications for clients in various industries. Collaborated with
                      design and backend teams to deliver high-quality mobile experiences.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary">Swift</Badge>
                      <Badge variant="secondary">Objective-C</Badge>
                      <Badge variant="secondary">RESTful APIs</Badge>
                      <Badge variant="secondary">Agile</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job 3 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">Junior Developer</h3>
                      <p className="text-muted-foreground">StartUp Innovations</p>
                    </div>
                    <div className="text-sm text-muted-foreground">2015 - 2017</div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">
                      Assisted in the development of mobile and web applications. Gained experience in full-stack
                      development and agile methodologies.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">Android</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">HTML/CSS</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  <MessageSquare className="mr-2 inline-block h-4 w-4" />
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Interested in working together? Feel free to reach out.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <p>contact@renantoniolo.com</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-muted-foreground" />
                      <Link href="https://linkedin.com/in/renantoniolo" className="hover:text-primary">
                        linkedin.com/in/renantoniolo
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-muted-foreground" />
                      <Link href="https://github.com/renantoniolo" className="hover:text-primary">
                        github.com/renantoniolo
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Renan Toniolo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/renantoniolo" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/renantoniolo" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:contact@renantoniolo.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
