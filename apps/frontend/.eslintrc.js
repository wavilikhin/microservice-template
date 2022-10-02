module.exports = {
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "max-len": ["error",
      {
        "code": 100,
        "tabWidth": 2,
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }],
    "no-multiple-empty-lines": ["error", {
      "max": 1,
      "maxEOF": 0
    }]
  }
}
