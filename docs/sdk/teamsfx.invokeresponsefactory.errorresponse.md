<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx](./teamsfx.md) &gt; [InvokeResponseFactory](./teamsfx.invokeresponsefactory.md) &gt; [errorResponse](./teamsfx.invokeresponsefactory.errorresponse.md)

## InvokeResponseFactory.errorResponse() method

Create an invoke response with error code and message.

The type of the invoke response is `application/vnd.microsoft.error` indicates the request was failed to processed.

<b>Signature:</b>

```typescript
static errorResponse(errorCode: InvokeResponseErrorCode, errorMessage: string): InvokeResponse;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  errorCode | [InvokeResponseErrorCode](./teamsfx.invokeresponseerrorcode.md) | The status code indicates error, available values: - 400 (BadRequest): indicate the incoming request was invalid. - 500 (InternalServerError): indicate an unexpected error occurred. |
|  errorMessage | string | The error message. |

<b>Returns:</b>

InvokeResponse

An `InvokeResponse` object.
