"use strict"
const dialogflow = require('dialogflow');
const config = require('../config/keys');

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);
const languageCode = config.dialogFlowSessionLanguageCode

module.exports = {
    textQuery: async function(text, parameters = {}) {
        let self = module.exports
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode
                }
            },
            queryParams: {
                payload: {
                    data: parameters
                }
            }
        };
        let responses = await sessionClient.detectIntent(request);
            responses = await self.handleAction(responses)
        return responses
    },
    handleAction: function(responses) {
        return responses
    }
}