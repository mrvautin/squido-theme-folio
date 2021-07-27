const path = require('path');
const fs = require('fs');

const run = (opts) => {
    const config = process.squido;

    let robots = 
`User-agent: *
Allow: /`;

    if(config.envVars.robots){
        robots = 
`User-agent: *
${config.envVars.robots}`;
    }

    const filePath = path.join(config.buildDir, 'robots.txt');
    fs.writeFileSync(filePath, robots);
};

module.exports = {
    run
};