import Header from "@/components/header";
import Posts from "@/components/post";
import Section from "@/components/section";

export default async function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="w-full flex justify-center ">
        <div className="m-6 w-[710px]">
          <div className="mb-16">
            <h2 className="mb-2 text-3xl font-bold">Projects</h2>
            <p>I&apos;ve done some projects on my own time.</p>
          </div>
          <hr className=" border-zinc-600" />
          <Section delay={0.3} className="">
            <Posts />
          </Section>
        </div>
      </div>
    </>
  );
}
