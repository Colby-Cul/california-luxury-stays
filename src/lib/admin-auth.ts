// Admin authentication helpers
// Password is stored client-side for now (GitHub Pages / no-backend mode)
// In production SaaS: replace with JWT/session auth

const SESSION_KEY_PREFIX = 'cls-admin-auth-v1';

// Per-tenant passwords — extend when adding tenants
const TENANT_PASSWORDS: Record<string, string> = {
  cls: 'cls-admin-2024',
};

export function isAuthenticated(tenantId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(`${SESSION_KEY_PREFIX}-${tenantId}`) === '1';
  } catch {
    return false;
  }
}

export function login(tenantId: string, password: string): boolean {
  const expected = TENANT_PASSWORDS[tenantId] ?? TENANT_PASSWORDS['cls'];
  if (password === expected) {
    try {
      sessionStorage.setItem(`${SESSION_KEY_PREFIX}-${tenantId}`, '1');
    } catch {}
    return true;
  }
  return false;
}

export function logout(tenantId: string): void {
  try {
    sessionStorage.removeItem(`${SESSION_KEY_PREFIX}-${tenantId}`);
  } catch {}
}
