import { LandingMarquee } from "@/components/landing/LandingMarquee";
import { LandingTestimonialInline } from "@/components/landing/testimonial/LandingTestimonialInline";
import { LandingTestimonialInlineItem } from "@/components/landing/testimonial/LandingTestimonialInlineItem";

import {
  ChromeIcon,
  FigmaIcon,
  GithubIcon,
  FramerIcon,
  TwitchIcon,
  TwitterIcon,
  GitlabIcon,
  InstagramIcon,
  SlackIcon,
} from "lucide-react";

export default function Remark() {
  return (
    <>
      <LandingMarquee withBackground>
        <ChromeIcon className="w-12 h-12 mx-8" />
        <FigmaIcon className="w-12 h-12 mx-8" />
        <GithubIcon className="w-12 h-12 mx-8" />
        <FramerIcon className="w-12 h-12 mx-8" />
        <TwitchIcon className="w-12 h-12 mx-8" />
        <TwitterIcon className="w-12 h-12 mx-8" />
        <GitlabIcon className="w-12 h-12 mx-8" />
        <InstagramIcon className="w-12 h-12 mx-8" />
        <SlackIcon className="w-12 h-12 mx-8" />
      </LandingMarquee>
      <LandingTestimonialInline>
        <LandingTestimonialInlineItem
          name="John Doe"
          text="I've already seen a tangible impact on engagement and growth"
          suffix="Marketing at Google"
        />

        <LandingTestimonialInlineItem
          name="Jane Doe"
          text="Best app on the market without a doubt"
        />

        <LandingTestimonialInlineItem
          name="Alice Doe"
          text="I've created twenty videos in two days without any issues"
          suffix="CEO of Instagram"
        />

        <LandingTestimonialInlineItem
          name="Guido Ross"
          text="I've been able to automate my entire workflow. 6/5 stars"
          suffix="DevOps at Meta"
        />
      </LandingTestimonialInline>
    </>
  );
}
