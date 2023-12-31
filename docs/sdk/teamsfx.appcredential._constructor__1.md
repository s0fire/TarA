<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx](./teamsfx.md) &gt; [AppCredential](./teamsfx.appcredential.md) &gt; [(constructor)](./teamsfx.appcredential._constructor__1.md)

## AppCredential.(constructor)

Constructor of AppCredential.

<b>Signature:</b>

```typescript
constructor(authConfig: AuthenticationConfiguration);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  authConfig | [AuthenticationConfiguration](./teamsfx.authenticationconfiguration.md) | The authentication configuration. Use environment variables if not provided. |

## Exceptions

[InvalidConfiguration](./teamsfx.errorcode.md) when client id, client secret or tenant id is not found in config.

[RuntimeNotSupported](./teamsfx.errorcode.md) when runtime is nodeJS.

## Remarks

Only works in in server side.

