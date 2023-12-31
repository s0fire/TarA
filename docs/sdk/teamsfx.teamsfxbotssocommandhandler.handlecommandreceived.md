<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx](./teamsfx.md) &gt; [TeamsFxBotSsoCommandHandler](./teamsfx.teamsfxbotssocommandhandler.md) &gt; [handleCommandReceived](./teamsfx.teamsfxbotssocommandhandler.handlecommandreceived.md)

## TeamsFxBotSsoCommandHandler.handleCommandReceived() method

Handles a bot command received activity.

<b>Signature:</b>

```typescript
handleCommandReceived(context: TurnContext, message: CommandMessage, tokenResponse: TeamsBotSsoPromptTokenResponse): Promise<string | Partial<Activity> | void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  context | TurnContext | The bot context. |
|  message | [CommandMessage](./teamsfx.commandmessage.md) | The command message the user types from Teams. |
|  tokenResponse | [TeamsBotSsoPromptTokenResponse](./teamsfx.teamsbotssoprompttokenresponse.md) | The tokenResponse which contains sso token that can be used to exchange access token for the bot. |

<b>Returns:</b>

Promise&lt;string \| Partial&lt;Activity&gt; \| void&gt;

A `Promise` representing an activity or text to send as the command response. Or no return value if developers want to send the response activity by themselves in this method.

