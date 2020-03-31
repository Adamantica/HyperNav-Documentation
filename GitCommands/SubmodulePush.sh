git submodule foreach --recursive "git add -A || :"
git submodule foreach --recursive "git commit -m '$1' || :"
git submodule foreach --recursive "git push"