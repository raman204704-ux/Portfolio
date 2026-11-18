// Regenerates knowledge.md from js/projects.js. Run from the repo root: node backend/build_knowledge.js
// Edit FACTS below so it matches your site, then run it again whenever you change projects.js.
const fs = require("fs");
const FACTS = `# Jatin Minhas
- Role: AI / ML engineer (Python, machine learning, FastAPI, Django, Generative AI)
- Experience: AI/ML Intern at CS Infotech, Chandigarh (Jan 2026 to June 2026)
- Education: MCA, Himachal Pradesh Technical University, Hamirpur (Aug 2024 to Jul 2026); BSc Computer Science, DAV College, Jalandhar (Aug 2020 to Jul 2023)
- Email: jatinminhas17@gmail.com
- LinkedIn: https://www.linkedin.com/in/jatin-minhas-0293711ab
- Portfolio: https://raman204704-ux.github.io/Portfolio/
- Open to opportunities in AI engineering, machine learning and backend development.`;
const src = fs.readFileSync(__dirname + "/../js/projects.js", "utf8");
const { projects, skills } = new Function(src + ";return {projects,skills}")();
let out = FACTS + "\n\n## Projects\n";
for (const p of projects)
  out += `\n### ${p.name} (${p.status}; ${p.g === "work" ? "internship work" : "personal project"})\n${p.desc}\n` +
    p.pts.map(x => "- " + x).join("\n") + `\nTech: ${p.tech.join(", ")}\n`;
out += "\n## Skills\n" + Object.entries(skills).map(([k, v]) => `- ${k}: ${v.join(", ")}`).join("\n") + "\n";
fs.writeFileSync(__dirname + "/knowledge.md", out);
console.log("knowledge.md written:", out.length, "chars");
