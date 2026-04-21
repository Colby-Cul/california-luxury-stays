import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://bdlvwfobjqvnrffzxrfz.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkbHZ3Zm9ianF2bnJmZnp4cmZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMzUwNjAsImV4cCI6MjA4OTkxMTA2MH0.Tc4bdXUKWLhQQCVQlWbwFzcuV0Ry_gvFmuxcHKuvxHA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface GuestCapture {
  property_slug: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  booking_source?: string;
}

export async function captureGuest(data: GuestCapture): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('str_guests')
      .insert({
        property_slug: data.property_slug,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone || null,
        booking_source: data.booking_source || 'welcome_book_capture',
        created_at: new Date().toISOString(),
      });

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('captureGuest error:', err);
    return { success: false, error: err.message };
  }
}
