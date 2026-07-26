import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/contact.vcf",
        headers: [
          {
            key: "Content-Type",
            value: "text/vcard",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
