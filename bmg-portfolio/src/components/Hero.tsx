import { profile, featuredBuilds } from "@/lib/content";
import { publicAssetExists } from "@/lib/asset";
import HeroContent from "@/components/HeroContent";

export default function Hero() {
  const hasPhoto = publicAssetExists(profile.photo);
  const featured = featuredBuilds.map((b) => ({
    ...b,
    hasImage: publicAssetExists(b.image),
  }));
  return <HeroContent hasPhoto={hasPhoto} featured={featured} />;
}
