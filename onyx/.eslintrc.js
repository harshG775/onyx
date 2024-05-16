// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    extends: "expo",
    rules: {
        "no-unused-vars": [
            "warn",
            { vars: "all", args: "after-used", ignoreRestSiblings: false },
        ],
    },
};
