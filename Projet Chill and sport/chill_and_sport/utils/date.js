

function getDate(dateStr)
{
    const dateHeure = dateStr.split("T");

    //console.log(dateHeure);

    const dateArray = dateHeure[0].split("-");

    //console.log(dateArray);

    //console.log(dateHeure[1]);

    const heure = dateHeure[1].substr(0, 5);

    //console.log(heure);

    return {
        date: dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0],
        heure: heure
    }
}

export default getDate;