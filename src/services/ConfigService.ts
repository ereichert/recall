const config = new Map([
  ['appName', 'RECALL 1.0 Dev'],
]);

export function initConfig(isProdMode: boolean): void {
  if (isProdMode) {
    config.set('appName', 'RECALL 1.0 Prod');
  }
}

export function get(key: string): string | undefined {
  return config.get(key);
}
