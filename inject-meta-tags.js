import fs from "fs";
import path from "path";

const htmlPath = path.resolve("out/index.html"); // or "out/index.html"
let html = fs.readFileSync(htmlPath, "utf8");

const metaBlock = `
<meta property="og:url" content="https://integreat.ing" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Integreat AI Solutions & Consulting" />
<meta property="og:description" content="Transform repetitive customer handling into intelligent automation — Integreat helps businesses integrate AI chatbots, booking systems, and CRM workflows in under 7 days." />
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/c57d206b-0f3f-4576-b8f2-b645b8227f59.png?token=uWy6k09rawz_ohtIdWVAQJqMmISGoilaPKEygu2MnH0&height=800&width=1200&expires=33295753468" />
<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="integreat.ing" />
<meta property="twitter:url" content="https://integreat.ing" />
<meta name="twitter:title" content="Integreat AI Solutions & Consulting" />
<meta name="twitter:description" content="Transform repetitive customer handling into intelligent automation — Integreat helps businesses integrate AI chatbots, booking systems, and CRM workflows in under 7 days." />
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/c57d206b-0f3f-4576-b8f2-b645b8227f59.png?token=uWy6k09rawz_ohtIdWVAQJqMmISGoilaPKEygu2MnH0&height=800&width=1200&expires=33295753468" />
`;

function inject() {
    if (!fs.existsSync(htmlPath)) {
      console.error("❌ index.html not found at", htmlPath);
      process.exit(1);
    }
  
    let html = fs.readFileSync(htmlPath, "utf8");
    html = html.replace(/<\/title>/, `</title>\n${metaBlock}`);
    fs.writeFileSync(htmlPath, html);
    console.log("✅ Meta tags injected into", htmlPath);
  }
  
  // Wait 1 second before injecting (ensures .out exists)
  setTimeout(inject, 1000);
