"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Tony Ross",
    role: "Frontend Developer",
    initials: "TR"
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    initials: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Backend Developer",
    initials: "ER"
  }
]

export function TeamSection() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-balance">
            Meet the Minds Behind Insight Tech Digital
          </h2>
          <p className="text-muted-foreground">
            A passionate team of digital strategists, designers, and innovators dedicated 
            to helping brands grow smarter, faster, and stronger.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-32 h-32">
                <div className="w-full h-full bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <span className="text-2xl font-semibold text-primary group-hover:text-white transition-colors">
                    {member.initials}
                  </span>
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
              
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
