var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.covid19india.org/data.json", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    function killCopy(e){
        return false
        }
        function reEnable(){
        return true
        }
        document.onselectstart=new Function ("return false")
        if (window.sidebar){
        document.onmousedown=killCopy
        document.onclick=reEnable
        }
