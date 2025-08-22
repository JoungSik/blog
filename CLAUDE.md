# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Hugo static site generator and hosted on GitHub Pages. The blog uses the `github-style` theme and features automated deployment via GitHub Actions.

## Key Commands

### Development Setup
```bash
# Install Hugo (macOS)
brew install hugo

# Clone repository with submodules
git clone git@github.com:JoungSik/blog.git
cd blog
git submodule update --init --recursive

# Create configuration file from template
cp hugo.template.toml hugo.toml

# Start local development server
hugo server -D
```

### Build and Deploy
```bash
# Build static site with theme
hugo -t github-style

# Build with drafts included (development)
hugo server -D -t github-style
```

### Content Creation
```bash
# Create new post
hugo new content/post/your-post-title/index.md
```

## Architecture

### Configuration System
- **hugo.template.toml**: Template configuration with environment variable placeholders
- **hugo.toml**: Generated configuration file (not committed, created from template)
- Environment variables (`GITALK_CLIENT_ID`, `GITALK_CLIENT_SECRET`) are substituted during build

### Content Structure
- **content/post/**: Blog posts organized in individual directories
- **static/**: Static assets (custom CSS, JS, images)
- **themes/github-style/**: Git submodule containing the theme
- **public/**: Generated static site (not committed)

### Theme Customization
- **static/css/custom.css**: Custom CSS for diff syntax highlighting in both light and dark modes
- **static/js/application.js**: Google Analytics initialization with localhost exclusion

### Deployment Pipeline
- **Triggered by**: Push to master branch
- **Process**: 
  1. Checkout repository with submodules
  2. Install Hugo (extended version)
  3. Generate hugo.toml from template with secrets
  4. Build static site
  5. Deploy to separate GitHub Pages repository (username.github.io)

## Post Writing Guidelines

### Front Matter Template (from archetypes/default.md)
```yaml
---
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ replace .Name " " "-" }}"
date: {{ .Date }}
draft: true
pin: false
summary: ""
keywords: [""]
tags: [""]
---
```

### Directory Structure for Posts
Each post should be in its own directory under `content/post/` with:
- `index.md`: Main content file
- Images and assets in the same directory

## Theme Integration

- **Theme**: github-style (MeiK2333/github-style)
- **Features**: Gitalk comments, search functionality, dark/light mode support
- **Customizations**: Added diff syntax highlighting styles

## Important Files to Preserve

- **hugo.template.toml**: Contains environment variable placeholders for secrets
- **.github/workflows/deploy.yml**: Automated deployment configuration
- **static/css/custom.css**: Custom styling for code diffs
- **static/js/application.js**: Analytics configuration

## Development Notes

- The blog is written primarily in Korean
- Uses Gitalk for comments (requires GitHub OAuth app configuration)
- Google Analytics integration with development environment exclusion
- Automated deployment to GitHub Pages via separate repository