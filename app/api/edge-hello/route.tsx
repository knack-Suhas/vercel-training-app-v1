export const runtime = "edge"; // this is a Vercel Edge Function

export async function GET(request: Request) {
  const country = (request as { geo?: { country?: string } })?.geo?.country || "Unknown";
  return Response.json({
    message: "Hello from a Vercel Edge Function!",
    yourCountry: country,
    runtime: "edge"
  });
}
