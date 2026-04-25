const tools = [
  { name: "Google Analytics", category: "Analytics" },
  { name: "Google Search Console", category: "Analytics" },
  { name: "SEMrush", category: "Research" },
  { name: "Ahrefs", category: "Research" },
  { name: "Moz Pro", category: "Research" },
  { name: "Screaming Frog", category: "Technical" },
  { name: "GTmetrix", category: "Performance" },
  { name: "PageSpeed Insights", category: "Performance" },
  { name: "Surfer SEO", category: "Content" },
  { name: "Clearscope", category: "Content" },
  { name: "BrightLocal", category: "Local" },
  { name: "Yext", category: "Local" },
]

export function ToolsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Industry-Leading SEO Tools
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We leverage the best tools in the industry to deliver data-driven results for your
            business.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group rounded-xl border border-gray-200 bg-gray-50 p-6 text-center transition-all hover:border-[#06807D] hover:bg-[#06807D]/5"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-gray-200 text-lg font-bold text-[#06807D]">
                {tool.name.charAt(0)}
              </div>
              <p className="font-medium text-gray-900 text-sm">{tool.name}</p>
              <p className="text-xs text-gray-500 mt-1">{tool.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
