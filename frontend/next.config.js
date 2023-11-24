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
            value: xFrameOptionsValues,
          },
          {
            key: "Permissions-Policy",
            value: permissionPolicyValues,
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityValues,
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: accessControlOriginValue,
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {},
};

module.exports = nextConfig;
