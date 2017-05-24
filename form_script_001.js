(			
 function(){
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
		//######################end of autocomplete#########################3
		var formStage=1;
		var JobType;
		var radio_buttons=document.getElementsByClassName("list_radio");
		var next_button=document.getElementById("next_button");
		var back_button=document.getElementById("back_button");
		var progress_bar=document.getElementById("form_progress");
		var form_shadow=document.getElementsByClassName("form_body_shadow")[0];
		var city_input_button=document.getElementsByClassName("input_button")[0];
		var city_input=document.getElementById("CitySearch");
		var job_types_list=document.getElementById("JobTypesList");
		var how_many_list=document.getElementById("HowManyList");
		var height_list=document.getElementById("heightList");
		var job_description=document.getElementById("JobDescription");
		var contact_fields=document.getElementById("ContactFields");


		


		city_input_button.addEventListener('click',citySelected);
		next_button.addEventListener('click',nextStep2);
		//back_button.addEventListener('click',stepBack);
		for(var i=0;i<radio_buttons.length;i++){
			radio_buttons[i].addEventListener('click',radioSpanSelect);
			radio_buttons[i].style["background-image"]="url(radio_off_2.png)";
			radio_buttons[i].style["background-color"]="#FFFFFF";
		}
		function radioSpanSelect(){
		for(var i=0;i<radio_buttons.length;i++){
			radio_buttons[i].style["background-image"]="url(radio_off_2.png)";
			radio_buttons[i].style["background-color"]="#FFFFFF";
		}
			this.style["background-image"]="url(radio_on_2.png)";
			this.style["background-color"]="#FAFAFA";
			next_button.className="active"
			back_button.className="active"
		}
		function citySelected(){
			if(city_input.value!=""){
				form_shadow.style.display="flex";
			}
		}
		function nextStep2(){
			if(formStage==1){
				job_types_list.style.display='none';
				how_many_list.style.display='block';
				form_progress.value+=20;
				formStage++; 
							 
			}else if(formStage==2){
				how_many_list.style.display='none';
				height_list.style.display='block';
				form_progress.value+=20;
				formStage++; 
			}else if(formStage==3){
				height_list.style.display='none';
				job_description.style.display='block';
				form_progress.value+=30;
				formStage++; 
							 
			}else if(formStage==4){
				job_description.style.display='none';
				contact_fields.style.display='block';
				form_progress.value+=30;
				formStage++;
			}
			console.log(formStage);
		}
		/*
		function nextStep(){
			for(var i=0;i<formFields.length;i++){
				if(hasClass(formFields[i],('stage_'+formStage)){
					if(formStage==1){
						JobType=getRadioValue("Job Type");
						if(JobType){
							
						}
					}
				}
			}
		}
		function hasClass(element,clas){
			if((''+element.className+'').indexOf(''+cls+'')>-1){
				return true;
			}else{
				return false;
			}
		}
		getRadioValue(name){
			var element=document.getElementsByName(name);
			for(var i=0;i<element.length;i++){
				if(element[i].checked){
					return element[i].value;
				}
			}
			return false;
		}
		*/
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
