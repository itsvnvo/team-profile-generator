const generateHTML = function (teamCard) {
    console.log("You made a html");
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="./dist/style.css" rel="stylesheet">
    
    </head>
    <div class=header> 
        <h1>My Team</h1>
    </div>
    <body>
        </div>
            <div class="container">
                <div class="row">
            ${teamCard} 
            </div>
        </div>
    </body>
</html>`

}

const generateCard = function (data) {

    let teamEl = ""

    if (data.role === "Manager") {
        teamEl = `Office Number: ${response2.officeNumber}`
    } else if (data.role === "Engineer") {
        teamEl = `Github Username: <a href="https://github.com/${response2.github}">https://github.com/${response2.github}</a>`
    } else if (data.role === "Intern") {
        teamEl = `School: ${response2.school}`
    }

    return `
        <div class="card">
            <div class="card-header">
                <h2>${response.name}</h2>  
                <h2> ${data.role}</h2>
            </div>
        <div class="card-body">
             <ul>
                <li>ID: ${response.id}</li>
                <li>Email:<a href="mailto:${response.email}">${response.email}</a></li>
                <li>${teamEl}</li>
            </ul>
         </div>
        </div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;