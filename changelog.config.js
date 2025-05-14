//  Config for lib in development.

module.exports = {
  maxMessageLength: 180,
  disableEmoji: true,
  format: "{type}{scope}: {emoji}{subject}",
  scopes: ["css", "file",'tailwind','ProductCard'],
  list: [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "style",
    "ci",
    "perf",
    "revert",
    "wip",
  ],
  types: {
    wip: {
      description: "work in progress  ...",
      emoji: "🚧",
      value: "wip",
    },
    chore: {
      description: "Build process or auxiliary tool changes",
      emoji: "🤖",
      value: "chore",
    },
    ci: {
      description: "CI related changes",
      emoji: "🎡",
      value: "ci",
    },
    docs: {
      description: "Documentation only changes",
      emoji: "✏️",
      value: "docs",
    },
    feat: {
      description: "A new feature",
      emoji: "🎸",
      value: "feat",
    },
    fix: {
      description: "A bug fix",
      emoji: "🐛",
      value: "fix",
    },
    perf: {
      description: "A code change that improves performance",
      emoji: "⚡️",
      value: "perf",
    },
    refactor: {
      description: "A code change that neither fixes a bug or adds a feature",
      emoji: "💡",
      value: "refactor",
    },
    release: {
      description: "Create a release commit",
      emoji: "🏹",
      value: "release",
    },
    style: {
      description: "Markup, white-space, formatting, missing semi-colons...",
      emoji: "💄",
      value: "style",
    },
    test: {
      description: "Adding missing tests",
      emoji: "💍",
      value: "test",
    },
    revert: {
      description: "Revert into this commit/branch",
      emoji: "🔄",
      value: "revert",
    },
  },
  messages: {
    type: "Select the type of change that you're committing:",
    subject: "Write a short, imperative mood description of the change:\n",
    body: "Provide a longer description of the change:\n ",
    breaking: "List any breaking changes:\n",
    footer: "Issues this commit closes, e.g #123:",
    customScope: "Select the scope this component affects:",
    confirmCommit: "The packages that this commit has affected\n",
  },
};
