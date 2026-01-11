import { useEffect, useRef, useState } from "react";

const symbols = [
  "+", "-", "×", "÷", "=", "∑", "√", "π", "∞", "∫",
  "✍", "🏛", "📜", "🎨", "🎭", "📚", "🏺", "🎼"
];

interface SymbolItem {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  el: HTMLSpanElement | null;
}

const MathBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [items, setItems] = useState<SymbolItem[]>([]);
    const itemsRef = useRef<SymbolItem[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Initialize symbols
    const generated = Array.from({ length: 40 }).map(() => ({
  x: Math.random() * width,
  y: Math.random() * height,
  speedX: (Math.random() - 0.5) * 0.3,
  speedY: (Math.random() - 0.5) * 0.3,
  size: Math.random() * 24 + 14,
  rotation: Math.random() * 360,
  rotationSpeed: (Math.random() - 0.5) * 0.2,
  el: null,
}));

itemsRef.current = generated;
setItems(generated); // 👈 forces render


    const animate = () => {
      itemsRef.current.forEach((item) => {
        // Move symbol
        item.x += item.speedX;
        item.y += item.speedY;

        // Wrap around edges
        if (item.x > width) item.x = 0;
        if (item.x < 0) item.x = width;
        if (item.y > height) item.y = 0;
        if (item.y < 0) item.y = height;

        // Rotate
        item.rotation += item.rotationSpeed;

        // Update DOM
        if (item.el) {
          item.el.style.transform = `translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg)`;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      {items.map((item, i) => (
        <span
          key={i}
          ref={(el) => (item.el = el)}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            fontSize: `${item.size}px`,
            pointerEvents: "none",
            userSelect: "none",
            color: "white",
            transform: `translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg)`,
            opacity: 0.9,
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </span>
      ))}
    </div>
  );
};

export default MathBackground;
