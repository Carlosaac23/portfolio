import Balancer from 'react-wrap-balancer';

import Links from '@/components/Links';
import ProjectCard from '@/components/ProjectCard';
import getProjects from '@/lib/github-services';

export default async function HomePage() {
  return (
    <main className='flex flex-col'>
      <h1 className='mb-3 text-2xl font-bold text-(--foreground)'>
        Carlos Acosta
      </h1>
      <p className='mb-1 text-base leading-8 tracking-wide text-(--foreground-secondary) lg:mb-2 lg:leading-7 lg:tracking-normal'>
        <Balancer>
          I&apos;m a self-taught Full Stack Developer based in Colombia and a
          passionate tech enthusiast. I&apos;m constantly learning and building
          projects to sharpen my skills and grow as a professional. I&apos;m
          excited to keep evolving, tackling new challenges, and expanding my
          knowledge every day in this amazing world. Reach me out here.
        </Balancer>
      </p>

      <Links />

      <section className='flex flex-col gap-6'>
        <ProjectsSection />
      </section>
    </main>
  );
}

async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <>
      {projects.length > 0 ? (
        <>
          <h2 className='text-2xl font-bold tracking-wide text-(--foreground)'>
            Projects
          </h2>
          <div className='flex flex-col gap-4 sm:grid-cols-[1fr_1fr]'>
            {projects.map(project => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <p className='text-base'>There are no projects</p>
        </div>
      )}
    </>
  );
}
