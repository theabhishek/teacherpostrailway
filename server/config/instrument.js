// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
//https://d82a7f34168d4f9019200931608b098f@o4509008920707073.ingest.us.sentry.io/4509008929554432
const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");
Sentry.init({
  dsn: "https://d82a7f34168d4f9019200931608b098f@o4509008920707073.ingest.us.sentry.io/4509008929554432",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
  ],

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
