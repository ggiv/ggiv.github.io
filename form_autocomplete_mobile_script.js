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
		var radio_buttons_hidden=document.getElementsByClassName("form_radio");
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
		var email_field=document.getElementById("EmailField");
		var close_button=document.getElementById("close_form");
		var error_message=document.getElementById("error_message_1");
		var error_text=document.getElementById("error_text");
		var main_form=document.getElementById("form_001");
		var email=document.getElementById('email_field_01');
		var panel_button=document.getElementById('panel_button');
		var panel=document.getElementById('form_panel');
		var form_close_button=document.getElementById('logo_header_clos_btn');
		var checked_sign_name=document.getElementById('checked_sign_name');
		var checked_sign_phone=document.getElementById('checked_sign_phone');
		var checked_sign_email=document.getElementById('checked_sign_email');
		var name_field=document.getElementById('name_field');
		var phone_field=document.getElementById('phone_field');
		var SUBMIT_FORM=false;
		

		

		main_form.onsubmit=submitForm;
		city_input_button.addEventListener('click',citySelected);
		next_button.addEventListener('click',nextStep2);
		back_button.addEventListener('click',backStep);
		document.getElementById("nothing_else_to_add").addEventListener('click',nothingToAdd);
		console.log(panel_button.addEventListener('click',panelButtonClicked));
		form_close_button.addEventListener('click',formCloseButtonClicked);
		
		name_field.addEventListener('blur',nameBlured);
		phone_field.addEventListener('blur',phoneBlured);
		email.addEventListener('blur',emailBlured);
		
		function nameBlured(){
			if(this.value!=''){
				checked_sign_name.style.visibility='visible';
			}else{
				checked_sign_name.style.visibility='hidden';
			}
		}
		function phoneBlured(){
			if(this.value!=''){
				checked_sign_phone.style.visibility='visible';
			}else{
				checked_sign_phone.style.visibility='hidden';
			}
		}
		function emailBlured(){
			if(this.value.indexOf('@')>0&&email.value.indexOf('.')>0){
				checked_sign_email.style.visibility='visible';
			}else{
				checked_sign_email.style.visibility='hidden';
			}
		}

		
		email.addEventListener('click',email_clicked);
		
		function formCloseButtonClicked()
		{
			var stages=document.getElementsByClassName('form_radio_box');
			for(var i=1;i<stages.length;i++){
				stages[i].style.display='none';
			}
			form_progress.value=10;
			stages[0].style.display='block';
			formStage=1;
			form_shadow.style.display='none';
		}
		
		function email_clicked(){
			next_button.classList.remove("not_active");
			next_button.classList.add("active");
		}

		
		function contactCheckboxClick(){
			if(contact_checked==true){
				contact_checked=false;
				document.getElementsByClassName("list_radio")[14].style['background-image']="url('radio_off_2.png')";
			}else{
				contact_checked=true;
				document.getElementsByClassName("list_radio")[14].style['background-image']="url('radio_on_2.png')";
			}
			if(contact_checked){
			//document.getElementsByClassName("list_radio")[14].style['background-image']="url('radio_on_2.png')";
			}else{
			//document.getElementsByClassName("list_radio")[14].style['background-image']="url('radio_on_2.png')";
			}
			console.log(contact_checked);

		}
		function panelButtonClicked(){
			console.log('click');
			panel.style.display='none';
		}

		email.oninput=function(){
			if(email.value.indexOf('@')>0&&email.value.indexOf('.')>0){
				next_button.classList.remove("not_active");
				next_button.classList.add("active");
			}
			};
			
		
		for(var i=0;i<radio_buttons.length;i++){
			radio_buttons[i].addEventListener('click',radioSpanSelect);
			radio_buttons[i].style["background-image"]="url(radio_off_2.png)";
			radio_buttons[i].style["background-color"]="#FFFFFF";
		}
		function nothingToAdd(){
			next_button.click();
		}
		function submitForm(){
			if(SUBMIT_FORM){
				return true;
			}else{
				return false;
			}
		}
		radio_buttons[14].style["background-image"]="url(radio_on_2.png)";
		radio_buttons[14].style["background-color"]="#FFFFFF";
		function radioSpanSelect(){
		for(var i=0;i<radio_buttons.length;i++){
			//radio_buttons[i].style["background-image"]="url(radio_off_2.png)";
			//radio_buttons[i].style["background-color"]="#FFFFFF";
		}
			for(var i=1;i<this.parentElement.childNodes.length;i+=2)
			{
				if(this.parentElement.childNodes[i].tagName=="LI")
				{
					this.parentElement.childNodes[i].style["background-image"]="url(radio_off_2.png)";
					this.parentElement.childNodes[i].style["background-color"]="#FFFFFF";
				}
			}
			
				this.style["background-image"]="url(radio_on_2.png)";
				this.style["background-color"]="#FAFAFA";
				this.childNodes[1].checked='true';
				next_button.className="active"
				back_button.className="active"
				error_message.classList.remove("animate_me");
		}
		function citySelected(){
			if(city_input.value!=""){
				form_shadow.style.display="flex";
				formIsOk();
			}
		}
		function nextStep2(){
			if(formStage==1&&formIsOk()&&next_button.className=='active'){
				job_types_list.style.display='none';
				how_many_list.style.display='block';
				form_progress.value+=20;
				next_button.classList.remove("active");
				next_button.classList.add("not_active");
				back_button.style.display="block";

				formStage++; 
				formIsOk();
							 
			}else if(formStage==2&&formIsOk()&&next_button.className=='active'){
				how_many_list.style.display='none';
				height_list.style.display='block';
				form_progress.value+=20;
				next_button.classList.remove("active");
				next_button.classList.add("not_active");
				formStage++; 
				formIsOk();
			}else if(formStage==3&&formIsOk()&&next_button.className=='active'){
				height_list.style.display='none';
				job_description.style.display='block';
				form_progress.value+=20;
				//next_button.classList.replace("active","not_active");
				//formIsOk();
				formStage++; 
							 
			}else if(formStage==4&&formIsOk()&&next_button.className=='active'){
				job_description.style.display='none';
				email_field.style.display='block';
				form_progress.value+=20;
				next_button.classList.remove("active");
				next_button.classList.add("not_active");
				error_text.innerHTML="Please add e-mail."
				error_message.style.visibility="hidden";


				//formIsOk();
				formStage++;
			}else if(formStage==5&&formIsOk()&&next_button.className=='active'){
				email_field.style.display='none';
				contact_fields.style.display='block';
				form_progress.value+=20;
				formStage++;
				error_text.innerHTML="Please add best contact number."
				//error_message.style.visibility="visible";
				email_field.style.border='solid 1px red';

			}else if(formStage==6&&formIsOk()&&next_button.className=='active'){
				//contact_fields.style.display='block';
				//next_button.classList.replace("active","not_active");
				formIsOk();
				//formStage++;
				console.log("SENDING FORM");
				SUBMIT_FORM=true;
			}else{
				if(formStage!=5){
					//error_message.classList.add("animate_me");
				}else{
					error_message.classList.remove("animate_me");
					//error_message.classList.add("animate_me_phone");
					error_message.style.top="420px";
				}
			}
			console.log(formStage);
		}
		function backStep(){
			if(formStage==1){

			}else if(formStage==2){
				how_many_list.style.display='none';
				job_types_list.style.display='block';
				form_progress.value-=20;
				back_button.classList.remove("active");
				back_button.classList.add("not_active");
				next_button.classList.remove("not_active");
				next_button.classList.add("active");
				formIsOk();
				formStage--; 
							 
			}else if(formStage==3){
				height_list.style.display='none';
				how_many_list.style.display='block';
				form_progress.value-=20;
				next_button.classList.remove("not_active");
				next_button.classList.add("active");
				formIsOk();
				formStage--; 
			}else if(formStage==4){
				job_description.style.display='none';
				height_list.style.display='block';
				form_progress.value-=20;
				next_button.classList.remove("not_active");
				next_button.classList.add("active");
				formIsOk();
			
				formStage--; 
							 
			}else if(formStage==5){
				email_field.style.display='none';
				job_description.style.display='block';
				form_progress.value-=20;
				next_button.classList.remove("not_active");
				next_button.classList.add("active");
				formIsOk();
				formStage--;
			}else if(formStage==6){
				contact_fields.style.display='none';
				email_field.style.display='block';
				form_progress.value-=20;
				next_button.classList.remove("not_active");
				next_button.classList.add("active");
				formIsOk();
				formStage--;
			}
			error_message.classList.remove("animate_me");
			error_message.classList.remove("animate_me_phone");
			console.log(formStage);
		}
		function closeForm(){
			form_shadow.style.display="none";
		}
		function formIsOk(){
			if(formStage==1){
				var elements=document.getElementsByName("Job_Type");
				for(var i=0;i<elements.length;i++){
					if(elements[i].checked){
						next_button.classList.remove("not_active");
						next_button.classList.add("active");
						return true;

					}
				}
			}else if(formStage==2){
				var elements=document.getElementsByName("Number_of_trees");
				for(var i=0;i<elements.length;i++){
					if(elements[i].checked){
						next_button.classList.remove("not_active");
						next_button.classList.add("active");
						return true;

					}
				}
			}else if(formStage==3){
				var elements=document.getElementsByName("Tree_Height");
				for(var i=0;i<elements.length;i++){
					if(elements[i].checked){
						next_button.classList.remove("not_active");
						next_button.classList.add("active");
						return true;

					}
				}
			}else if(formStage==4){
					next_button.classList.remove("not_active");
					next_button.classList.add("active");
					
					return true;
			}else if(formStage==5){
				if(email.value.indexOf('@')>0){
					next_button.classList.remove("not_active");
					next_button.classList.add("active");
					return true;
				}else{
						email.style.border='solid 1px #ff0000';
				}
			}else if(formStage==6){
				var client_contact=document.getElementsByClassName("form_input");
				var elements=document.getElementsByName("Call_or_email");
					if(client_contact[0].value!=""&&client_contact[1].value!=""){
								console.log('sending emails!!!')
								return true;
					}

			}else{
				return false;
			}

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
