
function check() {
    let name = document.getElementById('firstname').value;
    let surname = document.getElementById('lastname').value;
    let country = document.getElementById('country').value;
    let email = document.getElementById ('email').value;
    
    function getName() {
                document.getElementById('your-name').innerHTML = '<p>Welcome '+name+' '+surname+' !</p>' }
    
    if (name == '' || surname == '' || country == '' || email == '') {
            
            document.querySelector('#bg-container-two').style.display = 'flex';
            document.querySelector('.close-two').addEventListener('click', function() {
                document.querySelector('#bg-container-two').style.display = 'none';
    });
            
        } else  {
            
            document.querySelector('#bg-container').style.display = 'flex';
            document.querySelector('.close').addEventListener('click', function() {
                document.querySelector('#bg-container').style.display = 'none';
    });
            getName();
             
        }
}



let element = document.getElementById('button');
element.onclick = check;



