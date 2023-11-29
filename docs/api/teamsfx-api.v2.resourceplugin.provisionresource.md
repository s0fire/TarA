<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx-api](./teamsfx-api.md) &gt; [v2](./teamsfx-api.v2.md) &gt; [ResourcePlugin](./teamsfx-api.v2.resourceplugin.md) &gt; [provisionResource](./teamsfx-api.v2.resourceplugin.provisionresource.md)

## v2.ResourcePlugin.provisionResource property

provisionResource() runs before ARM/Bicep provision when Provision command is called. There are two reasons why a resource needs to implement this method: 1) to generate input for ARM/Bicep provision to consume. 2) the resource can't be provisioned using resource templates like ARM/Bicep. Two typical resources that need to implement this method are AAD(Azure Active Directory) and AppSudio, which statisfy both above criteria.

A plugin can get access tokens to cloud service using TokenProvider.

<b>Signature:</b>

```typescript
provisionResource?: (ctx: Context, inputs: ProvisionInputs, envInfo: DeepReadonly<EnvInfoV2>, tokenProvider: TokenProvider) => Promise<Result<ResourceProvisionOutput, FxError>>;
```