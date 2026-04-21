-- STR Guests table: captures contact info from welcome book gate
create table if not exists public.str_guests (
  id           uuid default gen_random_uuid() primary key,
  property_slug text not null,
  first_name   text not null,
  last_name    text not null,
  email        text not null,
  phone        text,
  booking_source text not null default 'welcome_book_capture',
  created_at   timestamptz not null default now()
);

-- Index for lookups by property
create index if not exists idx_str_guests_property_slug on public.str_guests (property_slug);
create index if not exists idx_str_guests_email on public.str_guests (email);

-- Enable Row Level Security
alter table public.str_guests enable row level security;

-- Allow anonymous inserts (guests submitting the gate form)
create policy "allow_anon_insert" on public.str_guests
  for insert
  to anon
  with check (true);

-- Only authenticated users (service role / admin) can read data
create policy "allow_service_select" on public.str_guests
  for select
  to authenticated
  using (true);
