'use strict';

const got = require('got');
const dateFormat = require('dateformat');
const options = require('./options');
const hasTicketsAvailable = require('./has-tickets-available');
const sendSlackMessage = require('./send-slack-message');

// Hit the tickets page and see what's up
const fetch = url => {
  return got(url, {timeout: 10000})
    .then(response => {
      if (response.statusCode === 200) {
        return response.body;
      } else {
        throw new Error('something wrong when searching for ticket availability');
      }
    })
    .then(response => hasTicketsAvailable(response))
    .then(response => {
      if (response) {
        sendSlackMessage(options);
      } else {
        const time = dateFormat(new Date());

        console.log(`${time} - Nothing yet`);
      }
    });
};

setInterval(() => {
  fetch(options.url);
}, options.delay);

fetch(options.url);

console.log(`Hitting ${options.url} every ${options.delay} milliseconds`);
console.log('Press ⌃C to quit');
