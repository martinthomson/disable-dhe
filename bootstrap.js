/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
'use strict';

const { classes: Cc, interfaces: Ci } = Components;
const prefService = Cc['@mozilla.org/preferences-service;1'].
                    getService(Ci.nsIPrefService).
                    QueryInterface(Ci.nsIPrefBranch);
const prefs = [
  'security.ssl3.dhe_rsa_aes_128_sha',
  'security.ssl3.dhe_rsa_aes_256_sha'
];

function install() {}
function uninstall() {}

function startup() {
  prefs.forEach(pref => {
    prefService.setBoolPref(pref, false);
  });
}
function shutdown() {
  prefs.forEach(pref => {
    prefService.clearUserPref(pref);
  });
}
