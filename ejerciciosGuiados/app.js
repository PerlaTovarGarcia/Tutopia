function send() {
    var link = 'mailto:email@example.com?subject=Message from '
             +document.getElementById('email').value
             +'&body='+document.getElementById('email').value;
    window.location.href = link;
};
