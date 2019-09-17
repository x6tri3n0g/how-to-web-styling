# CSS position attribute
  
</br>  
</br>
  
## position  
</br>
포지션의 속성값에는 `relativ`, `absolute`, `static`, `sticky`, `fixed`가 있습니다.  
[W3School](https://www.w3schools.com/cssref/pr_class_position.asp)에 의하면 default value는 `static`으로 setting 되어 있습니다. 지금부터 하나씩 알아봅시다.  

</br>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>relative example</title>

    <style>
        .wrap {
            width: 200px;
            height: 200px;
            margin: 50px auto;
            background: gray;
        }
        .relative {
            position: relative;
            bottom: 0px;
            width: 100px;
            height: 100px;
            background: coral;
        }
        p {
            width: 100px;
            height: 50px;
            background: lightblue;
        }
    </style>
</head>
<body>
    <div class="wrap">
        <div class="relative"></div>
        <p>Hello Relative!</p>
    </div>
</body>
</html>
```

</br>
</br>

쉽게 설명하기 위해 wrap이라는 한정된 공간에 relative;속성을 젛은 div와 p태그를 넣었습니다. div 요소가 사라지지 않은 이상 div 요소의 영역은 유지됩니다.  
참고로 요소에 `postiion: absolute;`가 들어가게 되면 `margin: auto;`는 사용이 불가능합니다. `top` `left` `right` `bottom` 속성값으로 가운데 정렬하거나 이동을 해줘야 합니다.  
</br>  
</br>
.relative의 position을 `absolute`로 변경하게 되면 .wrap 요소가 p태그의 영역을 덮게 됩니다. 이는 absolute는 절대적인 값으로 인해 그 공간을 차지하고 있지 않다는 의미입니다.  
</br>  
</br>
`absolute`를 가진 요소를 제어하기 위해서 부모 요소에 position을 넣어 주면 됩니다. 이러한 차이를 가진 `relative`와 `absolute`를 시기 적절하게 사용하면 됩니다.
