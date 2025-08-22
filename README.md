# 개인 블로그

[Hugo](https://gohugo.io/)로 제작되었으며 [GitHub Pages](https://pages.github.com/)에서 호스팅되는 개인 블로그입니다. [github-style](https://themes.gohugo.io/themes/github-style/) 테마를 사용하고 있습니다.


## 🛠️ 기술 스택

- [Hugo](https://gohugo.io/) - 정적 사이트 생성기
- [GitHub Pages](https://pages.github.com/) - 호스팅
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [Gitalk](https://gitalk.github.io/) - 댓글 시스템

## 📝 시작하기

### 필수 조건

- [Hugo](https://gohugo.io/installation/) (Extended 버전)
- Git

### 설치 방법

0. hugo 설치
```bash
brew install hugo
```

1. 저장소 클론
```bash
git clone git@github.com:JoungSik/blog.git
cd blog
```

2. 서브모듈 초기화
```bash
git submodule update --init --recursive
```

3. hugo.toml 설정 파일 생성
```bash
cp hugo.template.toml hugo.toml
```

4. 테마 적용
```bash
hugo -t github-style
```

5. 로컬 개발 서버 실행
```bash
hugo server -D
```

6. 글 생성
```bash
hugo new content/post/your-post-title/index.md
```

`http://localhost:1313`에서 블로그를 확인할 수 있습니다.

## 🚀 배포

master 브랜치에 변경사항이 push되면 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다. 자세한 워크플로우 설정은 [.github/workflows/deploy.yml](.github/workflows/deploy.yml)을 참고해주세요.
