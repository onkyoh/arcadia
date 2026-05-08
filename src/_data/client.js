module.exports = {
	name: "Arcadia Micro Structures",
	email: "partnerships@arcadiamicrostructures.com",

	//! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
	domain: "https://arcadiamicrostructures.com",
	// Passing the isProduction variable for use in HTML templates
	isProduction: process.env.ELEVENTY_ENV === "PROD",
};
