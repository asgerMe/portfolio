import { readdir, readFile, writeFile } from 'node:fs/promises';

const file = new URL('../node_modules/vinext/dist/routing/file-matcher.js', import.meta.url);
const source = await readFile(file, 'utf8');

if (!source.includes('from "fast-glob"')) {
  const patched = source
    .replace('import { glob } from "node:fs/promises";', 'import glob from "fast-glob";')
    .replace('import { glob } from "tinyglobby";', 'import glob from "fast-glob";')
    .replace(
      /for await \(const file of glob\(pattern, \{\s*cwd,\s*\.\.\.exclude \? \{ exclude \} : \{\}\s*\}\)\) yield toSlash\(file\);/,
      `for (const file of await glob(pattern, { cwd, dot: true })) {
    const normalized = toSlash(file);
    if (!exclude || !normalized.split("/").some(exclude)) yield normalized;
  }`,
    );

  if (patched === source || patched.includes('from "node:fs/promises"')) {
    throw new Error('Could not apply the Node 20 compatibility patch to vinext.');
  }

  await writeFile(file, patched);
}

// Rolldown uses Node 20.13's multi-style overload. Node 20.12 only accepts
// one style at a time, so compose multiple styles in its small wrapper.
const rolldownDir = new URL('../node_modules/rolldown/dist/shared/', import.meta.url);
for (const name of await readdir(rolldownDir)) {
  if (!name.startsWith('rolldown-build-') || !name.endsWith('.mjs')) continue;
  const rolldownFile = new URL(name, rolldownDir);
  const rolldownSource = await readFile(rolldownFile, 'utf8');
  const rolldownPatched = rolldownSource.replace(
    'return styleText(...args);',
    'const [format, value] = args;\n\treturn Array.isArray(format) ? format.reduceRight((text, style) => styleText(style, text), value) : styleText(format, value);',
  );
  if (rolldownPatched !== rolldownSource) {
    await writeFile(rolldownFile, rolldownPatched);
  }
}
