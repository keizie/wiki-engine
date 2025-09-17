export interface Extension {
  id: string;
  name: string;
  type: string;
  config: Record<string, unknown>;
}
