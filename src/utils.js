export function getCurrentUrl() {
  return typeof window !== 'undefined' ? window.location.href : '';
}

export function parseCookies() {
  const cookies = typeof document !== 'undefined' ? document.cookie.split('; ') : [];
  const cookieObj = {};

  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split('=');
    const name = decodeURIComponent(parts[0]);
    const value = decodeURIComponent(parts[1]);
    cookieObj[name] = value;
  }

  return cookieObj;
}
