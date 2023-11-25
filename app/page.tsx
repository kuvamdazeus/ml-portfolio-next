import { getProjects } from "@/lib/projects";
import Project from "@/components/Project";

export default function IndexPage() {
  return (
    <section>
      <h1 className="paragraph text-gray-600 dark:text-gray-500">kuvam.dev</h1>
      <main className="paragraph zaduma-prose py-10">
        <p className="paragraph mb-6">
          <small className="text-gray-600 dark:text-gray-500">
            IPA /kuːvəm/ — sun
          </small>
          <br />
          Hi There! I'm <b>Kuvam</b>, I'm 19yo and I'm self-taught. I love web &
          neural nets and am aspiring to be a{" "}
          <b>Machine Learning Researcher/Engineer</b>.
        </p>
        <p className="paragraph mt-6">
          I'm currently working as a Django Backend Developer looking for ML
          opportunities.
        </p>
        <p className="paragraph mt-6">
          My motto in life is <i>experiment, experiment, experiment!</i>
        </p>
      </main>

      <h2 className="paragraph my-5 text-lg font-bold text-gray-300">
        Projects/Notebooks
      </h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {getProjects().map((project) => (
          <Project {...project} />
        ))}
      </div>
    </section>
  );
}
