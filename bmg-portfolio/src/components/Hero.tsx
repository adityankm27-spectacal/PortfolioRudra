import { profile } from "@/lib/content";
import { publicAssetExists } from "@/lib/asset";
import HeroContent from "@/components/HeroContent";

export default function Hero() {
  const hasPhoto = publicAssetExists(profile.photo);
  return <HeroContent hasPhoto={hasPhoto} />;
}
