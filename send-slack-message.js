'use strict';

const got = require('got');

// Send a slack message to a channel/user
const sendSlackMessage = options => {
  const { credentials, url } = options;
  const apiUrl = 'https://slack.com/api/chat.postMessage';
  const data = {
    token: credentials.token,
    channel: credentials.channel || '',
    text: `:runner::dash: Tickets available, run! ${url}`,
    username: 'BrooklynJS',
    icon_emoji: ':tada:'
  };

  got.get(apiUrl, {query: data});
};

module.exports = sendSlackMessage;
