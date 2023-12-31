<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx](./teamsfx.md) &gt; [BotBuilderCloudAdapter](./teamsfx.botbuildercloudadapter.md) &gt; [TeamsBotInstallation](./teamsfx.botbuildercloudadapter.teamsbotinstallation.md) &gt; [sendMessage](./teamsfx.botbuildercloudadapter.teamsbotinstallation.sendmessage.md)

## BotBuilderCloudAdapter.TeamsBotInstallation.sendMessage() method

Send a plain text message.

<b>Signature:</b>

```typescript
sendMessage(text: string, onError?: (context: TurnContext, error: Error) => Promise<void>): Promise<MessageResponse>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  text | string | The plain text message. |
|  onError | (context: TurnContext, error: Error) =&gt; Promise&lt;void&gt; | An optional error handler that can catch exceptions during message sending. If not defined, error will be handled by <code>BotAdapter.onTurnError</code>. |

<b>Returns:</b>

Promise&lt;MessageResponse&gt;

The response of sending message.

