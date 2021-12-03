const renderCountries = (arr) => {


    let returnHTML = "";

    for (const country of arr) {
        console.log(country.name.official);
        returnHTML += `
        <div>${country.name.official}
        </div>
        `
    }
    return returnHTML;
}

const renderFlags = (arr) => {
    let returnHTML = "";
    for (const flag of arr) {
        returnHTML += `
        <img src="${flag.flags.png}">`

    }
    return returnHTML;
}

async function init() {

    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();

    //renderCountries(countryArr);

    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="countryNames">${renderCountries(countryArr)}</div>`);
    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="countryFlags">${renderFlags(countryArr)})</div>`);
}

window.addEventListener("load", init());