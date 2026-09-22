import { useEffect, useRef } from "react";
import { calm, isCoarse } from "../hooks";

// Small dot + lagging ring. Turns "active" when hovering anything
// with data-cursor="hover" (links, buttons, tool names).
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    if (calm || isCoarse) return;
    let x = 0, y = 0, rx = 0, ry = 0, frame;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) {
        dot.current.style.left = x + "px";
        dot.current.style.top = y + "px";
      }
      const target = e.target.closest && e.target.closest('[data-cursor="hover"]');
      if (ring.current) ring.current.dataset.active = target ? "true" : "false";
    };

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) {
        ring.current.style.left = rx + "px";
        ring.current.style.top = ry + "px";
      }
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (calm || isCoarse) return null;

  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
    </>
  );
}
