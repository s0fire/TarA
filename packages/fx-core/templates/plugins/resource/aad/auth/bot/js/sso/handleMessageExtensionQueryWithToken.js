const { TeamsActivityHandler, CardFactory } = require("botbuilder");
const {
  handleMessageExtensionQueryWithSSO,
  createMicrosoftGraphClientWithCredential,
  OnBehalfOfUserCredential,
} = require("@microsoft/teamsfx");
require("isomorphic-fetch");

const oboAuthConfig = {
  authorityHost: process.env.M365_AUTHORITY_HOST,
  clientId: process.env.M365_CLIENT_ID,
  tenantId: process.env.M365_TENANT_ID,
  clientSecret: process.env.M365_CLIENT_SECRET,
};

const initialLoginEndpoint = process.env.INITIATE_LOGIN_ENDPOINT;

class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();
  }

  async handleTeamsMessagingExtensionQuery(context, query) {
    // eslint-disable-next-line no-secrets/no-secrets
    /**
     * User Code Here.
     * If query without token, no need to implement handleMessageExtensionQueryWithSSO;
     * Otherwise, just follow the sample code below to modify the user code.
     */
    return await handleMessageExtensionQueryWithSSO(
      context,
      oboAuthConfig,
      initialLoginEndpoint,
      "User.Read",
      async (token) => {
        // User Code
        // Init OnBehalfOfUserCredential instance with SSO token
        const credential = new OnBehalfOfUserCredential(token.ssoToken, oboAuthConfig);

        // Add scope for your Azure AD app. For example: Mail.Read, etc.
        const graphClient = createMicrosoftGraphClientWithCredential(credential, "User.Read");

        // Call graph api use `graph` instance to get user profile information.
        const profile = await graphClient.api("/me").get();

        // Organize thumbnailCard to display User's profile info.
        const thumbnailCard = CardFactory.thumbnailCard(profile.displayName, profile.mail);

        // Message Extension return the user profile info to user.
        return {
          composeExtension: {
            type: "result",
            attachmentLayout: "list",
            attachments: [thumbnailCard],
          },
        };
      }
    );
  }

  async handleTeamsMessagingExtensionSelectItem(context, obj) {
    return {
      composeExtension: {
        type: "result",
        attachmentLayout: "list",
        attachments: [CardFactory.heroCard(obj.name, obj.description)],
      },
    };
  }
}

module.exports.TeamsBot = TeamsBot;
