(function () {
    var infoButton = document.querySelectorAll('.info-image');
var crossCompany = document.querySelectorAll('.cross');
var companies = document.querySelectorAll('.company-text');
var peoples = document.querySelector('.peoples').querySelectorAll('.people');
var crossPeople = document.querySelectorAll('.people_cross');
var peopleTexts = document.querySelector('.peoples').querySelectorAll('.people-text');
for (var i = 0; i < infoButton.length; i++) {
    var onInfoButtonClick = function (elem1, elem2, elem3) {
        elem1.addEventListener('click', function(evt){
            evt.preventDefault();
            elem2.classList.add('company-text-act');
        });
        elem3.addEventListener('click', function (evt){
            evt.preventDefault();
            elem2.classList.remove('company-text-act');
        })
    };
    onInfoButtonClick(infoButton[i], companies[i], crossCompany[i]);
}
for (var p = 0; p < peoples.length; p++) {
    var onPeopleClick = function (elem1, elem2) {
        elem1.addEventListener('click', function(){
            for (var n = 0; n < peopleTexts.length; n++) {
                if (peopleTexts[n].classList.contains('people-act')) {
                    peopleTexts[n].classList.remove('people-act');
                };
            };
            elem2.classList.add('people-act');
        });  
    };
    onPeopleClick(peoples[p], peopleTexts[p]);  
}
for (var b = 0; b < crossPeople.length; b++) {
    var onCrossPeopleClick = function (elem1, elem2) {
        elem1.addEventListener('click', function (evt){
            evt.stopPropagation();
            elem2.classList.remove('people-act');    
        }); 
    };
    onCrossPeopleClick(crossPeople[b], peopleTexts[b]);
}




window.addEventListener('resize', function(){
    if (window.innerWidth > 767) {
        for (var c = 0; c < companies.length; c++) {
            companies[c].classList.remove('company-text-act');
        }
    }
});
}());