import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mt-10">
        <h1 className="text-3xl font-semibold">
          Prakash Kumar Jha
        </h1>
        <p className="mt-2 text-gray-600">
          Building scalable web apps & solving real-world problems 🚀
        </p>
      </div>

      <Section title="About">
        <p className="text-gray-600 text-sm">
          IIT Patna student focused on Web Dev, AI, and real-world systems.
        </p>
      </Section>

      <Section title="Projects" id="projects">
        <div className="grid gap-4">
          <ProjectCard
            title="ResumeKit"
            desc="ATS-friendly resume builder."
            tech="Next.js"
          />
        </div>
      </Section>

      <Footer />
    </>
  );
}