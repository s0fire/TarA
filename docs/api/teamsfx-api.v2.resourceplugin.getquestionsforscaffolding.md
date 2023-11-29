<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx-api](./teamsfx-api.md) &gt; [v2](./teamsfx-api.v2.md) &gt; [ResourcePlugin](./teamsfx-api.v2.resourceplugin.md) &gt; [getQuestionsForScaffolding](./teamsfx-api.v2.resourceplugin.getquestionsforscaffolding.md)

## v2.ResourcePlugin.getQuestionsForScaffolding property

Plugins that need to collect user input are expected to implement this method. Questions are organized as a tree. Please see [QTreeNode](./teamsfx-api.qtreenode.md)<!-- -->.

getQuestionsForScaffolding() is guaranteed to be called before scaffoldSourceCode().

<b>Signature:</b>

```typescript
getQuestionsForScaffolding?: (ctx: Context, inputs: Inputs) => Promise<Result<QTreeNode | undefined, FxError>>;
```