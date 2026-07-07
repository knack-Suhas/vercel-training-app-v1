export async function GET(request) {
  const data = {
    message: "Hello from a Vercel Serverless Function!",
    timestamp: new Date().toISOString(),
    region: process.env.VERCEL_REGION || "local"
  };
  return Response.json(data);
}
