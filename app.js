// Дэлгэцтэй ажиллах контроллер
var uiController = (function() {

}) ();

var financeController = (function() {
    
    document.querySelector('.add__btn').addEventListener('click',function(){
        console.log('clicked')
    // 1. Oruulah ogogdliig delgetsees olj avna

    // 2. Olj avsan ogogdluudee
    })

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13) console.log("enter darsan");
        else console.log("busad:" + event.keyCode);
    })
}) ();

var appController = (function(uiCtrl, fnCtrl) {

    var ctrlAddItem = function() {
        console.log("Delgetsnees ogogdol avah");
    }

    document.querySelector(".add__btn").addEventListener("click", function(){
        ctrlAddItem();
    })

    document.addEventListener("keypress", function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })
}) (uiController, financeController);
