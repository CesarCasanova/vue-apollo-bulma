// apollo.config.js

module.exports = {
  client: {
    service: {
      name: 'lawyer-app',
      // URL to the GraphQL API
      url: "http://balancer/gateway/graphql",
      headers: {
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIwNTQ2MDMsIm5iZiI6MTU4MjA1NDYwMywiZXhwIjoxNTgyMDYxODAzLCJqdGkiOiI2NjBjMGMzMzU2YzY4YmFlMWI0NTdhMjdjZGFjZGI4NjFhNjE1MGNlMDAyMjM3YTM0NTdmNmI2MTY0N2VhMTVlMTI4NTQ0MmU3MDQ5OTk2OCIsInN1YiI6bnVsbCwiaXNzIjoiaHR0cDpcL1wvYmFsYW5jZXIiLCJkYXRhIjoiTzozMTpcIkFwcFxcRG9tYWluXFxFbnRpdGllc1xcQWNjZXNzVG9rZW5cIjo4OntzOjU6XCJcdTAwMDAqXHUwMDAwaWRcIjtzOjgwOlwiNjYwYzBjMzM1NmM2OGJhZTFiNDU3YTI3Y2RhY2RiODYxYTYxNTBjZTAwMjIzN2EzNDU3ZjZiNjE2NDdlYTE1ZTEyODU0NDJlNzA0OTk5NjhcIjtzOjk6XCJcdTAwMDAqXHUwMDAwdXNlcklkXCI7TjtzOjExOlwiXHUwMDAwKlx1MDAwMGNsaWVudElkXCI7aTozO3M6MTQ6XCJcdTAwMDAqXHUwMDAwZGV2aWNlVG9rZW5cIjtzOjExOlwiZGV2aWNlLWNhc2FcIjtzOjk6XCJcdTAwMDAqXHUwMDAwcm9sZUlkXCI7aToxO3M6MTA6XCJcdTAwMDAqXHUwMDAwcmV2b2tlZFwiO2I6MDtzOjEyOlwiXHUwMDAwKlx1MDAwMGV4cGlyZXNBdFwiO086MTM6XCJDYXJib25cXENhcmJvblwiOjM6e3M6NDpcImRhdGVcIjtzOjI2OlwiMjAyMC0wMi0xOCAyMTozNjo0My4wNjYzNDNcIjtzOjEzOlwidGltZXpvbmVfdHlwZVwiO2k6MztzOjg6XCJ0aW1lem9uZVwiO3M6MzpcIlVUQ1wiO31zOjM2OlwiXHUwMDAwQXBwXFxEb21haW5cXEVudGl0aWVzXFxBY2Nlc3NUb2tlblx1MDAwMG5vd1wiO086MTM6XCJDYXJib25cXENhcmJvblwiOjM6e3M6NDpcImRhdGVcIjtzOjI2OlwiMjAyMC0wMi0xOCAxOTozNjo0My4wNjYzNjlcIjtzOjEzOlwidGltZXpvbmVfdHlwZVwiO2k6MztzOjg6XCJ0aW1lem9uZVwiO3M6MzpcIlVUQ1wiO319In0.NkL2noujTraxS3N3ql3JZQsqA_eM3Ixydq77m-hAEjQ'
      },
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}
