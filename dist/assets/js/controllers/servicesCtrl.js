'use strict';
/** 
  * controller for user authentication.
*/
app.controller('servicesCtrl', [
	'$scope',
	'$state',
	'$stateParams',
	'$auth',
	function($scope, $state, $stateParams, $auth){
		var currState = $state.current.name;
		var services = {
			'property':	{
				name : 'Property Management',
				img  : 'assets/images/services-1.jpg',
				desc : 'Our service specializes in Post Renovation Cleaning Services, Construction cleaning services, and Neglected property cleaning so we understand the importance of removing the dust and debris after a renovation/construction is completed, our company, is fully prepared to work within your time constraints; ',
				items: [
							{
								title : 'Buying/Selling Assistance',
								price : '2000'
							},{
								title : 'Property Maintenance',
								price : '2000'
							},{
								title : 'Utility Bill Payments',
								price : '2000'
							},{
								title : 'Statutory Payments',
								price : '2000'
							},{
								title : 'Rental Collection',
								price : '2000'
							},{
								title : 'Tenant Management/Inspections',
								price : '2000'
							},{
								title : 'Home Cleaning & Maintenance',
								price: '2000'
							},{
								title : 'New Construction & Renovation',
								price: '2000'
							},{	
								title :'Electrical, Plumbing & Painting',
								price : '2000'
							},{	
								title : 'Interior Designing',
								price : '2000'
							},{		
								title : 'Encumbrance/Patta & Other Legal Certificates',
								price : '2000'
							}
						],		
				icon : '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-home text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why would I need a property management company for my property?",
								ans   : "A Property management company takes care of all the effort, time and stress involved in managing one's property."+
										"It nulls out the drawback of distance for NRIs owning properties in India."+
										"With a property management company you manage your property virtually from the comfort of your house."
							},
							{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts."+
										"NRIServicesOnline employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							},
							{
								title : "How do I register for the Service ?",
								ans   : "To register with our company you need to create a login and password, and pay the relevant fees."+
										"Our user friendly website will prompt you for a login."
							}
						]   
			},
			'medical':	{
				name : 'Medical Services',
				img  : 'assets/images/services-2.jpg',
				desc :	'Our service specializes in Post Renovation Cleaning Services, Construction cleaning services, and Neglected property cleaning so we understand the importance of removing the dust and debris after a renovation/construction is completed, our company, is fully prepared to work within your time constraints; ',
				items:	[
							{ 
								title : 'Home Health Care',
								price : '2000'
							},{
								title : 'Medicine Delivery',
								price :	'2000'
							},{
								title : 'Laboratory Tests At Home',
								price : '2000'
							},{		
								title : 'Geriatric care',
								price : '2000'
							},{
								title : 'Emergency care',
								price : '2000'
							},{
								title : 'Medical Tourism',
								price :	'2000'
							},{
								title : 'Scheduled Health Checkups – One Time & Recurring',
								price :'2000'
							}
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-ambulance text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why would I need a property management company for my property?",
								ans   : "A Property management company takes care of all the effort, time and stress involved in managing one's property."+
										"It nulls out the drawback of distance for NRIs owning properties in India."+
										"With a property management company you manage your property virtually from the comfort of your house."
							},
							{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts."+
										"NRIServicesOnline employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							},
							{
								title : "How do I register for the Service ?",
								ans   : "To register with our company you need to create a login and password, and pay the relevant fees."+
										"Our user friendly website will prompt you for a login."
							}
						]	   
			},
			'legal':	{
				name : 'Auditing & Legal Services',
				img  : 'assets/images/services-3.jpg',
				desc :	'Our service specializes in Post Renovation Cleaning Services, Construction cleaning services, and Neglected property cleaning so we understand the importance of removing the dust and debris after a renovation/construction is completed, our company, is fully prepared to work within your time constraints; ',
				items:	[
							{
								title : 'IT Returns Filing',
								price : '2000'
							},{
								title : 'Arranging Lawyer/Legal Advice',
								price : '2000'
							},{
								title : 'Responding To IT Notice, Tax Notifications',
								price : '2000'
							},{		
								title : 'Court Visits',
								price : '2000'
							},{
								title :'Notarization/Attestation Of Documents',
								price : '2000'
							}	
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-gavel text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why would I need a property management company for my property?",
								ans   : "A Property management company takes care of all the effort, time and stress involved in managing one's property."+
										"It nulls out the drawback of distance for NRIs owning properties in India."+
										"With a property management company you manage your property virtually from the comfort of your house."
							},
							{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts."+
										"NRIServicesOnline employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							},
							{
								title : "How do I register for the Service ?",
								ans   : "To register with our company you need to create a login and password, and pay the relevant fees."+
										"Our user friendly website will prompt you for a login."
							}
						]	   
			},
			'document':	{
				name : 'Document Procurement',
				img  : 'assets/images/services-4.jpg',
				desc :	'Our service specializes in Post Renovation Cleaning Services, Construction cleaning services, and Neglected property cleaning so we understand the importance of removing the dust and debris after a renovation/construction is completed, our company, is fully prepared to work within your time constraints; ',
				items:	[
							{
								title : 'Birth / Death certificates',
								price : '2000'
							},{
								title : 'Marriage Certificate',
								price : '2000'
							},{
								title : 'PAN Card Application',
								price : '2000'
							},{
								title : 'Other Documents Procurement',
								price : '2000'
							},{
								title : 'Mark sheet/Transcripts/Degree Certificates',
								price : '2000'
							}
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-book text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why would I need a property management company for my property?",
								ans   : "A Property management company takes care of all the effort, time and stress involved in managing one's property."+
										"It nulls out the drawback of distance for NRIs owning properties in India."+
										"With a property management company you manage your property virtually from the comfort of your house."
							},
							{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts."+
										"NRIServicesOnline employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							},
							{
								title : "How do I register for the Service ?",
								ans   : "To register with our company you need to create a login and password, and pay the relevant fees."+
										"Our user friendly website will prompt you for a login."
							}
						]	   
			},
			'travel':	{
				name : 'Travel ',
				img  : 'assets/images/services-5.jpg',
				desc :	'Our service specializes in Post Renovation Cleaning Services, Construction cleaning services, and Neglected property cleaning so we understand the importance of removing the dust and debris after a renovation/construction is completed, our company, is fully prepared to work within your time constraints; ',
				items:	[
							{
								title : 'Airport Pick Up/Drop Off',
								price : '2000'
							},{
								title : 'Religious Travel Arrangements',
								price : '2000'
							},{
								title : 'Hotel Accomodation',
								price : '2000'
							},{		
								title : 'Ticket Booking',
								price : '2000'
							},{
								title : 'Vehicle Arrangement During India Trip',
								price : '2000'
							}
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-plane text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why would I need a property management company for my property?",
								ans   : "A Property management company takes care of all the effort, time and stress involved in managing one's property."+
										"It nulls out the drawback of distance for NRIs owning properties in India."+
										"With a property management company you manage your property virtually from the comfort of your house."
							},
							{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts."+
										"NRIServicesOnline employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							},
							{
								title : "How do I register for the Service ?",
								ans   : "To register with our company you need to create a login and password, and pay the relevant fees."+
										"Our user friendly website will prompt you for a login."
							}
						]	   
			},
			'education':{
				name : 'Education and Tracking',
				img  : 'assets/images/services-6.jpg',
				desc :	'Our service specializes in Post Renovation Cleaning Services, Construction cleaning services, and Neglected property cleaning so we understand the importance of removing the dust and debris after a renovation/construction is completed, our company, is fully prepared to work within your time constraints; ',
				items:	[
							{
								title : 'Monitoring Student (Academic and Personal)',
								price : '2000'
							},{
								title : 'Setup And Monitor Coaching Classes, Tuition And Hostel',
								price : '2000'
							},{
								title :	'Admissions To Schools/Colleges',
								price : '2000'
							},{
								title : 'Fee payments',
								price : '2000'
							}
						],
				icon :  '<span class="fa-stack fa-5x services-fa">'+
							'<i class="fa fa-square-o text-red fa-stack-2x"></i>'+
							'<i class="fa fa-graduation-cap text-red fa-stack-1x"></i>'+	
					   '</span>',
				faqs :	[
							{
								title : "Why would I need a property management company for my property?",
								ans   : "A Property management company takes care of all the effort, time and stress involved in managing one's property."+
										"It nulls out the drawback of distance for NRIs owning properties in India."+
										"With a property management company you manage your property virtually from the comfort of your house."
							},
							{
								title : "Why would I pick you over my friends and relatives?",
								ans   : "As we all feel the age old method of falling back on friends and relatives to do the job for you does not work as efficiently in modern times and often causes a rift between relations. Everyone wanted to have their property managed by the subject matter experts."+
										"NRIServicesOnline employs qualified personnel to do the homework for you, thus saving your family the trouble and stress of running from pillar to post."
							},
							{
								title : "How do I register for the Service ?",
								ans   : "To register with our company you need to create a login and password, and pay the relevant fees."+
										"Our user friendly website will prompt you for a login."
							}
						]	   
			}
		};
		
		if(currState==='services.home')
		{
			var servicesArray = [];
			for(var key in services){
				servicesArray.push(services[key]);
			}
			$scope.services = servicesArray;
		}
		if(currState==='services.property_management')
		{
			$scope.service = services['property'];
			$scope.oneAtATime = true;
		}
		if(currState==='services.medical_services')
		{
			$scope.service = services['medical'];
			$scope.oneAtATime = true;
		}
		if(currState==='services.legal_services')
		{
			$scope.service = services['legal'];
			$scope.oneAtATime = true;
		}
		if(currState==='services.document_procurement')
		{
			$scope.service = services['document'];
			$scope.oneAtATime = true;
		}
		if(currState==='services.travel_services')
		{
			$scope.service = services['travel'];
			$scope.oneAtATime = true;
		}if(currState==='services.education_tracking')
		{
			$scope.service = services['education'];
			$scope.oneAtATime = true;
		}
}])