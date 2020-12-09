# CSS-centerAlignment  
#### div 요소 중앙 정렬  
  
  <br>
  <br>  
  
div 요소 하나를 가로, 세로 중앙정렬하기 위해서는 다양한 방법이 있습니다.  
그 중 하나인 position에 `absolute`값으로 해결해보겠습니다.  
  
```
#layer {
    width: 300px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    border: 3px solid #333;
    background: greenyellow;
    margin: -250px 0 0 -150px;
    text-align: center;
    line-height: 500px;
}
```  
  
  <br>
  
`position: absolute`를 가진 요소를 중앙정렬하기 위해서는 `width`와 `height` 값이 꼭 필요합니다!  
먼저 `position: absolute`에서 사용할 수 있는 `left`와 `right`를 통해서 50%씩 간격을 띄워줍니다. 
그렇게 되면 브라우저 with, height의 50% 만큼 각격이 띄워지게 됩니다.
그리고 div 요소가 가진 width와 height값 만큼 margin 통해 좌상으로 이동시켜줍니다.(margin: -250px 0 0 -150px;)   
또한, div 요소가 가진 text를 중앙으로 위치시키기 위해서는 `text-align: center`과 `line-height: 500px`(요소의 높이값과 같음)를 통해 해결할 수 있습니다.
