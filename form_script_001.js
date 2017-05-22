(
	window.onload=function(){
		var demo1 = new autoComplete({
			selector: '#CitySearch',
            minChars: 1,
            source: function(term, suggest){
                term = term.toLowerCase();
                var choices = LIST_OF_CITIES;
				var suggestions = [];
                for (i=0;i<choices.length;i++){
					var firstChar=term.charAt(0);
					if(firstChar=='0'||firstChar=='1'||firstChar=='2'||firstChar=='3'||firstChar=='4'||firstChar=='5'||firstChar=='6'||firstChar=='7'||firstChar=='8'||firstChar=='9'){
						if(choices[i].toLowerCase().indexOf(term.toLowerCase())===0){
							suggestions.push(choices[i]);
						};
					}
					else if(choices[i].toLowerCase().indexOf(term.toLowerCase())===5){
						suggestions.push(choices[i]);
					}
					else if(choices[i].toLowerCase().indexOf(term.toLowerCase())===0){
						suggestions.push(choices[i]);
					}
				}
                suggest(suggestions);
            }
        });
				}
)();

/*
                for (i=0;i<choices.length;i++)
                    if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
                suggest(suggestions);
*/

/*
 ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];

 */
