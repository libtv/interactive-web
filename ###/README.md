
<h1>front_htmlcss</h1>
<p>뷰, 리엑트 등 여러 프론트엔드를 하고 있는 와중에 기초를 더 단단히 다지자는 의미로 다시 나아갑니다.</p>

<h1>목차</h1>
<ul>
  <li><span>유용한 HTML CSS</span></li>
</ul>

<h1>유용한 HTML CSS</h1>
<ul>
  <li><span>Transitions</span></li>
</ul>

<h1>Transitions-2021.05.20</h1>
<p>transition CSS 속성은 transition-property, transition-duration transition-timing-function과 transition-delay를 위한 단축 속성입니다.</p> 
<p>이 속성으로 엘리먼트의 두 가지 상태 사이에 변화를 줄 수 있습니다. </p>
<p>엘리먼트의 각 상태는 가상 클래스 를 사용해 정의된 :hover 이나 :active 또는 자바스크립트를 사용해 동적으로 만들어진 것들입니다.</p>
<p>사용방법</p>

<span> /* property name | duration */</span><br>
<span> transition: margin-left 4s;</span><br>

<span> /* property name | duration | delay */</span><br>
<span> transition: margin-left 4s 1s;</span><br>

<span> /* property name | duration | timing function | delay */</span><br>
<span> transition: margin-left 4s ease-in-out 1s;</span><br>

<span> /* Apply to 2 properties */</span><br>
<span> transition: margin-left 4s, color 1s;</span><br>

<span> /* Apply to all changed properties */</span><br>
<span> transition: all 0.5s ease-out;</span><br>

<span> /* Global values */</span><br>
<span> transition: inherit;</span><br>
<span> transition: initial;</span><br>
<span> transition: unset;</span><br>
