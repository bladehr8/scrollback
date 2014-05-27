var formField = require('../lib/formField.js');

var div = $('<div>').addClass('list-view list-view-irc-settings');


div.append(formField("IRC Server", "text", "ircserver"));
div.append(formField("IRC Channel", "text", "ircchannel"));
div.append($('<div class="settings-item"><div class="settings-label"></div><div class="settings-action" id="roomAllowed"></div></div>'));

libsb.on('config-show', function(conf, next) {
	conf.irc = {
		html: div,
		text: "IRC setup",
		prio: 800
	};
	next();
});

libsb.on('config-save', function(conf, next){
	conf.irc = {
		server : $('#ircserver').val(),
		channel : $('#ircchannel').val()
	};
	next();
});