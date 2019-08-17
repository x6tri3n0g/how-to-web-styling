# Responsive Web Design  
  
  ### CONTENT  
  ### 1. Responsive Web Design 개요  
     1.1 viewport meta tag  
     1.2 @media  
  ### 2. Responsive Navigation Bar  
     2.1 Responsive Navigation Bar - Tablet  
     2.2 Responsive Navigation Bar - Smartphone  
  ### 3. Section & Aside & Footer  
  
  ### Reference  
    
      
      
      
  ---  
    
    
    
  
  일반적인 layout에는 몇가지 문제를 가진다. 그 문제를 해결할 열쇠는 Responsive Web Design이다.  
  
  일반적인 layout 방법을 사용해 화면을 구성하고 HTML 요소의 고정폭을 설정하지 않을 경우 가로 폭을 줄일 경우 페이지의 layout이 망가지게 된다.  
  그리고 모바일과 같이 작은 해상도의 디바이스에 접근했을 때 화면이 너무 작게 보여 유저에게 보여지는 가시성이 떨어지게 된다.  
  
  
  
  ## 1. Responsive Web Design 개요  
  사용자가 어떤 디바이스로 웹사이트를 방문할지 알 수 없다. 각 디바이스의 화면 해상도에 따른 layout을 대응하기 위해 우리는 반응형 웹 디자인(Responsive Web Design)을 사용할 필요가 있다.  
  
  또한 스마트폰이나 태블릿 등의 모바일 기기는 화면이 작기 때문에 가독성에 신경써야한다. 보통 웹사이트는 가로 폭이 넓기 때문이다. 데스크탑용, 테블릿용, 모바일용 웹사이트를 별도로 구축할 수 있지만 One Source Multi Use의 관점에서 올바른 해결책이 아니다.  
  
  우리는 반응형 웹디자인을 통해 화면 해상도에 따라 가로폭이나 배치를 변경하여 가독성을 높여줄 것이다. 즉, 하나의 웹사이트를 구축하여 다양한 디바이스의 화면 해상도에 최적화된 웹사이트를 제공할 수 있게 된다.  
  
  일반적으로 
   - Desktop: 1024 ~
   - Tablet: 768 ~ 1023
   - Phone: 320 ~ 767
   으로 구성한다.  
  
  또한 최근 모바일 웹페이지는 대부분 애플리케이션 형태로 진화하고 있어 앱과 웹의 구분을 흐리고 있다. HTML5/CSS3/JavaScript만으로 Native 앱과 차이를 느낄 수 없는 앱을 만들 수 있다.  
  다음은 최근 관심을 끌고 있는 Web App Framework이다.  
   - ionic
   - Electron
   - PhoneGap
   - Sencha Touch  
  
  
  ### 1.1 viewport meta tag  
  viewport란 웹페이지의 가시영역을 의미한다. viewport는 디바이스에 따라 차이가 있다. 예를 들어 모바일 브라우저는 주화면이 세로 화면이고 윈도우 resize가 불가하며 화면 터치를 사용하는 등 데스크탑 브라우저와 구성이나 형태가 다르다. 또한 모바일의 화면은 데스크탑 화면보다 훨씬 작으므로 데스크탑용 웹페이지를 출력하면 가독성이 현저히 나빠진다. 따라서 viewport를 이용하여 디바이스의 특성과 디바이스의 화면 크기 등을 고려하여 각종 디바이스 사용자에게 최적화된 웹페이지를 제공할 수 있다.  
  
  meta tag는 브라우저 혹은 검색엔진최적화(SEO)를 위해 검색엔진에게 메타 데이터를 전달하기 위해 사용된다.  
  
|프로퍼티|Description|Example|
|--------|--------|--------|
|width|viewport 너비(px).기본값: 980px|width=240|
| | |width=device-width|
|height|viewport 높이(px)|height=800|
| | |width=device-height|
|initial-scale|viewport 초기 배율|initial-scale=1.0|
|user-scale|확대 축소 가능 여부|user-scale=no|
|maximum-scale|viewport 최대 배율|maximum-scale=2.0|
|minimum-scale|viewport 최소 배율|minimum-scale=1.0|  
  
  *meta tag에서는 px 단위를 사용하며 단위 표현은 생략*  
  **일반적으로 viewport meta tag는 모바일 디바이스에서만 적용됨**  
  
  ```
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```  
  위 예제는 가장 일반적인 viewport 설정이다. 가로폭을 디바이스의 가로폭에 맞추고 초기 화면 배율을 100%로 설정하는 것을 의미한다.  
  
  
  
  ## 1.2 @media  
  
  ## 2. Responsive Navigation Bar  
  ### 2.1 Responsive Navigation Bar - Tablet  
  ### 2.2 Responsive Navigation Bar - Smartphone  
  ## 3. Section & Aside & Footer  
  
  ## Reference 
