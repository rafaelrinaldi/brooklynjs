'use strict';

const cheerio = require('cheerio');

// Returns `true` if there are tickets available
const hasTicketsAvailable = markup => {
  const $ = cheerio.load(markup);
  const availability = $('#tito-releases .tito-ticket').not('.tito-ticket-status-upcoming').length;

  return availability;
};

module.exports = hasTicketsAvailable;
