function generateMarkdown(data) {
    return `# ${data.title} </br> ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)
    
## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Licensure](#Licensure)


## Description

${data.description}


## Installation

${data.installation}


## Usage

${data.usage}


## Contributions

${data.contributions}


## Tests

${data.test}


## Questions
For any questions please please reach out via the following -


**GitHub**: [${data.github}][1] </br>
**Email**: ${data.email}

[1]: https://github.com/${data.github}

## Licensure

**${data.license}** 

    `
}

module.exports = generateMarkdown;