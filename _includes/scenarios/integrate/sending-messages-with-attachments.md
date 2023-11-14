**Attention: Site Under Construction**
Please note that this page is currently under construction, and we are actively working on updates to enhance your experience.
During this period, you encounter incomplete sections or temporary disruptions. If you have any urgent inquiries or need specific information, please feel free to contact us directly. We apologize for any inconvenience and look forward to unveiling the updated site soon.
{: .notice--warning}

The Connector can send and receive messages with attachments using REST requests and file IDs, which are first uploaded and encrypted on the Platform. Messages can be queried and downloaded, and the Connector pulls for new messages periodically.

## Upload Files

In order to submit attachments/files via message, they have to be first uploaded to the Connector. The files are then encrypted and uploaded to the Platform, which results in a FileId for every file.
These FileIds can then be used as attachments to send messages with attachments.

## Download Attachments of Messages

The metadata of attachments can be found within the message, the actual files/binaries must be downloaded separately.
