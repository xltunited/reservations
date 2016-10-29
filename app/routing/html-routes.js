// ========================================
// STATING MY ROUTES
// ========================================

// GET ROUTES
// ========================================

// GET INDEX PAGE REQUEST
app.get("/", function(req, res) {

	// SEND USER TO INDEX WEBPAGE
	res.sendFile(path.join(__dirname, "home.html"));
	

});

// GET INDEX PAGE REQUEST
app.get("/index", function(req, res) {

	// SEND USER TO INDEX WEBPAGE
	res.sendFile(path.join(__dirname, "home.html"));

});

// GET SURVEY PAGE REQUEST
app.get("/survey", function(req, res) {

// SEND USER TO INDEX WEBPAGE
	res.sendFile(path.join(__dirname, "home.html"));

});