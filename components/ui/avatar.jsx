// Example content for Avatar component
export function Avatar({ children }) {
  return <div className="avatar">{children}</div>;
}

export function AvatarImage({ src, alt }) {
  return <img className="avatar-image" src={src} alt={alt} />;
}

export function AvatarFallback({ children }) {
  return <div className="avatar-fallback">{children}</div>;
} 