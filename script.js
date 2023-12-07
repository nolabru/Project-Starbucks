    function imgSlider(anything)
    {
        document.querySelector('.starbucks').src = anything;
    }

    function setColor(color)
    {
        const circle = document.querySelector('.circle');
        circle.style.background = color;
        const title = document.querySelector('.title');
        title.style.color = color;
        const button = document.querySelector('.button');
        button  .style.background = color;
    }
    function toggleMenu()
    {
        var menuToggle = document.querySelector('.toggle')
        var navigation = document.querySelector('.navigation')
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }   

        