import { existsSync } from "fs";
import { join } from "path";

/**
 * Checks (at build/render time, server-side) whether a file exists in /public.
 * Lets components show a graceful placeholder until the real asset is added,
 * then automatically use the real image once it's dropped in.
 */
export function publicAssetExists(publicPath: string): boolean {
  try {
    const clean = publicPath.split("?")[0].replace(/^\//, "");
    return existsSync(join(process.cwd(), "public", clean));
  } catch {
    return false;
  }
}
