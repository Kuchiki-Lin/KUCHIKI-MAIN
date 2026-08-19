import { useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";

export default function CartoonBox() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // determine dimensions (fall back to defaults)
    const width = svg.clientWidth || 600;
    const height = svg.clientHeight || 100;

    // rectangle size
    const rectW = 600;
    const rectH = 100;

    // compute center position
    const x = (width - rectW) / 2;
    const y = (height - rectH) / 2;

    const rc = rough.svg(svg);
    const node = rc.rectangle(x, y, rectW, rectH, {
      roughness: 2,
      fill: "",
      stroke: "black",
      strokeWidth: 3,
    });
    svg.appendChild(node);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <svg ref={svgRef} width="600" height="100" className="block"></svg>
    </div>
  );
}
