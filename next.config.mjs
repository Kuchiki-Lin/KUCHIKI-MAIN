/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 16 writes AGENTS.md and CLAUDE.md into the repo root on `next dev`
  // and re-creates them if you simply delete the files. Project documentation
  // lives in docs/ instead — see docs/README.md.
  agentRules: false,
};

export default nextConfig;
