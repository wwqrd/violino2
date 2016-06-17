#!/usr/bin/env sh

if ! git diff-index --quiet HEAD --
then
  echo 'Uncommited changes, exiting.'
  exit 1
fi
echo 'Clean, continuing'
webpack --optimize-minimize --optimize-occurrence-order --optimize-dedupe
if git diff-index --quiet HEAD --
  echo 'No changes, exiting.'
  exit 1
then
git add -A
git commit -m "Build."
