export class ConfigKeys {
  static APP_NAME = 'appName'

  static DB_LOCATION = 'dbLocation';
}

const config = new Map([
  [ConfigKeys.APP_NAME, 'RECALL 1.0 Dev'],
  [ConfigKeys.DB_LOCATION, './data/recall_test.db'],
]);

export function initConfig(isProdMode: boolean): void {
  if (isProdMode) {
    config.set(ConfigKeys.APP_NAME, 'RECALL 1.0 Prod');
  }
}

export function get(key: string): string | undefined {
  return config.get(key);
}
