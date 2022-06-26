async function load(){

    const url = "https://api.mfapi.in/mf";
    let data = await (await fetch(url)).json();


    const total = document.getElementById('total');
    const code = document.getElementById('code').value;
    const name = document.getElementById('name');
    let check = false;

    const dataLength = data.length;
    total.innerText = dataLength;


    for(let i=0;i<dataLength;i++){
        if(data[i]["schemeCode"] == code){
            name.innerText = data[i]["schemeName"];
            check = true;
            break;
        }
    }

    if (check == false){
        name.innerText = "schemeCode not available in API";
    }

}