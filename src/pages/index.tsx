import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X, Github, Linkedin, Mail, Code, Server, Database, ArrowRight, ExternalLink } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { 
      name: 'Frontend', 
      icon: Code, 
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Backend', 
      icon: Server, 
      items: ['Node.js', 'Express', 'NestJS', 'RESTful APIs'],
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'Databases', 
      icon: Database, 
      items: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'SQL'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'Panel administrativo completo con gestión de productos, ventas y analytics en tiempo real.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      status: 'En desarrollo',
      github: 'https://github.com/devrodrigoss',
      demo: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Aplicación del clima con búsqueda de ciudades, pronóstico extendido y geolocalización.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'API'],
      status: 'En desarrollo',
      github: 'https://github.com/devrodrigoss',
      demo: '#'
    },
    {
      title: 'Task Manager API',
      description: 'RESTful API con autenticación JWT, documentación Swagger y testing automatizado.',
      tech: ['Express', 'PostgreSQL', 'JWT', 'Jest'],
      status: 'En desarrollo',
      github: 'https://github.com/devrodrigoss',
      demo: '#'
    }
  ];

  return (
    <>
      <Head>
        <title>Rodrigo Santibáñez | Desarrollador Full Stack Junior</title>
        <meta name="description" content="Desarrollador Full Stack Junior especializado en React, Node.js y bases de datos. Estudiante de Ingeniería Informática en Duoc UC." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  RS
                </span>
              </div>
              
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  <a href="#sobre-mi" className="hover:text-blue-400 transition-colors">Sobre mí</a>
                  <a href="#habilidades" className="hover:text-blue-400 transition-colors">Habilidades</a>
                  <a href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</a>
                  <a href="#contacto" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-all hover:scale-105">
                    Contacto
                  </a>
                </div>
              </div>

              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-slate-700">
              <div className="px-4 pt-2 pb-4 space-y-2">
                <a href="#sobre-mi" className="block py-2 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Sobre mí</a>
                <a href="#habilidades" className="block py-2 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Habilidades</a>
                <a href="#proyectos" className="block py-2 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
                <a href="#contacto" className="block py-2 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-6 animate-bounce">
              <span className="bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/20">
                ✨ Disponible para trabajar
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hola, soy
              <span className="block bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Rodrigo Santibáñez
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
              Desarrollador Full Stack Junior
            </h2>
            
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Construyo aplicaciones web modernas y escalables con React, Node.js y bases de datos SQL/NoSQL.
              Ingeniero Informático en formación en Duoc UC.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#proyectos" className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                Ver Proyectos <ArrowRight size={20} />
              </a>
              <a href="#contacto" className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-full font-medium transition-all hover:scale-105">
                Contáctame
              </a>
            </div>

            <div className="flex gap-6 justify-center mt-12">
              <a href="https://github.com/devrodrigoss" target="_blank" rel="noopener noreferrer" 
                 className="text-slate-400 hover:text-white transition-all hover:scale-110">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com/in/rodrigo-santibanez" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-blue-400 transition-all hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="mailto:rosantibanezs@gmail.com"
                 className="text-slate-400 hover:text-emerald-400 transition-all hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-mi" className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Sobre mí
            </h2>
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-600/30 shadow-xl">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                Soy Desarrollador fullstack actualmente terminando <span className="text-blue-400 font-semibold">Ingeniería Informática en Duoc UC</span> con 
                experiencia práctica en desarrollo mediante proyectos personales y académicos.
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
                Me apasiona crear soluciones eficientes y escalables, siempre aplicando las mejores prácticas 
                del desarrollo moderno. Mi enfoque está en escribir <span className="text-emerald-400 font-semibold">código limpio</span>, 
                mantener una actitud de aprendizaje continuo y colaborar efectivamente en equipo.
              </p>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Cuento con <span className="text-purple-400 font-semibold">7 años de experiencia profesional</span> en 
                atención al cliente y coordinación de operaciones, lo que me ha dado habilidades valiosas en 
                resolución de problemas, comunicación efectiva y trabajo bajo presión.
              </p>
              
              <div className="mt-8 pt-8 border-t border-slate-600/50">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Busco mi primera oportunidad como desarrollador</h3>
                <p className="text-slate-300">
                  Para aplicar mis conocimientos técnicos, aportar valor desde el día uno y continuar 
                  creciendo profesionalmente en un equipo de desarrollo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Stack Tecnológico
            </h2>
            <p className="text-slate-400 text-center mb-12 text-lg">
              Tecnologías con las que trabajo y aprendo constantemente
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((category, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all hover:transform hover:scale-105 shadow-xl">
                  <div className={`bg-gradient-to-br ${category.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-slate-300 flex items-center gap-3">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">También manejo:</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {['Git', 'GitHub', 'Docker', 'Vercel', 'Railway', 'Postman', 'VS Code'].map((tool) => (
                  <span key={tool} className="bg-slate-700/50 px-4 py-2 rounded-full text-sm border border-slate-600/50">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Proyectos Destacados
            </h2>
            <p className="text-slate-400 text-center mb-12 text-lg">
              Aplicaciones que he desarrollado aplicando buenas prácticas
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-2xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all hover:transform hover:scale-105 shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs border border-yellow-500/20">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" 
                       className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                      <Github size={16} /> Código
                    </a>
                    {project.demo !== '#' && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">
                🚀 Actualmente desarrollando más proyectos para ampliar mi portafolio
              </p>
              <a href="https://github.com/devrodrigoss" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                Ver todos mis repositorios en GitHub <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trabajemos Juntos
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              ¿Tienes un proyecto en mente o buscas sumar talento a tu equipo?<br />
              Me encantaría conversar contigo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="mailto:rosantibanezs@gmail.com" 
                 className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-blue-500/30">
                <Mail size={20} /> Enviar Email
              </a>
              <a href="https://linkedin.com/in/rodrigo-santibanez" target="_blank" rel="noopener noreferrer"
                 className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:scale-105">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-semibold mb-4">Información adicional</h3>
              <div className="grid md:grid-cols-3 gap-6 text-slate-300">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Disponibilidad</p>
                  <p className="font-semibold">Inmediata</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Modalidad</p>
                  <p className="font-semibold">Presencial / Híbrido / Remoto</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Ubicación</p>
                  <p className="font-semibold">Santiago, Chile</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-slate-700">
          <div className="max-w-7xl mx-auto text-center text-slate-400">
            <p>&copy; 2025 Rodrigo Santibáñez. Desarrollado con Next.js y Tailwind CSS.</p>
            <p className="text-sm mt-2">Última actualización: Octubre 2025</p>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
}