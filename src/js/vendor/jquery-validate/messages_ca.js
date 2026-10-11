! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Només lletres, números i guions baixos, si us plau.",
		date: "Introduïu una data vàlida.",
		digits: "Introduïu només dígits.",
		domain: "Introduïu un nom de domini vàlid.",
		email: "Introduïu una adreça de correu electrònic vàlida.",
		equalTo: "Introduïu el mateix valor de nou.",
		exactlength: e.validator.format("Introduïu exactament {0} caràcters."),
		integer: "Introduïu un nombre enter positiu o negatiu, sense decimals.",
		ipv4: "Introduïu una adreça IP v4 vàlida.",
		ipv6: "Introduïu una adreça IP v6 vàlida.",
		lettersonly: "Només lletres, si us plau.",
		max: e.validator.format("Introduïu un valor menor o igual que {0}."),
		maxWords: e.validator.format("Introduïu {0} paraules o menys."),
		maxlength: e.validator.format("Introduïu com a màxim {0} caràcters."),
		min: e.validator.format("Introduïu un valor major o igual que {0}."),
		minWords: e.validator.format("Introduïu com a mínim {0} paraules."),
		minlength: e.validator.format("Introduïu com a mínim {0} caràcters."),
		notEqualTo: "Introduïu un valor diferent, els valors no poden ser iguals.",
		nowhitespace: "Sense espais en blanc, si us plau",
		required: "Aquest camp és obligatori.",
		url: "Introduïu una URL vàlida.",
	}), e
});
