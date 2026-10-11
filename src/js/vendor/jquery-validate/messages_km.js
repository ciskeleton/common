! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "សូមបញ្ចូលតែអក្សរ លេខ និងសញ្ញាគូសក្រោមប៉ុណ្ណោះ។",
		date: "សូមបញ្ចូលកាលបរិច្ឆេទត្រឹមត្រូវ។",
		digits: "សូមបញ្ចូលតែលេខប៉ុណ្ណោះ។",
		domain: "សូមបញ្ចូលឈ្មោះដែនត្រឹមត្រូវ។",
		email: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ។",
		equalTo: "សូមបញ្ចូលតម្លៃដូចគ្នាម្តងទៀត។",
		exactlength: e.validator.format("សូមបញ្ចូលចំនួន {0} តួអក្សរយ៉ាងពិតប្រាកដ។"),
		integer: "សូមបញ្ចូលចំនួនគត់វិជ្ជមាន ឬអវិជ្ជមានដោយគ្មានទសភាគ។",
		ipv4: "សូមបញ្ចូលអាសយដ្ឋាន IP v4 ត្រឹមត្រូវ។",
		ipv6: "សូមបញ្ចូលអាសយដ្ឋាន IP v6 ត្រឹមត្រូវ។",
		lettersonly: "សូមបញ្ចូលតែអក្សរប៉ុណ្ណោះ។",
		max: e.validator.format("សូមបញ្ចូលតម្លៃតិចជាង ឬស្មើ {0}។"),
		maxWords: e.validator.format("សូមបញ្ចូល {0} ពាក្យ ឬតិចជាង។"),
		maxlength: e.validator.format("សូមបញ្ចូលមិនលើសពី {0} តួអក្សរ។"),
		min: e.validator.format("សូមបញ្ចូលតម្លៃធំជាង ឬស្មើ {0}។"),
		minWords: e.validator.format("សូមបញ្ចូលយ៉ាងហោចណាស់ {0} ពាក្យ។"),
		minlength: e.validator.format("សូមបញ្ចូលយ៉ាងហោចណាស់ {0} តួអក្សរ។"),
		notEqualTo: "សូមបញ្ចូលតម្លៃផ្សេង តម្លៃមិនត្រូវដូចគ្នាទេ។",
		nowhitespace: "សូមកុំបញ្ចូលចន្លោះទទេ",
		required: "ត្រូវបំពេញប្រអប់នេះ។",
		url: "សូមបញ្ចូល URL ត្រឹមត្រូវ។",
	}), e
});
