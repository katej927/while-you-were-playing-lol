# Table of Contents
1. [Link](#main1)
2. [About](#main2)
3. [Techs](#main3)
4. [Functions](#main4)
6. [Remembrance](#main5)

<br/>

# 📌 Link<a name="main1"></a>
👉 화면 확인 : [배포 링크](https://while-you-were-playing-lol.netlify.app)

👉 코드 확인 : [깃헙 링크](https://github.com/katej927/while-you-were-playing-lol)


# 📌 About<a name="main2"></a>
> League of Legends의 user를 검색하여 최근 게임 이용 시간의 기회 비용을 알아보는 앱
> 

- 개발자: 정선미
- 기간: ‘22.6.3 ~ 6.5 (기획 및 개발)

# 📌 Techs<a name="main3"></a>
- Next.js + Redux Toolkit + emotion (react, styled)
- TypeScript
- RIOT API
- next-translate (i18n)
- next-seo
- date-fns
- Jest
- axios

# 📌 Functions<a name="main4"></a>
- 주제

    실제 Riot API를 이용해서 user의 최근 20회의 League of Legends 게임 이용 시간을 확인하고 얼만큼의 다른 기회 비용이 있었는지를 알려준다
    
- API 호출 최적화 (by `promise.all`)
    
    다량의(20개) API 호출을 동시에 해서 대기 시간을 감소 시키고 필요한 정보(게임 시간, 게임 일자, 사용자 아이콘)만 모아서 한 번에 client state로 주기 위함.
    
- 한영 지원 (by `next-translate (i18n)`)
- 테스트 (by `Jest`)
    
    함수로 계산된 값들이 정확한지 (기댓값과 일치하는지) 확인
    
- 반응형
    
    크롬으로 확인할 수 있는 모든 사이즈 (iPhone SE ~ Nest Hub Max)
    
- SSR 지원을 위해 `Next.js`, `emotion` 사용

# 📌 Remembrance<a name="main5"></a>
- API 호출 최적화

    시간이 많지 않아 한 user의 게임 총 이용시간을 더 적은 횟수로 확인 할 수 있는 RIOT API를 발견한다던지, 혹은 개발자가 더 최적화 할 수 있는 방식을 찾지 못했다.
    
    추후 이 부분을 찾고 보완 할 계획
    
- 보다 다양한 기능 추가
    
    다양한 기술을 접해보고 싶었다. 그래서 개인 프로젝트를 위한 남은 기간 5일 중 절반은 학습을 (Next.js + Redux Toolkit + emotion) 절반은 기획, 디자인, 개발, API 서치를 모두 진행.
    
    HTML, CSS, TS, JS, axios 외에는 전부 처음 써보는 기술이었지만 그래도 더 생산해 내지 못한 것이 많이 아쉬움.
