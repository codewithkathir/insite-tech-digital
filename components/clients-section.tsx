"use client"

import { motion } from "framer-motion"
import { Building2, Briefcase, Users, Building } from "lucide-react"

const clientTypes = [
  {
    icon: Building2,
    title: "Startups",
    description: "We help energetic startups build strong online visibility and find the right audience faster."
  },
  {
    icon: Building,
    title: "Enterprises",
    description: "We support large firms with scalable strategies that enhance brand presence and efficiency."
  },
  {
    icon: Briefcase,
    title: "B2B Companies",
    description: "We strengthen digital pipelines with strategies that attract quality leads and long-term relationships."
  },
  {
    icon: Users,
    title: "Agencies",
    description: "We partner with agencies to deliver reliable digital marketing support that scales with client demand."
  }
]

export function ClientsSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Who We Serve</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-balance">
            Solutions for Every Business Type
          </h2>
          <p className="text-muted-foreground">
            From ambitious startups to established enterprises, we tailor our approach to meet your unique challenges.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background border border-border rounded-2xl p-6 text-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <client.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{client.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{client.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
