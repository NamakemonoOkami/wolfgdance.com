#!/bin/bash

#!/bin/bash

echo "🚀 Starting Git push process with large file warnings..."

# 1️⃣ Initialize Git if not already initialized
if [ ! -d ".git" ]; then
    echo "🔹 Initializing Git repository..."
    git init
fi

# 2️⃣ Set up GitHub SSH remote (modify if using HTTPS)
echo "🔹 Setting up remote repository..."
git remote remove origin 2>/dev/null  # Remove old remote if exists
git remote add origin git@github.com:NamakemonoOkami/wolfgdance.com.git

# 3️⃣ Ensure SSH key is added
echo "🔹 Checking SSH access to GitHub..."
ssh -T git@github.com || echo "❌ SSH authentication failed! Make sure your SSH key is added to GitHub."

# 4️⃣ Pull latest changes from GitHub
echo "🔹 Pulling latest changes with rebase..."
git pull --rebase origin main || echo "⚠️ No existing remote branch or error pulling."

# 5️⃣ Increase Git buffer size for large files
echo "🔹 Increasing Git buffer size..."
git config --global http.postBuffer 524288000
git config --global http.maxRequestBuffer 524288000
git config --global core.compression 0

# 6️⃣ Find and list large files (above 100MB)
echo "🔹 Scanning for large files (over 100MB)..."
LARGE_FILES=$(git rev-list --objects --all | sort -k 2 -n | awk '{print $2}' | xargs du -h 2>/dev/null | sort -rh | awk '$1 ~ /M$/ {if ($1+0 > 100) print $2}')

if [ -n "$LARGE_FILES" ]; then
    echo "⚠️ The following files are over 100MB and may cause push failures:"
    echo "$LARGE_FILES"
    echo "❗ GitHub does NOT allow files over 100MB. Do you want to continue pushing? (y/n)"
    read -r CONTINUE_PUSH
    if [[ "$CONTINUE_PUSH" != "y" ]]; then
        echo "❌ Push canceled. Please remove or compress large files before retrying."
        exit 1
    fi
else
    echo "✅ No large files detected!"
fi

# 7️⃣ Add and commit changes
echo "🔹 Staging and committing files..."
git add .
git commit -m "Updated $(date +'%Y-%m-%d')"

# 8️⃣ Push safely to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Done! Your repository is now updated on GitHub!"

