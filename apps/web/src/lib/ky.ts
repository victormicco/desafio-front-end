import ky from "ky";

export const apiDashboard = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 180000,
});
