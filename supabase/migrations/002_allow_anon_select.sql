-- Allow anon reads for the admin portal
-- The admin portal is password-gated locally; str_guests data is not public-facing
create policy "allow_anon_select" on public.str_guests
  for select
  to anon
  using (true);
