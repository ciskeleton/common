! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Palun sisestage ainult tähed, numbrid ja allkriipsud.",
		date: "Palun sisestage kehtiv kuupäev.",
		digits: "Palun sisestage ainult numbrid.",
		domain: "Palun sisestage kehtiv domeeninimi.",
		email: "Palun sisestage kehtiv e-posti aadress.",
		equalTo: "Palun sisestage sama väärtus uuesti.",
		exactlength: e.validator.format("Palun sisestage täpselt {0} tähemärki."),
		integer: "Palun sisestage positiivne või negatiivne täisarv ilma kümnendkohtadeta.",
		ipv4: "Palun sisestage kehtiv IP v4 aadress.",
		ipv6: "Palun sisestage kehtiv IP v6 aadress.",
		lettersonly: "Palun ainult tähed.",
		max: e.validator.format("Palun sisestage väärtus, mis on väiksem või võrdne kui {0}."),
		maxWords: e.validator.format("Palun sisestage {0} sõna või vähem."),
		maxlength: e.validator.format("Palun sisestage mitte rohkem kui {0} tähemärki."),
		min: e.validator.format("Palun sisestage väärtus, mis on suurem või võrdne kui {0}."),
		minWords: e.validator.format("Palun sisestage vähemalt {0} sõna."),
		minlength: e.validator.format("Palun sisestage vähemalt {0} tähemärki."),
		notEqualTo: "Palun sisestage erinev väärtus, väärtused ei tohi olla samad.",
		nowhitespace: "Palun ilma tühikuteta",
		required: "See väli on kohustuslik.",
		url: "Palun sisestage kehtiv URL.",
	}), e
});
