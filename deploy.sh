echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# shellcheck disable=SC2164
cd public/
git add .
git commit -m "$1"
git push origin HEAD:master

# shellcheck disable=SC2103
cd ..
git add .
git commit -m "$1"
git push origin master
