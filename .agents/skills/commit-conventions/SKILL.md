---
name: commit-conventions

description: Apply the team's commit message conventions whenever creating, suggesting, reviewing, or correcting Git commits.
---

# Commit Conventions

## Standard

Follow Conventional Commits.

All commit messages must be written in English.

## Format

Use the following format:

type(scope): description

The scope is optional:

type: description

For breaking changes, add ! after the type or scope:

feat(api)!: change authentication response format

## Allowed types

Use only these types:

- feat: Introduces a new feature.
- fix: Fixes a bug.
- docs: Changes documentation.
- refactor: Restructures code without changing its external behavior.
- test: Adds or modifies tests.
- chore: Maintenance tasks that do not affect application functionality.
- style: Formatting changes that do not affect code behavior.
- perf: Improves application performance.

Do not invent additional types.

## Writing Rules

1. Write descriptions in English.
2. Use imperative mood (e.g., add, fix, update, remove).
3. Keep the subject concise and descriptive.
4. Start the description with a lowercase letter.
5. Do not end the subject with a period.
6. Use a scope when it helps identify the affected module or component.
7. Describe the actual changes, not assumptions about their purpose.
8. Avoid vague descriptions such as update code, fix stuff, or changes.
9. Do not include unnecessary details in the subject.

## Worlflow

Whenever asked to create or suggest a commit message, follow these steps:

### 1. Inspect the Git state

- Run `git status` to understand the repo's current state.
- Identify staged and unstaged changes.
- Use `git diff --cached` to inspect staged changes.
- Never assume unstaged changes are part of the commit.
- If there are no staged changes, inform the user and ask whether they want to stage changes or analyze the unstaged diff instead.

### 2. Understand the changes

Analyze the staged diff and identify:

- What was added, modified, or removed.
- The primary purpose of the changes.
- The affected module or component.
- Whether the changes introduce a new feature, fix a bug, or represent another type of change.
- Whether there are breaking changes.

If changes contain multiple unrelated objectives, suggest splitting them into separate commits.

### 3. Determine the commit type

Choose the most appropriate type based on the actual changes.

Do not automatically classify every code modification as `feat` or `fix`.

If the purpose of the changes is unclear, ask the user instead of guessing.

### 4. Write the commit message

- Follow the required format.
- Use an appropriate scope when applicable.
- Write a concise description in imperative mood.
- Include a body only when additional context is necessary.
- Include a footer when referencing issues or documenting breaking changes.

### 5. Validate the message

Before presenting the result, verify:

- The type belongs to the allowed list.
- The scope accurately represents the affected area, if included.
- The description is written in English.
- The description uses imperative mood.
- The subject is concise and descriptive.
- The subject does not end with a period.
- The message accurately represents the inspected changes.

If any rule is violated, correct the message before presenting it.

## Commit Grouping

When multiple files are related to the same logical change, group them into a single commit.

Rules:

1. Group all files that contribute to the same feature, bug fix, refactoring, test, or maintenance task.
2. Do not create one commit per file.
3. Determine commit boundaries based on logical changes, not the number of modified files.
4. A single commit may include multiple files, directories, or components.
5. Keep unrelated changes in separate commits.
6. If changes contain multiple independent objectives, separate them into different commits.
7. Before committing, review the complete staged diff to ensure all related files are included and unrelated changes are excluded.

## Breaking Changes

When a change introduces an incompatible modification to the existing API or behavior:

- Add ! after the type or scope.
- Explain the breaking change in the commit body.
- Include a `BREAKING CHANGE`: footer when appropriate.

### Example

feat(api)!: change authentication response format

BREAKING CHANGE: authentication responses now return a different JSON structure.

## Examples

### Valid commits

feat(auth): add user registration

fix(api): handle invalid credentials

docs(readme): update installation instructions

refactor(users): simplify user validation

test(auth): add login integration tests

chore(deps): update dependencies

style(ui): format navigation components

perf(database): optimize user queries

### Invalid commits

feat(auth): Added user registration

- Reason: Uses past tense instead of imperative mood.

fix(api): fix bug.

- Reason: Vague description and unnecessary period.

update: improve the application

- Reason: update is not an allowed type.

docs(readme): Updated installation instructions

- Reason: Uses past tense instead of imperative mood.

## Output Format

When suggesting a commit, present the result in a copy-friendly code block.

Example:

```bash
feat(auth): add user registration
```

If additional explanation is necessary, provide it separately and keep it concise.

## Execution Rules

- Never execute `git push` under any circumstances.
- Never push commits, branches, or tags to remote repositories.
- Pushing changes is exclusively the user's responsibility.
- You may prepare commits locally, but always leave synchronization with remote repositories to the user.
- Never invent changes that are not present in the inspected diff.
- Never include unstaged changes in a commit message unless explicitly authorized by the user.
- Never stage files, modify the Git index, or execute git commit unless explicitly requested.
- When asked to review an existing commit, evaluate its message against these conventions and suggest a corrected version if necessary.
