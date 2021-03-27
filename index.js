const morgan = require("morgan);

morgan.token("req-body", function (req, res) {
      return Object.keys(req.body).length !== 0 ? JSON.stringify(req.body) : "";
});
  
  
  
  
  
  
//  usage
  
// Assumptions 
  // json middleware
