/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    NEXTAUTH_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb+srv://en21cs301200:ayushi@cluster0.70ltsl7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    DB_URI: "mongodb+srv://en21cs301200:ayushi@cluster0.70ltsl7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

    STRIPE_WEBHOOK_SECRET: "whsec_z4wgPN6bIbx6vQSyQG7CE1UnsmIRWkB8",

    STRIPE_SECRET_KEY: "sk_test_51OZCuASHas2oKgk6pp9WJprrrtgZ1WQpOHZqZfPfDYnihjza3r4CP8ADmzS0qatLk3sr8mbY5FkSXc3bgio45LNX00C6dpp0kM",

    CLOUDINARY_CLOUD_NAME: "dt0xgxohw",
    CLOUDINARY_API_KEY: "814853432562843",
    CLOUDINARY_API_SECRET: "_6gSaARLQBo8b5Tb_gsrHIv6mFw",

    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
    REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
