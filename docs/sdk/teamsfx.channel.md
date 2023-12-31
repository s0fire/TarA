<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@microsoft/teamsfx](./teamsfx.md) &gt; [Channel](./teamsfx.channel.md)

## Channel class

A [NotificationTarget](./teamsfx.notificationtarget.md) that represents a team channel.

<b>Signature:</b>

```typescript
export declare class Channel implements NotificationTarget 
```
<b>Implements:</b> [NotificationTarget](./teamsfx.notificationtarget.md)

## Remarks

It's recommended to get channels from .

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(parent, info)](./teamsfx.channel._constructor_.md) |  | Constructor. |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [info](./teamsfx.channel.info.md) |  | ChannelInfo | Detailed channel information. |
|  [parent](./teamsfx.channel.parent.md) |  | [TeamsBotInstallation](./teamsfx.teamsbotinstallation.md) | The parent [TeamsBotInstallation](./teamsfx.teamsbotinstallation.md) where this channel is created from. |
|  [type](./teamsfx.channel.type.md) |  | [NotificationTargetType](./teamsfx.notificationtargettype.md) | Notification target type. For channel it's always "Channel". |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [sendAdaptiveCard(card, onError)](./teamsfx.channel.sendadaptivecard.md) |  | Send an adaptive card message. |
|  [sendMessage(text, onError)](./teamsfx.channel.sendmessage.md) |  | Send a plain text message. |

