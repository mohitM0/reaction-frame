import { fetchMetadata } from "frames.js/next";
 
export async function generateMetadata() {
  return {
    title: "Reaction Frame",
    
    other: await fetchMetadata(
      new URL(
        "/frames",
        process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
          : "http://localhost:3000"
      )
    ),
  };
}
 
export default function Page() {
  return <span>Reaction Frame Page</span>;
}