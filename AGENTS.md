# Terra update workflow

The user requests that every website update also be saved to GitHub with notes.

GitHub destination: `https://github.com/mwllng/terra-garden-builder`, private repository, remote `github`, branch `main`.

- Preserve the existing local Git history and Sites deployment workflow.
- For each completed website update, update CHANGELOG.md with the changes, relevant validation, and remaining limitations. Use meaningful commit messages.
- Push the completed update and its notes to the configured GitHub remote. If no destination is configured, obtain the repository URL from the user. Do not use an unrelated repository.
- Never force-push or discard unrelated work. Do not commit credentials, personal backyard photos, browser storage, or temporary test files.
- Verify the remote commit after pushing. Report the GitHub commit link alongside the preview/deployment link when applicable. If a push fails, state that explicitly; a successful deployment alone does not mean GitHub is backed up.
- GitHub sync is part of work performed in this project, not an unattended background service.
