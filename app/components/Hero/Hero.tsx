import PageContainer from "@/app/components/PageContainer";
import BigButton from "@/app/components/BigButton";

const Hero = () => {
  return (
    <PageContainer maxWidth={1000}>
      <div className="font-sans flex gap-8 flex-col">
        <div className="text-sm font-mono text-second">Hi, my name is</div>
        <div className="big-heading">Shelton Cui</div>

        <div className="big-heading text-sandGray">Welcome to my website.</div>
        <div className="text-xl whitespace-pre-line text-sandGray">
          {`I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at `}
          <span className="text-second">Instergram</span>.
        </div>
        <div className="self-start pr-10">
          <BigButton>Check my resume!</BigButton>
        </div>
      </div>
    </PageContainer>
  );
};

export default Hero;
