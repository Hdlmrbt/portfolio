import { Navbar }           from '@/components/layout/Navbar';
import { Footer }           from '@/components/layout/Footer';
import { ScrollProgress }   from '@/components/layout/ScrollProgress';
import { HeroSection }      from '@/components/sections/HeroSection';
import { AboutSection }     from '@/components/sections/AboutSection';
import { SkillsSection }    from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection }  from '@/components/sections/ProjectsSection';
import { DashboardSection } from '@/components/sections/DashboardSection';
import { ContactSection }   from '@/components/sections/ContactSection';
import { fetchGitHubStats, staticGitHubStats } from '@/lib/github';

export default async function Home() {
  // Fetch GitHub stats server-side (falls back to static if API unavailable)
  let githubStats = staticGitHubStats;
  try {
    githubStats = await fetchGitHubStats();
  } catch {
    // Use static fallback
  }

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <DashboardSection stats={githubStats} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
