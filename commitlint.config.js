const Configuration = {
    extends: ["@commitlint/cli", "@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "feat", // if you added any features
                "fix", // if you fix any bug/issue
                "docs", // if make any changes in docs
                "style", // if make any changes in css
                "refactor", // for refactorying in code
                "perf", // imporved any performance
                "test", // add any test cases
                "build", // change sin build
                "chore", // any dependency changes
                "revert", // revert the changes
                "add", // if you added new components
                "setup" // setup
            ]
        ],
        "subject-case": [2, "always", "sentence-case"]
    }
}

export default Configuration

