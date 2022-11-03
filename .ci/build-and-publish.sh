#!/usr/bin/env bash
set -e

if [ -z "$(which yq)" ]; then
    echo "yq could not be found"
    exit 1
fi

CURRENT_BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

case "$CURRENT_BRANCH_NAME" in
main)
    DEST="."
    ;;
release/*)
    # use the release version as folder (e.g. release/2.0.0 => versions/2.0.0)
    DEST_PATH="${CURRENT_BRANCH_NAME/release/"/versions"}"
    DEST=".${DEST_PATH}"

    # update the baseurl in _config.yml
    yq -i ".baseurl = \"${DEST_PATH}\"" _config.yml
    ;;
*)
    # exit if not on main or release/* branch
    exit 1
    ;;
esac

bundle exec jekyll build

echo "Publishing to $DEST"

git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
npx gh-pages --add --dist _site --dest $DEST --branch gh-pages --user "github-actions-bot <support+actions@github.com>"
