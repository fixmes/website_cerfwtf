import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseNovel } from '../lib/engine.mjs';
import Novel from './novel';
export default function Page() { return <Novel frames={parseNovel(readFileSync(join(process.cwd(), 'source/novel.txt'), 'utf8'))} />; }
