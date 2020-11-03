
let boite = document.querySelector('.container');
let imageContainer = document.querySelector('.page_container');
let content = imageContainer.children;

let body = document.querySelector('body');
let home = document.querySelector('.home');
let About = document.querySelector('.About');
let crea = document.querySelector('.crea');
let info = document.querySelector('.info');


let x = 0;
let y = 0;

home.style.background = '#d4f209';

function next()
{

function move()
{
    if (x == 0) 
    {
        
        for (let i = 0; i < content.length; i++) 
        {
            if (i == 1 ) 
            {
                x = x + 1540;
                content[i].style.position = 'relative';
                content[i].style.left = -x + 'px';
                About.style.background = '#d4f209';
                home.style.background = 'transparent';
                body.style.background = 'white';
                
            } 
        }  
    }else if (x == 1540) 
    {
        
        for (let i = 0; i < content.length; i++) 
        {
            if ( i == 2) 
            {
                x = x + 1540;
                content[i].style.position = 'relative';
                content[i].style.left = -x + 'px';
                console.log(content[i]);
                crea.style.background = '#d4f209';
                About.style.background = 'transparent';
                home.style.background = 'transparent'; 
                body.style.background = '#ededed';
            } 
        }  
    }else if (x == 3080) 
    {
        
        for (let i = 0; i < content.length; i++) 
        {
            if ( i == 3) 
            {
                x = x + 1540;
                content[i].style.position = 'relative';
                content[i].style.left = -x + 'px';
                console.log(content[i]);
                info.style.background = '#d4f209';
                crea.style.background = 'transparent';
                About.style.background = 'transparent';
                body.style.background = '#d4f209';
                
            } 
        }  
    } 
}
move();
     
}



function avant()
{
    
    console.log(x);
    function move(direction)
{
    if (x == 4620) 
    {
        console.log(x);
        
        for (let i = 0; i < content.length; i++) 
        {
            if (i == 3 ) 
            {
                x = x - 1540;
                content[i].style.position = 'relative';
                content[i].style.left = x + 'px';
                console.log(content[i]);
                info.style.background = 'transparent';
                crea.style.background = '#d4f209';
                About.style.background = 'transparent';
                body.style.background = '#ededed';
                
                
            } 
        }  
    }else if (x == 3080) 
    {
        
        for (let i = 0; i < content.length; i++) 
        {
            if (i == 2 ) 
            {
                x = x - 1540;
                content[i].style.position = 'relative';
                content[i].style.left = x + 'px';
                console.log('bonjour');
                console.log(content[i]);
                info.style.background = 'transparent';
                crea.style.background = 'transparent';
                About.style.background = '#d4f209';
                body.style.background = 'white';
                
                
            } 
        }  
    }else if (x == 1540) 
    {
        
        for (let i = 0; i < content.length; i++) 
        {
            if (i <= 1 ) 
            {
                x = 0;
                content[i].style.position = 'relative';
                content[i].style.left = x + 'px';
                info.style.background = 'transparent';
                crea.style.background = 'transparent';
                About.style.background = 'transparent';
                home.style.background = '#d4f209';
                body.style.background = '#d4f209';
               
            } 
        }  
    }
}
move();
}


let boitePhoto = document.querySelector('.boitePhoto');
let photo = document.querySelectorAll('.photo li');

let a = 665;
let b = 0;

function moveDown()
{
    setInterval(Down,2000);
    function Down()
    {
    if (a == 665) 
    {
        
        for (let i = 0; i < photo.length; i++) 
        {
            if (i == 4 || i == 5 || i == 6 || i == 7  ) 
            {
                a = 5;
                a = a + 665;
                photo[i].style.position = 'relative';
                photo[i].style.top = -a + 'px';
                console.log(a);
            }else if (i == 0 || i == 1 || i == 2 || i == 3  ) 
            {
                photo[i].style.visibility = 'hidden';
            }
        }  
    }else if (a == 670) 
    {
        
        for (let i = 0; i < photo.length; i++) 
        {
            if ( i == 8 || i == 9 || i == 10 || i == 11) 
            {
               a = 0;
                a = a + 1340;
                photo[i].style.position = 'relative';
                photo[i].style.top = -a + 'px';
                console.log(a);
                
            }else if (i == 4 || i == 5 || i == 6 || i == 7  ) 
            {
                photo[i].style.visibility = 'hidden';
            }
        }  
    }else if (a == 1340) 
    {
        
        for (let i = 0; i < photo.length; i++) 
        {
            if ( i == 8 || i == 9 || i == 10 || i == 11) 
            {
                a = 0;
                a = a + 650;
                photo[i].style.position = 'relative';
                photo[i].style.top = a + 'px';
                console.log(a);
                
            }else if (i == 4 || i == 5 || i == 6 || i == 7  ) 
            {
                photo[i].style.visibility = 'visible';
            }
        }  
    }else if (a == 650) 
    {
        
        for (let i = 0; i < photo.length; i++) 
        {
            if ( i == 4 || i == 5 || i == 6 || i == 7) 
            {
                a = 0;
                a = a + 665;
                photo[i].style.position = 'relative';
                photo[i].style.top = a + 'px';
                console.log(a);
            }else if (i == 0 || i == 1 || i == 2 || i == 3  ) 
            {
                photo[i].style.visibility = 'visible';
            }
        }  
    }

    }
    Down();

}





function movePoint()
{
    
    
    function pointBouge()
    {
        let point = document.querySelector('body');
        pointEnfant = point.children;
        console.log(pointEnfant);
        let axe = 0;
        for (let i = 0; i< pointEnfant.length; i++) 
        {
            if (i == 1) 
            {
                console.log(pointEnfant[i]);
                
            }
            
        }


    }
    pointBouge();

}