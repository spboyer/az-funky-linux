# Azure Functions on Linux

Quick example of using the Azure Serverless Functions framework inside a Docker Container.

## Requirements

* [Docker](http://docker.com)
* [.NET Core 2.0](http://dot.net)
* The latest [azure-functions-core-tools](https://github.com/azure/azure-functions-cli) `npm install -g azure-functions-core-tools@core`

## Runing the sample locally

* Clone the repository
* run `func start` on the command line
* browse to http://localhost:7071/api/echo - returns *Hello from *hostname* [**architecture** and **processor type**]*
* browse to /api/advocates - returns json result of the [@azureadvocates](https://twitter.com/spboyer/lists/cloud-developer-advocates) list
* browse to /api/advocates?id=1 - returns individual advocate

## Creating a Docker image

When initializing a new function app project, a base Docker image can be added with the `--docker` option.

```bash
func init --docker
```

The Dockerfile added is very basic:

```docker
FROM microsoft/azure-functions-runtime:v2.0.0-beta1
ENV AzureWebJobsScriptRoot=/home/site/wwwroot
COPY . /home/site/wwwroot
```

Create the image for the project

```bash
docker build -t funkylinux .
```

Run the image and map port 80 to a local port.

```bash
docker run -p 3001:80 funkylinux
```

Browse to the same endpoints on the new url - http://localhost:3001/api/echo

