! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "कृपया फक्त अक्षरे, अंक आणि अंडरस्कोर वापरा.",
		date: "कृपया वैध तारीख प्रविष्ट करा.",
		digits: "कृपया फक्त अंक प्रविष्ट करा.",
		domain: "कृपया वैध डोमेन नाव प्रविष्ट करा.",
		email: "कृपया वैध ईमेल पत्ता प्रविष्ट करा.",
		equalTo: "कृपया पुन्हा तेच मूल्य प्रविष्ट करा.",
		exactlength: e.validator.format("कृपया नेमके {0} वर्ण प्रविष्ट करा."),
		integer: "कृपया धन किंवा ऋण पूर्णांक दशांशाशिवाय प्रविष्ट करा.",
		ipv4: "कृपया वैध IP v4 पत्ता प्रविष्ट करा.",
		ipv6: "कृपया वैध IP v6 पत्ता प्रविष्ट करा.",
		lettersonly: "कृपया फक्त अक्षरे.",
		max: e.validator.format("कृपया {0} पेक्षा कमी किंवा समान मूल्य प्रविष्ट करा."),
		maxWords: e.validator.format("कृपया {0} शब्द किंवा कमी प्रविष्ट करा."),
		maxlength: e.validator.format("कृपया {0} पेक्षा जास्त वर्ण प्रविष्ट करू नका."),
		min: e.validator.format("कृपया {0} पेक्षा जास्त किंवा समान मूल्य प्रविष्ट करा."),
		minWords: e.validator.format("कृपया किमान {0} शब्द प्रविष्ट करा."),
		minlength: e.validator.format("कृपया किमान {0} वर्ण प्रविष्ट करा."),
		notEqualTo: "कृपया वेगळे मूल्य प्रविष्ट करा, मूल्ये समान नसावीत.",
		nowhitespace: "कृपया रिकामी जागा वापरू नका",
		required: "हे क्षेत्र आवश्यक आहे.",
		url: "कृपया वैध URL प्रविष्ट करा.",
	}), e
});
