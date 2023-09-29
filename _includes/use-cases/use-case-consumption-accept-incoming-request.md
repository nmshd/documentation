Attempts to accept an incomming request by it's Id.

The items array indicate the decision made for each individual request item in the request.

## Parameters

```js
{
    requestId: string,
    items: (DecideRequestItemParametersJSON | DecideRequestItemGroupParametersJSON)[]
}
```

## Return Value

```ts
{
    id: string,
    isOwn: boolean,
    peer: string,
    createdAt: string,
    status: [LocalRequestStatus](http://www.google.com),
    content: RequestJSON;
    source?: LocalRequestSourceDTO;
    response?: LocalResponseDTO;
}

enum LocalRequestStatus {
    Draft = "Draft",
    Open = "Open",
    DecisionRequired = "DecisionRequired",
    ManualDecisionRequired = "ManualDecisionRequired",
    Decided = "Decided",
    Completed = "Completed",
    Expired = "Expired"
}
```
<pre>
 <code>
  <a href="https://github.com/gmarciani">gmarciani</a>
 </code>
</pre>
## Example 


```js
const acceptResponse = await runtime.consumptionServices.incommingRequests.accept(
    {
        requestId: "REQ_ID",
        items: [{ accept: true }]
    }
);
if (acceptResponse.isError) {
    throw new Error(acceptResponse.error);
}
```
