export function initCodeInspector() {
  if (typeof window !== 'undefined' && (window as any).__code_inspector_init) {
    (window as any).__code_inspector_init();
  }
}
