'use strict';

const Gio = imports.gi.Gio;
const Gtk = imports.gi.Gtk;

const Gettext = imports.gettext.domain('gnome-shell-extensions');
const _ = Gettext.gettext;

const ExtensionUtils = imports.misc.extensionUtils;

function init() {
	ExtensionUtils.initTranslations();
}

function buildPrefsWidget() {
    let settings = ExtensionUtils.getSettings();
	let box = new Gtk.Box({
		halign: Gtk.Align.CENTER,
		orientation: Gtk.Orientation.VERTICAL,
		'margin-top': 20,
		'margin-bottom': 20,
		'margin-start': 20,
		'margin-end': 20,
		spacing: 16
	});

	box.append(buildSwitcher(settings, 'move-hot-corners', _('Move Hot Corners:')));

	return box;
}

function buildSwitcher(settings, key, labeltext) {
	let hbox = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL, spacing: 10 });

	let label = new Gtk.Label({label: labeltext });

	let switcher = new Gtk.Switch();

	settings.bind(key, switcher, 'active', Gio.SettingsBindFlags.DEFAULT);

	hbox.append(label);
	hbox.append(switcher);

	return hbox;
}