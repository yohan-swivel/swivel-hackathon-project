/** @type {import('next').NextConfig} */

const permissionPolicyValues = process.env.NEXT_PUBLIC_PERMISSION_POLICY;
const contentSecurityValues = process.env.NEXT_PUBLIC_CONTENT_SECURITY_POLICY;
const xFrameOptionsValues = process.env.NEXT_PUBLIC_X_FRAME_OPTIONS;
const accessControlOriginValue = process.env.NEXT_PUBLIC_ACCESS_CONTROL_ORIGIN;

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/(.*)",

        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
  images: {},
};

module.exports = nextConfig;
