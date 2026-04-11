const SUPABASE_URL = "https://bdlvwfobjqvnrffzxrfz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkbHZ3Zm9ianF2bnJmZnp4cmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzUwNjAsImV4cCI6MjA4OTkxMTA2MH0.Tc4bdXUKWLhQQCVQlWbwFzcuV0Ry_gvFmuxcHKuvxHA";

export interface PropertyPhoto {
  src: string;
  alt: string;
}

export async function getPropertyPhotos(propertyId: string): Promise<PropertyPhoto[]> {
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/property_photos?property_id=eq.${propertyId}&order=sort_order&select=src,alt`,
    {
      headers: { apikey: SUPABASE_ANON_KEY },
      next: { revalidate: 60 }, // revalidate every 60 seconds
    }
  );

  if (!res.ok) {
    console.error(`Failed to fetch photos for ${propertyId}:`, res.status);
    return [];
  }

  return res.json();
}
