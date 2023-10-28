## 터미데이터 팀 GDSC 개발 레포지토리

뚱땅뚱땅 개발중. 곧 리드미 작성예정

### fork

```
일단 협업을 하면서 해당 프로젝트에 기여하고자 한다면 아마 가장 먼저 fork를 통해 레포지토리를 가져와야할 것이다.

fork는 이름처럼 마치 포크로 찍어서 가져온다는 느낌으로 다른 사람의 저장소에 있는 파일들을 내 저장소로 가져오는 것이다.
```

### clone

```
git clone <레포지토리 URL>
```

### remote

```
// 원격저장소 remote등록
git remote add <이름> <저장소 URL>

// 원격저장소 확인
git remote -v
```

### branch
```
// 브랜치 생성
git branch <브랜치명>

// 브랜치 이동
git checkout <브랜치명>

// 생성과 동시에 이동하는 단축어
git checkout -b <브랜치명>
 
// 브랜치 리스트 확인
git branch
```

### add, commit, push
```
git add .
git commit -m "commit내용"
git push origin <브랜치명>
```

### 병합 요청
```
6. pull request(PR) 보내기
이렇게 push까지 마치고 나면 내 github저장소의 위에 compare & pull request버튼이 생성되어 있다.
```

### merge
```
pull(동기화)
merge가 완료되면 내 로컬 파일에도 다른 사람이 추가한 내용이 반영될 것이다.

git pull <원본 remote명칭> <브랜치명>
branch 삭제
그리고 해당 작업이 끝난 branch는 삭제해준다.

git branch -d <브랜치명>
```