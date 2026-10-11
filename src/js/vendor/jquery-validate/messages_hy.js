! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Միայն տառեր, թվեր և ընդգծման նշաններ, խնդրում եմ։",
		date: "Խնդրում եմ մուտքագրել վավեր ամսաթիվ։",
		digits: "Խնդրում եմ մուտքագրել միայն թվեր։",
		domain: "Խնդրում եմ մուտքագրել վավեր տիրույթի անուն։",
		email: "Խնդրում եմ մուտքագրել վավեր էլ. փոստի հասցե։",
		equalTo: "Խնդրում եմ կրկին մուտքագրել նույն արժեքը։",
		exactlength: e.validator.format("Խնդրում եմ մուտքագրել ուղիղ {0} նշան։"),
		integer: "Խնդրում եմ մուտքագրել դրական կամ բացասական ամբողջ թիվ՝ առանց տասնորդականի։",
		ipv4: "Խնդրում եմ մուտքագրել վավեր IP v4 հասցե։",
		ipv6: "Խնդրում եմ մուտքագրել վավեր IP v6 հասցե։",
		lettersonly: "Միայն տառեր, խնդրում եմ։",
		max: e.validator.format("Խնդրում եմ մուտքագրել {0}-ից փոքր կամ հավասար արժեք։"),
		maxWords: e.validator.format("Խնդրում եմ մուտքագրել {0} բառ կամ ավելի քիչ։"),
		maxlength: e.validator.format("Խնդրում եմ մուտքագրել ոչ ավելի քան {0} նշան։"),
		min: e.validator.format("Խնդրում եմ մուտքագրել {0}-ից մեծ կամ հավասար արժեք։"),
		minWords: e.validator.format("Խնդրում եմ մուտքագրել առնվազն {0} բառ։"),
		minlength: e.validator.format("Խնդրում եմ մուտքագրել առնվազն {0} նշան։"),
		notEqualTo: "Խնդրում եմ մուտքագրել այլ արժեք, արժեքները չպետք է նույնը լինեն։",
		nowhitespace: "Առանց բացատների, խնդրում եմ",
		required: "Այս դաշտը պարտադիր է։",
		url: "Խնդրում եմ մուտքագրել վավեր URL։",
	}), e
});
