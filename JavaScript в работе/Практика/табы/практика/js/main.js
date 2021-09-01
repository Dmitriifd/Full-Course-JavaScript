
window.addEventListener('DOMContentLoaded', () => {

    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');
    const tabs = document.querySelectorAll('.tabheader__item');

    // 'show', 'fade' 'hide'

    function hideTabContent() {
       
    }
    

    function showTabContent(i = 0) {
        

    }



    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && ) {
            tabs.forEach((item, i) => {
                if (target === item) {
                   
                }
            });
        }
    });


});