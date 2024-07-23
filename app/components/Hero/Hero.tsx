import PageContainer from '@/app/components/PageContainer';
import BigButton from '@/app/components/BigButton';

const Hero = () => {
  return (
    <PageContainer maxWidth={1000}>
      <div className="font-sans flex gap-8 flex-col">
        <div className="text-sm font-mono text-second">Hi, my name is</div>
        <div className="big-heading">Shelton Cui</div>

        <div className="big-heading text-sandGray">Welcome to my website.</div>
        <div className="text-xl whitespace-pre-line text-sandGray">
          I’m a versatile ReactJS/TypeScript developer. Currently, collaborating
          with a professional team, I’m working on building a complex platform
          called {<span className="text-second">TripTribe </span>}
          that recommends attractions and restaurants with a transparent rating
          system and authentic user reviews.
        </div>
        <div className="self-start pr-10">
          <BigButton>Check my resume!</BigButton>
        </div>
      </div>
    </PageContainer>
  );
};

export default Hero;
