var relex = require('relex');
var graphvizClass = require('./lib/deps/graphvizClass');



exports.generateGraph = function(type,website_path,result_file,include_node_modules,cbGenGraph) {

	relex.extract(website_path,include_node_modules,function(err,report){	
		errorHandler(err);	

		if(type == "jpg" || type == "png" || type == "svg" || type == "dot" || type == "pdf"){
			graphvizClass.generateGraph(JSON.stringify(report),type,result_file,false,function(err){
				errorHandler(err)
				cbGenGraph(err);
			}); 
		}
		else{
			cbGenGraph(err,"");
		}
	});	

	function errorHandler(err){
		if(err){
			console.log("Error (main.js):",err);
		}	
	}

};
exports.generateGraphFromJSON = function(type,report,result_file,cbGenGraphtwo) {

	if(type === "jpg" || type === "png" || type === "svg" || type === "dot" || type === "pdf" || type === "archvis"){

		graphvizClass.generateGraph(JSON.stringify(report),type,result_file,true,function(err){
			
			errorHandler(err);
			

			cbGenGraphtwo(err,"");
		}); 
	}
	else{
		cbGenGraphtwo(null,"");
	}

	function errorHandler(err){
		if(err){
			console.log("Error (main.js):",err);
		}	
	}

};