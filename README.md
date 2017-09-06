[![Build Status](https://travis-ci.org/pipiczistvan/rasputin.svg?branch=master)](https://travis-ci.org/pipiczistvan/rasputin)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/89694444f16f4ccbada2e7cf2d948c76)](https://www.codacy.com/app/istvan-pipicz/rasputin?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pipiczistvan/rasputin&amp;utm_campaign=Badge_Grade)
[![dependencies Status](https://david-dm.org/pipiczistvan/rasputin/status.svg)](https://david-dm.org/pipiczistvan/rasputin)
[![devDependencies Status](https://david-dm.org/pipiczistvan/rasputin/dev-status.svg)](https://david-dm.org/pipiczistvan/rasputin?type=dev)

# Rasputin

A web application for my Raspberry PI.

## Getting Started

These instructions will get you a copy of the project for deployment or development purposes.

### Prerequisites

The following programs have to be installed on your computer:

* [git](https://git-scm.com)
* [nodejs](https://nodejs.org)

### Installing

Clone the repository to your local machine.

```
git clone https://github.com/pipiczistvan/rasputin
```

Navigate to the downloaded repository.

```
cd rasputin
```

Install the necessary node packages.

```
npm install
```

## Deployment

In the rasputin folder run the following script.

```
npm run deploy
```

This will create a *deploy* folder which will contain all the necessary files. Copy everything to the target machine and start the server with the following command.

```
node server.js
```

The server will be listening on port *80*, but you can specify it in the *application.json* file.

## Development

The project is diveded into two modules, both of them can be developed separately:

* [backend](/backend)
* [frontend](/frontend)