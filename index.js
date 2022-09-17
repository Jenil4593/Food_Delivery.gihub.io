document.querySelector('.close').style.display = 'none';

document.querySelector('#logo').addEventListener("click" , () =>
{
    document.querySelector('.sidebar').classList.toggle('sidebargo');

    if(document.querySelector('.sidebar').classList.contains('sidebargo'))
    {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.close').style.display = 'none';

    }

    else
    {
        document.querySelector('.ham').style.display = 'none';

        

        setTimeout(()=> {
            document.querySelector('.close').style.display = 'inline';
        }, 300);
    }

});
