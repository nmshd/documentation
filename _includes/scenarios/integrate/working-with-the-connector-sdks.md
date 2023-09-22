## TypeScript SDK

There is an SDK written in TypeScript you can use to communicate with your Connector from your TypeScript/JavaScript application. It is avaliable on [npmjs](https://www.npmjs.com/package/@nmshd/connector-sdk).

### Installation

```bash
npm i @nmshd/connector-sdk
```

### Usage

1. Initialize the `ConnectorClient`

   ```ts
   const connectorClient = ConnectorClient.create({
     baseUrl: "https://<INSERT_YOUR_CONNECTOR_DOMAIN_HERE>",
     apiKey: "<INSERT_YOUR_API_KEY_HERE>"
   });
   ```

2. Start using the client

   ```ts
   const FILE_PATH = "path-to-file";
   const uploadOwnFileResponse = await client.files.uploadOwnFile({
     title: "My awesome file",
     description: "Test file",
     expiresAt: "2022-01-01T00:00:00Z",
     file: await fs.promises.readFile(FILE_PATH),
     filename: "my-awesome-file.txt"
   });

   if (uploadOwnFileResponse.isSuccess) {
     console.log(uploadOwnFileResponse.result);
   } else {
     console.log(uploadOwnFileResponse.error);
   }
   ```
