# Scrollable items indication

Simple highlighting of scrollable div's via white gradient on scrollable side (bottom/right).

There is no options, all customization should be maked by editing source styles. Here is markup requirements for correct behavior:

~~~html
<div class="js-scroll-gradient">
    <div class="js-scroll-gradient__scrollable">
        <div class="example-content"></div>
    </div>
</div>
~~~

where **example-content** is any content or multiple blocks, which will be scrolled.

Height or width of container should be specified for **js-scroll-gradient** class, like this:

~~~css
.js-scroll-gradient {
    height: 200px;
}
.example-content {
    height: 800px;
    background: rgb(2,0,36);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
~~~

And snippet must be initiated by call **initScrollGradient();**

~~~javascript
document.addEventListener('DOMContentLoaded', function(){
    initScrollGradient();
});
~~~