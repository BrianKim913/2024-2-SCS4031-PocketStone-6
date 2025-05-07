# Team-Sync: 사내 데이터를 활용한 팀빌딩 추천 시스템

| 이름 | 역할 | GitHub 계정 |
|------|------|------------|
| 이건희 | Team Leader, Model | [gunheee-leee](https://github.com/thisis-hee) |
| 김민형 | Backend | [Minbro-Kim](https://github.com/Minbro-Kim) |
| 김범수 | Backend | [BrianKim913](https://github.com/BrianKim913) |
| 성민제 | Frontend | [MinSungJe](https://github.com/MinSungJe) |

## 프로젝트 개요

Team-Sync는 조직 내 인적 자원을 최적으로 활용하기 위한 데이터 기반 팀빌딩 추천 시스템으로 기존 프로젝트의 성과 데이터, 직원 역량 정보, 업무 스타일을 분석하여 최적의 팀 구성을 추천하는 서비스입니다. 

기업 환경에서 프로젝트 단위로 팀 구성이 빈번하게 이루어지지만, 대부분 관리자의 주관적 판단에 의존하고 있으며 팀원들의 기술적인 역량이나 개인 성향을 파악하기가 힘듭니다. 

이런 문제점들을 해결하기 위해 Team-Sync는 데이터 기반으로 팀원들의 역량과 성향을 수치화하여 프로젝트 팀 구성시에 팀 성과를 극대화할 수 있도록 도구를 제공합니다.

![개발배경](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/3.png)

## 핵심 기능

### 1. 인원 관리 기능


- 사원 정보 엑셀로 등록 및 관리
- 사원 상세 정보 조회 (기술 스택, 경력, 프로젝트 이력 등)
- 역할별 사원 목록 조회
  ![인원시퀀스](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/31.png)
  ![인원관리1](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/10.png)
  ![인원관리2](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/11.png)


### 2. 프로젝트 관리 기능

- 프로젝트 등록 및 관리
- 프로젝트 상세 정보 조회
- 프로젝트 타임라인 및 스프린트 관리
- 프로젝트 차터 등록 (목표, 범위, 일정 등)
- 프로젝트 상세 이력 확인

  ![관리시퀀스](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/33.png)
  ![관리시퀀스1](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/34.png)
  ![프로젝트관리](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/52.png)
  ![프로젝트관리0](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/53.png)
  ![프로젝트관리1](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/12.png)
  ![프로젝트관리2](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/13.png)
  ![프로젝트관리3](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/14.png)
  
### 3. 팀 추천 기능
- 데이터 기반 최적 팀원 추천
- 프로젝트 요구사항에 맞는 팀 구성 제안
- 다기준 의사결정(MCDM) 모델 적용
- AHP 기법을 활용한 가중치 설정
  ![추천시퀀스](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/32.png)
  ![팀원추천1](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/16.png)
  ![팀원추천2](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/17.png)
  ![팀원추천3](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/8.png)

### 4. 성과 분석 기능
- 팀 성과 지표 시각화
- KPI 및 동료평가 데이터 분석
- 프로젝트 완료 후 피드백 수집 및 분석
  ![성과분석1](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/18.png)

## 기술 스택

### 프론트엔드
- React
- TypeScript

### 백엔드
- Spring Boot
- Spring Data JPA
- FastAPI (Python)
- MySQL

## 아키텍처

### 시스템 아키텍처

1. **클라이언트**:
   - React 기반 웹 애플리케이션
   - 사용자 인터페이스 및 데이터 시각화
   - 로그인, 회원가입, 사원 정보 등록 등 사용자 기능

2. **서버**:
   - Spring Boot 기반 기본 서버:
     - 회원 정보 관리
     - 사원 정보 관리
     - 프로젝트 관리
     - 팀 구성 요청
   - FastAPI 기반 모델 서버:
     - 기업 내 팀원 추천 알고리즘
     - 지원자 추천 알고리즘
![아키텍처](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/27.png)
![아키텍처1](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/28.png)
   
4. **데이터베이스**:
   - MySQL을 활용한 데이터 저장 및 관리
   ![ERD](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/29.png)


## 알고리즘

### 팀 추천 알고리즘

| 기존 제한사항 | 해결 방안 |
|--------------|-----------|
| 팀 매칭평가 지표인 "프로젝트 예상 완성도" 또는 "팀 매칭 적합도"를 활용할 수 있는가? -> 데이터 부재 및 수집 한계로 인한 모델링 불가 | 다기준 의사 결정 기법 활용 (Multi-Criteria Decision Making) -> 여러 변수들 설정하고 가중치를 통해 팀 매칭 진행 |

**Team-Sync의 핵심은 다기준 의사결정 기법(MCDM)을 활용한 팀 추천 알고리즘**

1. **점수 스케일링**:
   - 기술 점수, KPI 점수, 동료평가 점수를 0~1 사이로 정규화

2. **가중치 적용**:
   - AHP 기법을 활용하여 각 평가 요소에 가중치 부여
   - 쌍대비교행렬을 통해 최적의 가중치 산정

3. **팀 구성 최적화**:
   - 프로젝트 요구사항과 인적 자원의 매칭을 통한 최적 팀 구성
   - 과거 성공 사례 분석을 통한 SC(Successful Cases-based) 알고리즘 적용

![변수1](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/57.png)
![변수2](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/58.png)
![변수3](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/59.png)
![변수4](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/6.png)

## 선행 기술


1. **HR Analytics**: 인적 자원과 데이터 분석을 결합한 의사결정 지원 방식
2. **다기준 의사결정(MCDM)**: 여러 기준을 통합하여 최적의 선택을 도출하는 기법
3. **딥러닝 기반 팀빌딩**: 채용 이후 데이터를 활용한 팀 구성 최적화

## 개발 배경


1. **프로젝트 기반의 팀 조직**: 프로젝트 단위로 팀 구성이 필요
2. **IT 기업 & 스타트업 채용 증가**: 인력 관리의 중요성 증대
3. **관리자의 주관적 판단에 의존**: 데이터 기반 의사결정 부재
4. **사원 특성의 미흡한 반영**: 개인의 특성, 역량, 성향 등이 충분히 고려되지 않음
5. **선발 과정의 비효율성**: 부서 간 협상 및 인력 파악에 많은 시간과 자원 소모

Team-Sync는 이러한 문제점을 해결하기 위해 데이터 기반 접근 방식을 제공

## 기대 효과

1. **실무 프로젝트 성공률 향상**: 적합한 팀원 배치를 통한 협업 원활화
2. **자원 활용의 효율성 증가**: 팀 구성 시간 절감 및 핵심 업무 집중
3. **기업 맞춤 관리 시스템**: 지속적 인사/프로젝트 데이터 축적을 통한 맞춤형 관리

## 데모 영상
[Team-Sync 데모 영상 (YouTube)](https://youtu.be/34qZchb70ZI)


## 향후 및 성과 창출 계획

1. 논문 및 저작권 등록 없이 GitHub 코드 공개
2. 특허 명세서 작성 후 제출 (현재 초안 작성 후 제출 완료)
![계획](https://raw.githubusercontent.com/BrianKim913/2024-2-SCS4031-PocketStone-6/main/presentation/19.png)

## 💿 프로젝트 실행 방법

### 1. 프로젝트 clone 받기
```bash
git clone https://github.com/CSID-DGU/2024-2-SCS4031-PocketStone-6.git
```

### 2. backend/team-sync 👉 데이터 베이스 주소 변경
- `backend\team-sync\src\main\resources\application.properties` 
   - `spring.datasource.url`, `spring.datasource.username`, `spring.datasource.password` 수정
   - 수정 내용은 이메일 참조(데이터베이스 주소)

### 3. backend/team-model 👉 .env 파일 추가
- `backend\team-model\app\`에 `.env` 파일 추가
    - 내용은 이메일 참조(OPENAPI KEY)

### 4. backend/team-model 👉 데이터 베이스 주소 변경
- `backend\team-model\app\database.py`
    - `DATABASE_URL`, `SCALED_DATABASE_URL` 수정
    - 수정 내용은 이메일 참조(데이터베이스 주소)

### 5. backend 파일 실행
- 모델 서버 실행
    ```bash
    (메인 폴더 위치에서)
    cd backend/team-model/app
    pip install uvicorn sqlalchemy==1.4.39 pymysql==1.1.0 fastapi
    uvicorn main:app --reload
    ```

- SPRINGBOOT 서버 실행
    ```bash
    (메인 폴더 위치에서)
    cd backend/team-sync
    ./gradlew clean build
    cd build/libs
    java -jar team-sync-0.0.1-SNAPSHOT.jar
    ```

### 6. frontend 👉 .env 파일 추가
- `frontend\`에 `.env` 파일 추가
    - 내용: `REACT_APP_API_URL=http://localhost:8080`

### 7. frontend 파일 실행
```bash
(메인 폴더 위치에서)
cd frontend
npm install
npm start
```

### 8. 로그인 계정
- ID: `pocketstone`
- PW: `pocket123`

## 🔎 살펴보기

<details>
<summary><b>🖥️ (필요시)서버 주소 세부조정</b></summary>

 - `WebClientConfig.java`
   - baseUrl()을 해당 fastapi 서버로 수정
- `WebSecurityConfig.java`
   - 61번째줄 코드`(configuration.setAllowedOrigins(Arrays.asList)`를 리액트 주소로 수정
</details>
<details>
<summary><b>🎯 Commit Convention</b></summary>

- <b>구성</b>
    ```
    {역할}: [{키워드}] {내용}
    ```
    - 역할 -  `Model`, `BE`, `FE`
    - 예시 - `FE: [feat] 회원가입 페이지 구성`
- <b>키워드</b>

    |키워드|내용|
    |---|---|
    |feat|새로운 기능 추가|
    |fix|버그 수정|
    |docs|문서 수정|
    |style|코드 포맷팅, 세미콜론 누락 등 코드 변경이 없는 경우
    |refactor|코드 리펙토링|
    |test|테스트 코드, 리펙토링 테스트 코드 추가|
    |chore|빌드 업무 수정, 패키지 매니저 수정(npm, .gitignore 등)
    |remove|파일 삭제|
    |rename|파일 이름 변경|
</details>

