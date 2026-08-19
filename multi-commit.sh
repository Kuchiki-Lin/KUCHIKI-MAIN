#!/bin/bash

# Loop through staged files only
git diff --cached --name-only | while IFS= read -r file; do
  echo "Staged file: $file"

  # Prompt for a commit message
  echo -n "Enter commit message for '$file': "
  read commit_message

  # Commit only that file (already staged)
  git commit "$file" -m "$commit_message"
done
