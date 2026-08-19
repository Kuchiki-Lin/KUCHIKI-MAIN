import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

// simple cartoon-style button that draws its own rough border
function CartoonButton({ href, children, className = "" }) {
  const btnRef = useRef(null);
  const svgRef = useRef(null);

  // redraw whenever size or content changes
  useEffect(() => {
    const btn = btnRef.current;
    const svg = svgRef.current;
    if (!btn || !svg) return;

    const draw = () => {
      svg.innerHTML = "";
      const { width, height } = btn.getBoundingClientRect();
      const rc = rough.svg(svg);
      const node = rc.rectangle(0, 0, width, height, {
        roughness: 2,
        stroke: "black",
        strokeWidth: 2,
        fill: "none",
      });
      svg.appendChild(node);
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(btn);
    return () => ro.disconnect();
  }, [children]);

  return (
    <a
      ref={btnRef}
      href={href}
      className={`relative inline-block ${className} transform transition hover:scale-105 hover:-rotate-1`}
    >
      {children}
      <svg
        ref={svgRef}
        className="absolute inset-0 pointer-events-none"
        preserveAspectRatio="none"
      />
    </a>
  );
}

export default function CartoonCard({
  survey,
  index = 0,
  coloredMode = true,
  userRank = null,
}) {
  const brightColors = [
    "rgba(255, 107, 107, 0.3)", // red
    "rgba(78, 205, 196, 0.3)", // teal
    "rgba(69, 183, 209, 0.3)", // blue
    "rgba(255, 160, 122, 0.3)", // orange
    "rgba(152, 216, 200, 0.3)", // green
    "rgba(247, 220, 111, 0.3)", // yellow
    "rgba(187, 143, 206, 0.3)", // purple
    "rgba(133, 193, 233, 0.3)", // light blue
  ];
  const svgRef = useRef(null);

  // draw card border responsively
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const draw = () => {
      svg.innerHTML = "";
      const { width, height } = svg.getBoundingClientRect();

      // account for whatever padding the parent container actually has
      const parent = svg.parentElement;
      let padX = 0,
        padY = 0;
      if (parent) {
        const style = getComputedStyle(parent);
        padX = parseFloat(style.paddingLeft) || 0;
        padY = parseFloat(style.paddingTop) || 0;
      }

      const rc = rough.svg(svg);
      const colorIndex = index % brightColors.length;
      const fillColor = coloredMode
        ? brightColors[colorIndex]
        : "rgba(255, 255, 255, 0.5)";
      const node = rc.rectangle(
        padX,
        padY,
        Math.max(0, 300 - padX * 2),
        Math.max(0, 200 - padY * 2),
        {
          roughness: 2,
          stroke: "black",
          strokeWidth: 2,
          fill: fillColor,
          fillStyle: "solid",
        },
      );
      svg.appendChild(node);
    };

    draw();
    const resizeObserver = new ResizeObserver(draw);
    resizeObserver.observe(svg);
    return () => resizeObserver.disconnect();
  }, [coloredMode]);

  return (
    <div
      className="relative w-auto max-w-[400px] min-w-[260px] p-4 flex flex-col justify-between
  
                 hover:scale-105 hover:rotate-1 transition overflow-hidden"
    >
      {/* Rough border */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      />

      {/* Card content */}
      <div className=" flex flex-col h-full">
        {userRank != null && (
          <div
            className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${
              userRank <= 3
                ? "bg-yellow-400 text-white shadow-lg animate-pulse"
                : "bg-gray-200 text-gray-800"
            }`}
            style={{ fontFamily: "Caveat, cursive" }}
          >
            #{userRank}
          </div>
        )}
        <h2 className="font-bold text-lg text-black mb-2 truncate w-[266px] flex justify-center">
          {survey.title || "Untitled Survey"}
        </h2>
        <p className="text-sm text-gray-700 mb-4">
          👥 {survey.participantsCount} Participants
        </p>

        <div className=" flex gap-3">
          <CartoonButton
            href={`/survpages/ranked?surveyId=${survey.id}`}
            className="flex-1 max-w-[45%] ml-5"
          >
            Rankings
          </CartoonButton>
          <CartoonButton
            href={`/survpages/responseCol?surveyId=${survey.id}`}
            className="flex-1 max-w-[45%] px-4 py-2 "
          >
            Play
          </CartoonButton>
        </div>
      </div>
    </div>
  );
}
