For English: [README.en.md](./README.en.md)

# swm-v2
- soild-start
- unocss
- bun

## Developing

리포지토리를 클론하고 bun으로 dependencies를 설치한 후 개발 서버를 시작하려면:

```bash
bun dev

# 또는 서버를 시작하고 새 브라우저 탭에서 앱을 열려면
bun dev -- --open
```

## Building
Solid 앱은 다양한 환경에 배포할 수 있도록 프로젝트를 최적화하는 _adapters_로 빌드됩니다.

기본적으로 `bun run build`는 `bun start`로 실행할 수 있는 Node* 앱을 생성합니다. 다른 어댑터를 사용하려면 `package.json`의 `devDependencies`에 해당 _adapter_를 추가하고 `vite.config.js`에 지정하세요.

## Commit
Refernce: [nabi-chan/ch-four-cuts](https://github.com/nabi-chan/ch-four-cuts/blob/main/README.md#commit-convention)

-  `feat`: 새로운 기능
-  `fix`: 버그 / 이슈 수정
-  `docs`: 문서만 변경하는 경우
-  `style`: 코드의 로직을 변경하지 않는 코드의 수정사항 (공백, 포맷팅, 세미콜론 추가, 등등)
-  `refactor`: 버그 또는 기능 추가가 아닌 코드의 수정사항
-  `perf`: 코드의 성능을 개선하는 수정사항
-  `test`: 새롭게 테스트를 추가하거나 변경
-  `chore`: 패키지 매니저 수정, 설정 파일 수정과 같이 설정과 관련된 수정사항

