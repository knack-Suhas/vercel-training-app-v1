export async function GET() {
  const data = {
    message: "Hello from a Vercel Serverless Function!",
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || "local",
    appName: process.env.APP_NAME || "local",
  };
  return Response.json(data);
}
