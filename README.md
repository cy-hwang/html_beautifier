# html_beautifier

```
chironstudio 상 기존 html prettier 용 markup_beauty 라이브러리 대체 모듈
```

## 변경 사유

- 기존 lay 파일 수정 시, div 태그 내 attribute 정렬이 랜덤하게 수정됨
- 이에 따라 형상관리 시 수정하지 않은 항목들도 변경되었다 표기됨에 따라 lay 파일 형상관리에 어려움 존재

## 사용 모듈

https://www.npmjs.com/package/js-beautify : beautifier
https://www.npmjs.com/package/pretty : js-beautify의 html 용 wrapper 모듈

=> 기 사용항목(PrettyDiff): 주간 다운 1774건
=> 변경 항목(js-beautify, pretty): 주간 다운 각 160만, 60만 건

## 적용

1. pretty 종속성 install
2. pretty 모듈을 index.js에 구현
3. chironstudio 내 index.html에서 script 태그로 호출할 수 있도록 webpack 번들링
   1. script 태그 사용 위한 번들링 설정
   2. script 태그로 호출 가능한 변수 설정: output.libraryTarget, output.library
   3. es5 설정 적용: output.environment
4. es6 -> es5: babel
   1. preset-env 통한 대응 버전 설정
   2. Object.assign 등을 위한 polyfill 추가

=> chironstudio에서 사용하는 항목이므로 minify 및 최적화 미적용
