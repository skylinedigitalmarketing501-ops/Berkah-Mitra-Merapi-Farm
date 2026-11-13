export interface KVNamespaceLike {
  put(
    key: string,
    value: string,
    options?: { expirationTtl?: number; metadata?: Record<string, unknown> }
  ): Promise<void>;
}

export interface AssetsFetcherLike {
  fetch(input: Request | URL | string, init?: RequestInit): Promise<Response>;
}

export interface CloudflareEnv {
  APP_URL?: string;
  CONTACT_NOTIFICATION_WEBHOOK_URL?: string;
  RESEND_API_KEY?: string;
  CONTACT_EMAIL_TO?: string;
  CONTACT_EMAIL_FROM?: string;
  INQUIRIES_KV?: KVNamespaceLike;
  ASSETS: AssetsFetcherLike;
}

export interface PagesContext {
  request: Request;
  env: CloudflareEnv;
  params: Record<string, string | string[]>;
  waitUntil(promise: Promise<unknown>): void;
}
