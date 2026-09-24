export function parseNovel(source) {
  const frames = []; let scene = 1; let prose = [];
  const push = (text, voice = 'narrator') => { if (text.trim()) frames.push({ id: frames.length, scene, voice, text: text.trim() }); };
  const flush = () => { push(prose.join('\n')); prose = []; };
  for (const raw of source.replace(/\r/g, '').split('\n')) {
    const line = raw.trim();
    const header = line.match(/^сцена\s+(\d+)/i);
    if (header) { flush(); scene = Number(header[1]); continue; }
    if (!line) { flush(); continue; }
    const dialogue = line.match(/^(ксива(?:\s*\([^)]+\))?|кто-то\s*\(в прошлом\)|голос коммуникатора)\s*:\s*(.*)$/i);
    if (dialogue) {
      flush(); const name = dialogue[1];
      const voice = name.includes('другого цвета') ? 'shadow' : name.startsWith('кто-то') ? 'stranger' : name.includes('прошлом') ? 'past' : name.startsWith('голос') ? 'radio' : 'ksiva';
      push(dialogue[2].replace(' /сноска *католит', ''), voice);
    } else { prose.push(line); }
  }
  flush(); return frames;
}
export function move(index, direction, length) { return Math.max(0, Math.min(length - 1, index + direction)); }
