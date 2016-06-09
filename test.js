'use strict';

const assert = require('assert');
const fs = require('fs');
const hasTicketsAvailable = require('./has-tickets-available');

const available = fs.readFileSync(`${__dirname}/fixtures/tickets-available.html`, 'utf-8');
const unavailable = fs.readFileSync(`${__dirname}/fixtures/tickets-unavailable.html`, 'utf-8');

assert.ok(hasTicketsAvailable(available));
assert.equal(hasTicketsAvailable(unavailable), false);
