function generateHTML(data) {
    console.log('this is the html', response)
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team profile</title>
</head>

<body>
    <div>
        <h1>My team</h1>
    </div>
    <div class="container">
        <div class="row">
            <div class="card-deck">
                <div class="col-sm-12 col-lg-6">
                    <div class="card h-50">
                        <div class="card-header">
                            <h2>Manager</h2>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>ID: ${response.id}</li>
                                <li>Email: ${response.email}</li>
                                <li>Office Number: ${response.officeNumber}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card h-50">
                        <div class="card-header">
                            <h2>Engineer</h2>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>ID: ${response2.id}</li>
                                <li>Email: ${response2.email}</li>
                                <li>github: ${response2.github}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card h-50">
                        <div class="card-header">
                            <h2>Intern</h2>
                        </div>
                        <div class="card-body">
                            <ul>
                                <li>ID: ${response3.id}</li>
                                <li>Email: ${response3.email}</li>
                                <li>School: ${response3.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>

</html>
`
}


module.exports = generateHTML;