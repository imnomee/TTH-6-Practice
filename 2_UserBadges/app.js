const https = require('https');
const http = require('http');

// console.log(http.STATUS_CODES);
function printError(error) {
    console.error(error.message);
}
function getProfile(username) {
    try {
        //connect to API URL ('https://treamtreehouse.com/.json',);
        const request = https.get(
            `https://teamtreehouse.com/profiles/${username}.json`,
            (res) => {
                if (res.statusCode === 200) {
                    let body = '';
                    //Read the data
                    res.on('data', (data) => {
                        body += data.toString();
                    });
                    //Parse the data
                    res.on('end', () => {
                        try {
                            const profile = JSON.parse(body);
                            // console.log(profile);
                            PrintMessage(
                                username,
                                profile.badges.length,
                                profile.points.total
                            );
                        } catch (error) {
                            printError(error);
                        }
                    });
                } else {
                    console.log(res.statusCode);
                    console.log(http.STATUS_CODES[res.statusCode]);
                }
            }
        );
        //Print the data
        request.on('error', (error) => {
            printError(error);
        });
    } catch (error) {
        printError(error);
    }
}

function PrintMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total Badge(s) and ${points} total points.`;
    console.log(message);
}

// console.dir(process.argv.slice(2));
const users = process.argv.slice(2);
users.forEach((user) => {
    getProfile(user);
});
