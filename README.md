# study-flex

### #CONTENT  

### 1. Introduce  
### 2. Usage  
### 3. Flexbox Container 속성  
  #### 3.1 flex-direction  
  #### 3.2 flex-wrap  
  #### 3.3 flex-flox  
  #### 3.4 justify-content  
  #### 3.5 align-items  
  #### 3.6 align-content  
### 4. Felxbox item 속성  
  #### 4.1 order  
  #### 4.2 flex-grow  
  #### 4.3 flex-shrink  
  #### 4.4 flex-basis  
  #### 4.5 flex
  #### 4.6 align-self  
### 5. Flexbox playground

### Reference  
  
  
  
  
  
  ---
  
  
  # study-flex

## 1. Introduce  
  Flexbox는 모던 웹을 위해 제안된 기존 layout보다 더 세련된 방식의 니즈에 부합하기 위한 CSS3의 새로운 방식의 layout 방식이다.  
  요소의 사이즈가 불명확하거나 동적으로 변화할 때에도 유연한 레이아웃을 실현할 수 있다. 복잡한 레이아웃이라도 적은 코드로 보다 간단하게 표현할 수 있다.
  
  >> div 요소는 block 요소이므로 **수직정렬**된다.
  >> div는 객체의 가로 방향의 영역을 모두 가진다. 따라서 div가 쌓이면 수직으로 정렬된다.  

  이를 수평 정렬하려면 
  1. 자식요소(flex-item)를 inline-block으로 지정
  2. float 프로퍼티를 지정한다.
  
```  
.flex-item {
	display: inline-block;
    /* or */
    float: left;
    }
```
  
  이때 각 자식 요소를 부모 요소 내에서 정렬하기 위해서는 각 자식 요소의 너비를 %로 지정하는 등 번거로운 처리가 필요하다. 자식 요소의 사이즈가 불명확하거나 동적으로 변화할 때에는 더욱 처리가 복잡해진다.  
  
  Flexbox를 사용하여 위 예제를 부모 요소 내에서 균등 수평 정렬해 보자. 부모 요소에 아래와 같은 코드를 추가한다.
  
```
.flex-container {
  	display: flex;
    justify-content: space-around;
  }
```
  
  
###### *Flexbox의 장점*
- 1줄 코드 추가로 수평정렬이 가능
- 요소의 상하좌우 정렬, 순서 변경이 간단함
- 요소의 간격 조절이 간단
- 서로 다른 height를 갖는 요소의 수평정렬 시, 간단히 상하중앙 정렬이 가능
  
  
  
---
## 2. Usage  
Flexbox 레이아웃은  
  ==flex-container : 부모 요소==
  ==flex item: 자식 요소==
로 구성된다.  
  
  flexbox를 사용하기 위해서 HTML 부모 요소의 display 속성에 flex를 지정한다.
```
.flex-container {
	display: flex;
}
```  
  부모 요소가 inline인 경우 inline-flex를 지정한다.
```
.flex-container {
  	display: inline-flex;
}
```  
flex 또는 inline-flex는 부모 요소에서 반드시 지정해야하는 유일한 속성이며 자식 요소는 자동적으로 flex item이 된다!  
  
  
  
---
## 3. Flexbox Container 속성  
  ### 3.1 flex-direction  
  flex-direction 속성은 flex 컨테이너의 주축(main axis)방향을 설정한다.
  flex-dirction: row;
  좌에서 우로(ltr; left to right) 수평 배치된다. flex-direction 속성의 기본값이다.
```
.flex-container {
	flex-direction: row;
}
```
  
  ==flex-direction:: row-reverse;==  
  우에서 좌로(rtl) 수평 배치된다.  
```
.flex-container {  
	flex-direction: row-reverse;  
}
```  
  
  ==flex-direction: column;==
  위에서 아래로 수직 배치된다.
```
.flex-container {
	flex-direction: column;
}
```  
==flex-direction: column-reverse;==  
아래서 위로 수직 배치된다.  
```
.flex-container {
	flex-direction: column-reverse;
}
```
  
  ### 3.2 flex-wrap  
  **flex-wrap** 속성은 flex container의 복수 flex item을 **1행**으로 또는 **복수행**으로 배치한다. flex-wrap 속성은 flex container의 width보다 flex item들의 width의 합계가 더 큰 경우, 한줄로 표현할 것인지, 여러줄로 표현할 것인지를 지정한다.  
  
  ==flex-wrap: nowrap;==  
  flex item을 개행하지 않고 1행에 배치한다. flex-wrap 속성의 기본값이다.  
  각 flex item의 폭은 flex container에 들어갈 수 있는 크기로 축소된다.  
  
```
.flex-container {
	flex-wrap: nowrap;
}
```  
  
  하지만 flex item들의 width의 합계가 flex 컨테이너의 width보다 큰 경우 flex 컨테이너를 넘치게 된다. 이때 `overflow: auto;`를 지정하면 가로 스크롤이 생기며 container에서 넘치지 않는다.  
  
  ==flex-wrap: wrap;==  
  flex item들의 width의 합계가 flex 컨테이너의 width 보다 큰 경우, flex item을 복수행에 배치한다. 기본적으로 좌에서 우로, 위에서 아래로 배치된다.
```
.flex-container {
	flex-wrap: wrap;
}
```  
  
  ==flex-wrap: wrap-reverse;==  
  flex-wrap: wrap;과 동일하나 아래에서 위로 배치된다.(왼쪽에서 오른쪽, 아래에서 위로 채워나간다.)  
```
.flex-container {
	flex-wrap: wrap-wrap-reverse;
}
```  
  
  ### 3.3 flex-flox  
  flex-flow 속성은 flex-direction 속성과 flex-wrap 속성을 설정하기 위한 shorthand이다. default는 row nowrap이다.  
```
.flex-container {
	flex-flow: <flex-direction> || <flex-wrap>;
}
```  
  
  ### 3.4 justify-content  
  flex container의 main axis(주축)를 기준으로 flex item을 수평 정렬한다.  
  
  ==justify-content: flex-start;==  
  
  main start(좌측)를 기준으로 정렬한다. justify-content 속성의 기본값이다.  
```
.flex-container {
	justify-content: flex-start;
}
```  
  
  ==justify-content: flex-end;==  
  
  main end(우측)을 기준으로 정렬한다.  
  
```
.flex-container {
	justify-content: flex-end;
}
```  
  
  ==justify-content: center;==  
  
  flex container의 중앙으로 정렬한다.  
  
```
.flex-container {
	justify-content: center;
}
```  
  
  ==justify-content: space-between;==  
  
  첫번째와 마지막 flex item은 좌우 측면에 정렬되고 나머지 item들은 균등한 간격으로 정렬된다.  
  
```
.flex-container {
	justify-content: space-between;
}
```  
  
  ==justify-content: space-around;==  
  
  모든 flex item은 균등한 간격으로 정렬된다.  
  
```
.flex-container {
	justify-content: space-around;
}
```  
  
  
  ### 3.5 align-items  
  flex item을 flex container의 수직 방향(cross axis)으로 정렬한다. align-items 속성은 모든 flex item(하위 요소)에 적용된다.  
  
  ==align-items: strech;==  
  
  모든 flex item은 flex container의 높이(cross start에서 cross end 까지의 높이)에 꽉찬 높이를 갖는다. align-items 속성의 기본값이다.(각 item이 container의 높이에 맞춰 채워진다.)  
  
```
.flex-container {
	align-items: strech;
}
```  
  
  ==align-items: flex-start;==  
  
  모든 flex item은 flex container의 cross start 기준으로 정렬된다.  
  
```
.flex-container {
	align-items: flex-start;
}
```  
  
  ==align-items: flex-end;==  
  
  모든 flex item은 flex container의 cross end(세로 끝) 기준으로 정렬된다.  
  
```
.flex-container {
	align-items: flex-end;
}
```  
  
  ==align-items: center;==  
  
  모든 flex item은 flex container의 cross axis(세로 축)의 중앙 정렬된다.  
  
```
.flex-container {
	align-items: center;
}
```  
  
  ==align-items: baseline;==  
  
  모든 flex item은 flex container의 baseline을 기준으로 정렬된다.  
  
```
.flex-container {
align-items: baseline;
}
```  
  
  
  ### 3.6 align-content  
  flex container의 cross axis를 기준으로 flex item을 수직으로 정렬한다.  
  참고로 justify-content 속성은 flex container의 main axis를 기준으로 flex item을 수평 정렬한다.  
  
  ==align-content: strech;==  
  
  모든 flex item은 flex item의 행 이후에 균등하게 분배된 공간에 정렬되어 배치된다. align-content의 속성의 기본값이다.  
  
```
.flex-container {
	align-content: strech;
}
```  
  
  ==align-content: flex-start;==  
  
  모든 flex item은 flex container의 cross start 기준으로 stack 정렬된다.(꽉꽉 붙여 정렬한다.)  
  
```
.flex-container {
	align-content: flex-start;
}
```  
  
  ==align-content: flex-end;==  
  
  모든 flex item은 flex container의 cross end 기준으로 stack 정렬된다.  
  
```
.flex-container {
	align-content: flex-end;
}
```  
  
  ==align-content: center;==  
  
  모든 flex item은 flex container의 cross axis의 중앙에 stack 정렬된다.  
  
```
.flex-container {
	align-content: center;
}
```  
  
  ==align-content: space-between;==  
  
  첫번째 flex item의 행은 flex container의 상단에 마지막 flex item의 행은 flex container의 하단에 배치되며 나머지 행은 균등 분할된 공간에 배치 정렬된다.  
  
```
.flex-container {
	align-content: space-between;
}
```  
  
  ==align-content: space-around;==  
  
  모든 flex item은 균등 분할된 공간 내에 배치 정렬된다.  
  
```
.flex-container {
	align-content: space-around;
}
```  
  
  
  
  ---
## 4. Felxbox item 속성  
float, clear, vertical-align 속성은 flex item에 영향을 주지 않는다.  
  
  
  ### 4.1 order  
  flex item의 배치 순서를 지정한다.  
  HTML 코드를 변경하지 않고 order 속성값을 지정하는 것으로 간단히 재배치할 수 있다. 기본 배치 순서는 flex container에 추가된 순서이다. 기본값은 0이다.  
  
```
.flex-item {
	order: 정수값;
}
```  
  정수값에 따른 순서를 부여한다. -1, -2,...도 가능하다.
  
  
  ### 4.2 flex-grow  
  flex item의 너비에 대한 확대 인자(flex grow factor)를 지정한다. 기본값은 0이고 음수값은 무효하다.  
  
```
.flex-item {
	flex-grow: 양의 정수값;
}
```  
  모든 flex item이 동일한 flex-grow 속성을 가지면 모든 flex item은 동일한 너비를 갖는다.(X:N 비율로 넓이를 가진다.)  
  두번째 flex item의 flex-grow 속성값을 3으로 지정하면 다른 flex item보다 더 넓은 너비를 갖는다.  
  
  
  ### 4.3 flex-shrink  
  flex item의 너비에 대한 축소 인자(flex shrink factor)를 지정한다. 기본값은 1이고 음수값은 무효하다. 0을 지정하면 축소가 해제되어 원래의 너비를 유지한다.  
  
```
.flex-itme {
	flex-shrink: 양의 정수 값;
}
```  
  
  기본적으로 모든 flex item은 축소된 상태로 지정(default: 1)하고 두번째 flex item만 축소를 해제(flex-shrink: 0;)하면 원래의 너비를 유지한다.  
  
  
  ### 4.4 flex-basis  
  flex item의 너비 기본값을 px, % 등의 단위로 지정한다. 기본값은 auto이다.  
  
```
.flex-item {
	flex-basis: auto | <width>;
}
```  
  
  ### 4.5 flex  
  flex-grow, flex-shrink, flex-basis 속성의 shorthand이다. 기본값은 0 1 auto이다.  
  W3C에서는 이 속성을 사용하는 것보다 개별적으로 기술하는 것을 추천하고 있다.  
  
```
.flex-item {
	flex: none | auto | [ <flex-grow> <flex-shrink>? || <flex-basis> ];
}
```  
  
  ### 4.6 align-self  
  align-items 속성(flex container 속성으로 flex item을 flex container의 수직방향(cross axis)으로 정렬한다.) 보다 우선하여 개별 flex item을 정렬한다.(default: auto)  
  
```
.flex-item {
	align-self: auto | flex-start | flex-end | center | baseline | strech;
}
```  
  
  
  
## 5. Flexbox playground
[Flexbox Playground](https://demos.scotch.io/visual-guide-to-css3-flexbox-flexbox-playground/demos/)  
  
  
  
  
##### Reference  
https://poiemaweb.com/css3-flexbox
  

