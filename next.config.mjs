/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@emotion/react",
      "@emotion/styled",
      "@hookform/resolvers",
      "@internationalized/date",
      "@mantine/core",
      "@nextui-org/react",
      "@react-three/fiber",
      "@tabler/icons-react",
      "aos",
      "class-variance-authority",
      "clsx",
      "cmdk",
      "date-fns",
      "embla-carousel-react",
      "framer-motion",
      "gsap",
      "simplex-noise",
      "tailwind-merge",
      "tailwindcss-animate",
      "three",
      "transition-style",
    ],
  },
};

export default nextConfig;
