/**
 * EXAMPLE CUSTOM ZULIPBOT CONFIGURATION — Zulip
 *
 * See https://github.com/zulip/zulipbot/wiki/configuration for detailed
 * explanations on each option.
 */

exports.issues = {
  commands: {
    assign: {
      claim: ["claim"],
      abandon: ["abandon", "unclaim", "abort"],
      limit: 1,
      newContributors: {
        permission: "pull",
        restricted: 1,
        warn: {
          labels: ["help wanted", "good first issue"],
          force: true
        }
      }
    },
    label: {
      add: ["label", "add"],
      remove: ["unlabel", "remove"]
    }
  },
  area: {
    labels: new Map([]),
    references: false
  }
};

exports.pulls = {
  status: {
    mergeConflicts: {
      label: "has conflicts",
      comment: true
    },
    wip: "[WIP]",
    size: {
      labels: new Map([
        ["size: XS", 0],
        ["size: S", 5],
        ["size: M", 25],
        ["size: L", 50],
        ["size: XL", 100]
      ]),
      exclude: []
    }
  },
  references: {
    required: true,
    labels: {
      exclude: [
        "in progress",
        "good first issue",
        "good sprint project",
        "help wanted"
      ]
    }
  },
  ci: {
    travis: "travis updates"
  }
};

exports.activity = {
  inactive: "inactive",
  check: {
    repositories: [
      "KamandPrompt/CodeManiacs",
      "KamandPrompt/MediCenter",
      "KamandPrompt/kamandprompt.github.io",
      "KamandPrompt/blog",
      "KamandPrompt/sntc",
      "KamandPrompt/Faculty-Availability",
      "KamandPrompt/GraphMate",
      "KamandPrompt/baat-cheet"
    ],
    interval: 6,
    reminder: 4,
    limit: 3
  },
  issues: {
    inProgress: "in progress",
    clearClosed: true
  },
  pulls: {
    autoUpdate: false,
    reviewed: {
      label: "reviewed"
    },
    needsReview: {
      label: "needs review",
      ignore: true
    }
  }
};

exports.eventsDelay = 3;
