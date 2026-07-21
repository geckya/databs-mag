// Prefixes an internal, root-relative path (e.g. "/issues/" or "/reviews/#foo")
// with the site's configured base path, so links and asset references keep
// working whether the site is deployed at the domain root or at a GitHub
// Pages project subpath like "/databs-mag/". Always used for INTERNAL links —
// never wrap external URLs (https://...) with this.
export function url(path) {
  const base = import.meta.env.BASE_URL; // e.g. '/' or '/databs-mag/'
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
}
