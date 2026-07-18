import { projects } from '../../data/resumeData';
import ProjectCard from '../ProjectCard';
import SectionHeading from '../SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-[110px] animate-blob" />
        <div className="absolute bottom-0 -right-24 h-72 w-72 rounded-full bg-accent-3/15 blur-[110px] animate-blob [animation-delay:2s]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of full-stack, AI-integrated applications — combining React, Spring Boot, and LLM/RAG pipelines."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
