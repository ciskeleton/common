! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "გთხოვთ, შეიყვანოთ მხოლოდ ასოები, ციფრები და ქვედა ტირეები.",
		date: "გთხოვთ, შეიყვანოთ სწორი თარიღი.",
		digits: "გთხოვთ, შეიყვანოთ მხოლოდ ციფრები.",
		domain: "გთხოვთ, შეიყვანოთ სწორი დომენის სახელი.",
		email: "გთხოვთ, შეიყვანოთ სწორი ელფოსტის მისამართი.",
		equalTo: "გთხოვთ, კვლავ შეიყვანოთ იგივე მნიშვნელობა.",
		exactlength: e.validator.format("გთხოვთ, შეიყვანოთ ზუსტად {0} სიმბოლო."),
		integer: "გთხოვთ, შეიყვანოთ დადებითი ან უარყოფითი მთელი რიცხვი ათწილადის გარეშე.",
		ipv4: "გთხოვთ, შეიყვანოთ სწორი IP v4 მისამართი.",
		ipv6: "გთხოვთ, შეიყვანოთ სწორი IP v6 მისამართი.",
		lettersonly: "გთხოვთ, მხოლოდ ასოები.",
		max: e.validator.format("გთხოვთ, შეიყვანოთ მნიშვნელობა, რომელიც ნაკლებია ან ტოლია {0}-ზე."),
		maxWords: e.validator.format("გთხოვთ, შეიყვანოთ {0} სიტყვა ან ნაკლები."),
		maxlength: e.validator.format("გთხოვთ, შეიყვანოთ არაუმეტეს {0} სიმბოლო."),
		min: e.validator.format("გთხოვთ, შეიყვანოთ მნიშვნელობა, რომელიც მეტია ან ტოლია {0}-ზე."),
		minWords: e.validator.format("გთხოვთ, შეიყვანოთ მინიმუმ {0} სიტყვა."),
		minlength: e.validator.format("გთხოვთ, შეიყვანოთ მინიმუმ {0} სიმბოლო."),
		notEqualTo: "გთხოვთ, შეიყვანოთ განსხვავებული მნიშვნელობა, მნიშვნელობები არ უნდა იყოს ერთნაირი.",
		nowhitespace: "გთხოვთ, ყოველგვარი ჰარის გარეშე",
		required: "ეს ველი სავალდებულოა.",
		url: "გთხოვთ, შეიყვანოთ სწორი URL.",
	}), e
});
