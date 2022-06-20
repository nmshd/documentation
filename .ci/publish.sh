set -e

CURRENT_BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

case "$CURRENT_BRANCH_NAME" in
main)
    DEST="."
    ;;
release/*)
    # use the release version as folder (e.g. release/2.0.0 => versions/2.0.0)
    DEST="${CURRENT_BRANCH_NAME/release/"./versions"}"
    ;;
*)
    # exit if not on main or release/* branch
    exit 1
    ;;
esac

echo "Publishing to $DEST"

git remote set-url origin https://git:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git
npm i -g gh-pages
gh-pages --dist _site --dest $DEST --branch gh-pages --user "github-actions-bot <support+actions@github.com>"
