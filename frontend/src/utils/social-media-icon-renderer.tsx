export enum SocialType {
  "YOUTUBE" = "YOUTUBE",
  "TWITTER" = "TWITTER",
  "DISCORD" = "DISCORD",
  "WEBSITE" = "WEBSITE",
  "FACEBOOK" = "FACEBOOK",
  "INSTAGRAM" = "INSTAGRAM",
  "GITHUB" = "GITHUB",
  "LINKEDIN" = "LINKEDIN",
}

export const RenderSocialIcon = ({ social }: { social: SocialType }) => {
  switch (social) {
    case SocialType.FACEBOOK:
      return (
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src="/facebook-social.svg"
        />
      );
    case SocialType.INSTAGRAM:
      return (
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src="/instagram-social.svg"
        />
      );
    case SocialType.LINKEDIN:
      return (
        <img
          className="relative w-8 h-8 overflow-hidden shrink-0"
          alt=""
          src="/linkedin-social.svg"
        />
      );
    default:
      return null;
  }
};
