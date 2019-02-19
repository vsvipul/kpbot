# kpbot

kpbot is a GitHub workflow bot application
for the [KamandPrompt organization](https://github.com/KamandPrompt) and its repositories. Written in
Node.js, the bot manages issues and pull requests in the repository in order to
create a better workflow for kp contributors.

**kpbot**'s purpose is to work around various limitations in GitHub’s binary
permissions and notifications systems to create a better workflow for our
contributors. It allows anyone to perform issue triage (self-assigning and
labeling issues), not just the core contributors trusted with full write access
to the repository (which is the only model GitHub supports). Additionally,
**kpbot** monitors the activity of issues and pull requests, notifying
contributors about new merge conflicts, and more.

## Installation

1. Add the repository to your server.
2. Create a secrets.json file in config/ directory.
3. Create a webhook in the organization.