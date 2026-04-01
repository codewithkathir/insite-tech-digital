"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    date: "12 Jul",
    category: "Marketing",
    author: "Sarah Kim",
    title: "Effective SEO Strategies for Modern Businesses",
    description: "Discover the latest techniques in optimizing your digital presence to rank higher and reach more potential customers."
  },
  {
    date: "18 Jul",
    category: "Content",
    author: "Michael Lee",
    title: "Crafting Engaging Content That Converts",
    description: "Learn how to create high-performing content that builds trust, attracts attention, and drives measurable results."
  },
  {
    date: "22 Jul",
    category: "Social",
    author: "Emily Watson",
    title: "Mastering Social Media Engagement",
    description: "Explore proven techniques to increase engagement and brand awareness across leading social media platforms."
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">Latest Insights</p>
            <h2 className="text-3xl md:text-4xl font-serif text-balance">
              Insights, Trends, and Strategies
            </h2>
          </div>
          <Button variant="outline" className="w-fit gap-2 border-primary/30 text-primary hover:bg-primary/5">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Thumbnail Placeholder */}
              <div className="aspect-[4/3] bg-muted rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <span className="text-4xl font-serif text-primary/20 group-hover:text-primary/30 transition-colors">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-card px-3 py-1 rounded-full text-xs font-medium">
                  {post.date}
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="text-muted-foreground">by {post.author}</span>
                </div>
                
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.description}
                </p>
                
                <button className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 gap-1 transition-all pt-2">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
