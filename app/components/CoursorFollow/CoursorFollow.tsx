import { useEffect, useState } from 'react';

const CursorFollow = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-50"
      style={{
        background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(218, 105, 193, 0.15), transparent 30%)`,
      }}
    />
  );
};

export default CursorFollow;
