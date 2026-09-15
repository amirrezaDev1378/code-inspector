export { parse as parseSFC } from '@vue/compiler-sfc';
export { getEnvVariable } from 'launch-ide';
export * from './server';
export * from './shared';

export function initCodeInspector() {
  if (typeof window !== 'undefined' && (window as any).__code_inspector_init) {
    (window as any).__code_inspector_init();
  }
}
