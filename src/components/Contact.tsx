import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import MdEditor from "./sub/MdEditor";

const Contact = () => {
  return (
    <MaxWidthWrapper id="contact" className="max-w-screen-md px-4">
      <header className="pb-8 pt-10 text-center font-heading  text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
        Contact Us
      </header>
      <p className="mx-auto mb-10 max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        Anything you want to tell us?
        <br />
        We are here to listen 🤝
      </p>
      <MdEditor />
    </MaxWidthWrapper>
  );
};

export default Contact;
