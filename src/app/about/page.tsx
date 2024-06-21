import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import NavBar from "@/components/Navbar";
import FAQ from "@/components/about/FAQ";
import WhyUs from "@/components/about/WhyUs";
import PerformanceScore from "@/components/about/PerformanceScore";

const About = () => {
  return (
    <>
      <NavBar />
      <MaxWidthWrapper className="py-10 text-start">
        <header className="mb-5 text-3xl font-bold tracking-tighter md:text-4xl lg:text-6xl">
          About Contest Hive
        </header>
        <p className="text-balance text-sm md:text-lg">
          <b>Contest Hive</b> started as a solo self project to have all the
          contests happening around the internet in one place.
          <br className="md:hidden" />
          <br />
          But as time passed, I realized that it can be a great platform for
          people who are looking for contests to participate in.
          <br />
          <br />
          So, I started working on it more seriously and after{" "}
          <span className="text-xs tracking-tight text-primary/90 md:text-sm">
            (GOD knows how many)
          </span>{" "}
          sleepless nights, here we are.
          <br />
          Now I&apos;ll answer some of the questions you might have.
        </p>
        <FAQ />
        <WhyUs />
        <PerformanceScore />
      </MaxWidthWrapper>
    </>
  );
};

export default About;
