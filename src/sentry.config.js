const {withSentryConfig} = require("@sentry/nextjs");

const moduleExports={
    // aaaaaaaaa
}

const SentryWebpackPluginOptions = {
    silent: true, //sssssss
}

module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions)