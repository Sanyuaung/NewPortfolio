import ModernPortfolioHome from "@/components/ModernPortfolioHome";

export const metadata = {
  title: "Modern Portfolio Website",
};

export default function ModernPortfolio() {
  return (
    <>
      <link
        rel="preload"
        href="/models/space-optimized-v1.glb"
        as="fetch"
        crossOrigin="anonymous"
      />
      <ModernPortfolioHome />
    </>
  );
}
