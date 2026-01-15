import Image from "next/image";
import CursorLight from "./components/CursorLight";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 relative min-h-screen">
      <div className="fixed inset-0 bg-noise pointer-events-none z-0"></div>
      <CursorLight />

      {/* Main Content */}
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto">
        <div className="container flex flex-col items-center justify-center w-full gap-8">
          {/* Avatar and Header Section */}
          <div className="flex flex-col items-center justify-center w-full gap-8 mt-24 animate-fade-in-up">
            {/* Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative p-1 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-full">
                <div className="w-[140px] h-[140px] rounded-full ring-1 ring-zinc-700/50 overflow-hidden">
                  <Image
                    src="/image.jpeg"
                    alt="Purvansh Sonthalia"
                    width={140}
                    height={140}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Name and Tagline */}
            <div className="flex flex-col items-center gap-5">
              <div className="space-y-1 text-center">
                <h1 className="text-4xl font-bold text-zinc-100 tracking-tight">
                  Purvansh Sonthalia
                </h1>
                <h2 className="text-lg text-zinc-400 font-medium tracking-wide">
                  Chill x Code ☕
                </h2>
              </div>

              {/* Available Badge */}
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-800/30 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-sm text-zinc-400">Available for opportunities</span>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-zinc-100 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  title="Github"
                  href="https://github.com/Purvansh-Sonthalia"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-zinc-100 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  title="LinkedIn"
                  href="https://linkedin.com/in/purvansh-sonthalia"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-zinc-100 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  title="Email"
                  href="mailto:sonthaliapurvansh@gmail.com"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/40 group md:gap-8 hover:border-zinc-400/50 border-white/10 w-full max-w-4xl bg-zinc-900/20 backdrop-blur-sm animate-fade-in-up delay-200">
            <div className="pointer-events-none">
              <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50" style={{ maskImage: 'radial-gradient(240px at 739.8px 197px, white, transparent)' }}></div>
              <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={{ maskImage: 'radial-gradient(240px at 739.8px 197px, white, transparent)' }}></div>
            </div>
            <div className="p-4 sm:p-8 w-full relative z-20">
              <h3 className="text-2xl font-bold text-zinc-100 mb-8">Work Experience</h3>
              <div className="relative space-y-8 sm:space-y-12">
                <div className="hidden w-0.5 h-full bg-zinc-800 absolute left-8 top-3 md:block"></div>
                
                <div className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
                  <div className="flex sm:flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-zinc-800 border border-zinc-600 group-hover:border-zinc-400 transition-colors">
                      <Image
                        src="/aeoslabs.webp"
                        alt="AEOS Labs"
                        width={32}
                        height={32}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>
                    <div className="hidden md:block w-0.5 h-full bg-zinc-800 group-hover:bg-zinc-600"></div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-zinc-100">AI Engineer / Fullstack Developer</h4>
                      <span className="text-sm text-zinc-400 shrink-0">2024 – Present</span>
                    </div>
                    <p className="text-zinc-400 font-medium text-sm sm:text-base">AEOS Labs • Full-time</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Next.js", "FastAPI", "PostgreSQL", "OpenAI API", "AWS", "Docker", "Kubernetes"].map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs text-zinc-300 bg-zinc-800/50 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Studies */}
          <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/40 group md:gap-8 hover:border-zinc-400/50 border-white/10 w-full max-w-4xl bg-zinc-900/20 backdrop-blur-sm animate-fade-in-up delay-300">
            <div className="pointer-events-none">
              <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50" style={{ maskImage: 'radial-gradient(240px at 651.8px 55.4px, white, transparent)' }}></div>
              <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={{ maskImage: 'radial-gradient(240px at 651.8px 55.4px, white, transparent)' }}></div>
            </div>
            <div className="p-8 w-full relative z-20">
              <h3 className="text-2xl font-bold text-zinc-100 mb-4">Studies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl text-zinc-100">Indian Institute of Information Technology, Kalyani</h4>
                  <p className="text-zinc-400">B.Tech • Computer Science and Engineering • 2020-2024</p>
                  <p className="text-zinc-500 text-sm mt-1">CGPA: 9.06/10.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-10 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/40 group md:gap-8 hover:border-zinc-400/50 border-white/10 w-full max-w-4xl mx-auto bg-zinc-900/20 backdrop-blur-sm animate-fade-in-up delay-400">
            <div className="pointer-events-none">
              <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
              <div className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50" style={{ maskImage: 'radial-gradient(240px at 0px 0px, white, transparent)' }}></div>
              <div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={{ maskImage: 'radial-gradient(240px at 0px 0px, white, transparent)' }}></div>
            </div>
            <div className="p-8 w-full relative z-20">
              <h3 className="text-3xl font-bold text-zinc-100 mb-10">Technical Skills</h3>
        <div className="space-y-10">
                <SkillCategory
                  title="Languages"
                  skills={["Python", "C#", "Java", "TypeScript", "GoLang", "Rust"]}
                  colors={["bg-blue-600", "bg-sky-600", "bg-violet-600", "bg-orange-600", "bg-indigo-600", "bg-amber-600"]}
                />
                <SkillCategory
                  title="Machine Learning"
                  skills={["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "Vector Databases"]}
                  colors={["bg-emerald-600", "bg-teal-600", "bg-red-600", "bg-fuchsia-600", "bg-blue-700", "bg-green-600"]}
                />
                <SkillCategory
                  title="Generative AI"
                  skills={["ChatGPT", "Claude", "Gemini APIs", "Langchain", "RAG", "Prompt Engineering"]}
                  colors={["bg-green-700", "bg-indigo-600", "bg-purple-600", "bg-pink-600", "bg-orange-600", "bg-blue-600"]}
                />
                <SkillCategory
                  title="Web & Backend"
                  skills={["Next.js", "PostgreSQL", "Redis", "FastAPI", "Serverless", "Event-Driven Architecture"]}
                  colors={["bg-violet-600", "bg-blue-600", "bg-green-600", "bg-red-600", "bg-orange-600", "bg-indigo-600"]}
                />
                <SkillCategory
                  title="Cloud & DevOps"
                  skills={["AWS Lambda", "API Gateway", "SQS", "RDS", "Docker", "Kubernetes", "NGINX", "Firebase"]}
                  colors={["bg-slate-600", "bg-cyan-600", "bg-yellow-700", "bg-pink-600", "bg-orange-700", "bg-blue-600", "bg-green-600", "bg-yellow-600"]}
          />
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCategory({
  title,
  skills,
  colors,
}: {
  title: string;
  skills: string[];
  colors: string[];
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-xl text-zinc-200 font-semibold tracking-wide">{title}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="group px-4 py-2.5 text-zinc-300 bg-zinc-800/30 rounded-xl hover:bg-zinc-800/50 transform hover:scale-[1.02] transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-2.5">
              <div className={`w-2 h-2 rounded-full ${colors[index % colors.length]} group-hover:animate-pulse`}></div>
              <span className="font-medium tracking-wide">{skill}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
