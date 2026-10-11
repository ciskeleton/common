! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Tafadhali weka herufi, namba na alama za chini pekee.",
		date: "Tafadhali weka tarehe sahihi.",
		digits: "Tafadhali weka namba pekee.",
		domain: "Tafadhali weka jina la kikoa sahihi.",
		email: "Tafadhali weka anwani sahihi ya barua pepe.",
		equalTo: "Tafadhali weka thamani sawa tena.",
		exactlength: e.validator.format("Tafadhali weka herufi {0} hasa."),
		integer: "Tafadhali weka namba kamili chanya au hasi bila desimali.",
		ipv4: "Tafadhali weka anwani sahihi ya IP v4.",
		ipv6: "Tafadhali weka anwani sahihi ya IP v6.",
		lettersonly: "Tafadhali herufi pekee.",
		max: e.validator.format("Tafadhali weka thamani ndogo kuliko au sawa na {0}."),
		maxWords: e.validator.format("Tafadhali weka maneno {0} au chini yake."),
		maxlength: e.validator.format("Tafadhali usiweke zaidi ya herufi {0}."),
		min: e.validator.format("Tafadhali weka thamani kubwa kuliko au sawa na {0}."),
		minWords: e.validator.format("Tafadhali weka angalau maneno {0}."),
		minlength: e.validator.format("Tafadhali weka angalau herufi {0}."),
		notEqualTo: "Tafadhali weka thamani tofauti, thamani hazipaswi kuwa sawa.",
		nowhitespace: "Tafadhali bila nafasi tupu",
		required: "Sehemu hii inahitajika.",
		url: "Tafadhali weka URL sahihi.",
	}), e
});
