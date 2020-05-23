(function (){
    var leftSide = document.querySelector('.animation1-wrapper-left');
    var left = document.querySelector('.animation1-left');
    var rightSide = document.querySelector('.animation1-wrapper-right');
    var leftLine = leftSide.querySelector('hr');
    var rightLine = rightSide.querySelector('hr');
    var anime = document.querySelector('.anime');

    var section2Y = document.querySelector('.section2-home').offsetTop - 102;
    var point1 = document.querySelector('.animation1-container').offsetTop - 206;
    var point2 = document.querySelector('.animation1-container').offsetTop - 6;
    var point3 = document.querySelector('.animation1-wrapper').offsetTop + 194; 
    var point4 = document.querySelector('.button-about').offsetTop - 350;
    var point5 = document.querySelector('.button-about').offsetTop + 100;

    var onScrollFunc = function () {

        if (pageYOffset >= section2Y && pageYOffset < point1) {
            var x = point1 - pageYOffset;
            var percent =  Math.floor(x * 100 / (point1 - section2Y));
            leftSide.style.transform = 'translateX(-' + percent + '%)';
            rightSide.style.transform = 'translateX(' + percent + '%)';
        }
        if (pageYOffset < section2Y) {
            leftSide.style.transform = 'translateX(-100%)';
            rightSide.style.transform = 'translateX(100%)';
        }
        if (pageYOffset < point1) {
            rightLine.style.transform = "translateX(30%)";
            leftLine.style.transform = "translateX(-30%)";
        }
        if (pageYOffset >= point1 && pageYOffset < point2) {
            leftSide.style.transform = 'translateX(-0%)';
            var y = (point2 - pageYOffset) / ((point2 - point1) / 100);
            leftLine.style.transform = 'translateX(-' +  Math.ceil(30 * y / 100) + '%)';
            rightLine.style.transform = 'translateX(' +  Math.ceil(30 * y / 100) + '%)';
            rightSide.style.transform = 'translateX(0%)';
        }
        if (pageYOffset > point2) {
            rightLine.style.transform = "translateX(0%)";
            leftLine.style.transform = "translateX(0%)";
        }
        if (pageYOffset < point2) {
            leftSide.style.backgroundColor = 'hsl(0, 0%, 100%)';
            leftSide.style.color = 'hsl(0, 0%, 17%)';
            leftLine.style.background = 'hsl(0, 0%, 17%)';
            left.style.backgroundColor = 'hsl(0, 0%, 100%)'; 
        }
        if (pageYOffset >= point2 && pageYOffset < point3) {
            var z = (point3 - pageYOffset) / ((point3 - point2) / 100);
            leftSide.style.backgroundColor = 'hsl(0, 0%,' + (z) + '%)';
            leftSide.style.color = 'hsl(0, 0%,' + (100 - z) + '%)';
            leftLine.style.background = 'hsl(0, 0%,' + (100 - z) + '%)';
            left.style.backgroundColor = 'hsl(0, 0%,' + (z) + '%)';
        }
        if (pageYOffset > point3) {
            leftSide.style.backgroundColor = 'hsl(0, 0%, 0%)';
            leftSide.style.color = 'hsl(0, 0%, 100%)';
            leftLine.style.background = 'hsl(0, 0%, 100%)';
            left.style.backgroundColor = 'hsl(0, 0%, 0%)';  
        }
        if (pageYOffset >= point4 && pageYOffset < point5) {
            var k = (point5 - pageYOffset) / ((point5 - point4) / 100);
            anime.style.transform = 'rotate(45deg) scaleY(' + (k / 10) + ') scaleX(10)';
        }
        if (pageYOffset >= point5) {
            anime.style.transform = 'rotate(45deg) scaleY(0) scaleX(10)';
        }
    };
    if (window.innerWidth >= 768) {
        leftSide.style.transform = "translateX(-120%)";
        leftSide.style.color = "hsl(0, 0%, 17%)";
        leftSide.style.backgroundColor = 'white';
        leftSide.style.boxShadow = '0px 0px 45px rgba(78, 81, 144, 0.15)';
        left.style.backgroundColor = 'hsl(0, 0%, 100%)';
        leftLine.style.backgroundColor = 'hsl(0, 0%, 17%)';
        rightSide.style.transform = "translateX(120%)";
        rightLine.style.transform = "translateX(30%)";
        leftLine.style.transform = "translateX(-30%)";
        window.addEventListener('scroll', onScrollFunc);  
    }
    if (pageYOffset > section2Y) {
        leftSide.style.transform = "translateX(0%)";
        rightSide.style.transform = "translateX(0%)";
    };
    if (pageYOffset >= point4) {
        anime.style.transform = 'rotate(45deg) scaleY(0) scaleX(10)';
    };

    window.addEventListener('resize', function(){
        if (window.innerWidth < 768) {
            leftSide.style.transform = "translateX(0%)";
            leftSide.style.color = "hsl(0, 0%, 100%)";
            leftSide.style.backgroundColor = 'black';
            leftSide.style.boxShadow = '0px 0px 45px rgba(78, 81, 144, 0.15)';
            left.style.backgroundColor = 'hsl(0, 0%, 0%)';
            leftLine.style.backgroundColor = 'hsl(0, 0%, 100%)';
            rightSide.style.transform = "translateX(0%)";
            rightLine.style.transform = "translateX(00%)";
            leftLine.style.transform = "translateX(0%)";
            window.removeEventListener('scroll', onScrollFunc);  
        };
        section2Y = document.querySelector('.section2-home').offsetTop - 102;
        point1 = document.querySelector('.animation1-container').offsetTop - 206;
        point2 = document.querySelector('.animation1-container').offsetTop - 6;
        point3 = document.querySelector('.animation1-wrapper').offsetTop + 194; 
        point4 = document.querySelector('.button-about').offsetTop - 350;
        point5 = document.querySelector('.button-about').offsetTop + 100; 
        if (window.innerWidth >= 768) {
            window.addEventListener('scroll', onScrollFunc);  
        };
    }) 
}());                              
