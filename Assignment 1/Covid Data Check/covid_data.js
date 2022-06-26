async function getData(){
    let date = document.getElementById('date').value;
    let cases = document.getElementById('cases');
    let deaths = document.getElementById('deaths');
    const url = "https://data.covid19india.org/data.json";
    let data = await (await fetch(url)).json();
    // let cases_time_series = data["cases_time_series"];

    for(let i=0;i<data["cases_time_series"].length;i++){
        const day = data["cases_time_series"][i];
        if (day["date"] == date){
            cases.innerText = day["dailyconfirmed"];
            deaths.innerText = day["dailydeceased"];
        }
    }
}
