const { shareAll, withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './Module': './projects/mfe1/src/app/flights/flights.module.ts',
  },

    // Explicitly share packages:
    shared: share({
      '@angular/core': {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      },
      '@angular/common': {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      },
      '@angular/common/http': {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      },
      '@angular/router': {
        singleton: true,
        strictVersion: true,
        requiredVersion: 'auto',
      },
      '@angular/animations': {
        singleton: true,
        strictVersion: true,
        requiredVersion: "^14.2.0",
      },
      '@angular/cdk': {
        singleton: true,
        strictVersion: true,
        requiredVersion: "^13.0.0",
      },
      '@angular/material': {
        singleton: true,
        strictVersion: true,
        requiredVersion: "^13.0.0",
      },
    })

});
