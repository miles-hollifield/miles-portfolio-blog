import type { NextConfig } from "next";
import createMDX from "@next/mdx";

/** Enable .mdx as a valid page extension */
const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  // Any additional Next config options
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);
