import { cp, rm } from "node:fs/promises";
import tailwind from "bun-plugin-tailwind";

const outdir = "dist";

const baseUrl = (
	process.env.BASE_URL ??
	(process.env.VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
		: "")
).replace(/\/$/, "");

await rm(outdir, { recursive: true, force: true });

const result = await Bun.build({
	entrypoints: ["./index.html"],
	outdir,
	minify: true,
	plugins: [tailwind],
});

if (!result.success) {
	for (const log of result.logs) console.error(log);
	process.exit(1);
}

const html = Bun.file(`${outdir}/index.html`);
await Bun.write(html, (await html.text()).replaceAll("%BASE_URL%", baseUrl));

await cp("public", outdir, { recursive: true });

console.log(`Built to ${outdir}/ (BASE_URL: ${baseUrl || "(relative)"})`);
