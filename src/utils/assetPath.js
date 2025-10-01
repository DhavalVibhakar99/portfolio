// Helper function to get correct asset paths for both dev and production
export const getAssetPath = (path) => {
  // In production (GitHub Pages), use the base path
  // In development, use root path
  const base = import.meta.env.BASE_URL || '/'

  // Remove leading slash from path if it exists to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  return `${base}${cleanPath}`
}
