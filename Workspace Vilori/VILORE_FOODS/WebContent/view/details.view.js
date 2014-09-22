jQuery.sap.require("VILORE_FOODS.util.Formatter");
jQuery.sap.require("VILORE_FOODS.util.Grouper");

sap.ui.jsview("VILORE_FOODS.view.details", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.details
	*/ 
	getControllerName : function() {		
		return "VILORE_FOODS.view.details";
	},

	
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.details
	*/ 

	createContent : function(oController) {
		  
		var objHeader =	new sap.m.ObjectHeader({
			title:"{PoNumber}",
				number:"",
				numberUnit:"", 
				attributes: [
				            // "{product}",
							//"{CreatedBy}",
							//"{	path: 'CreatedAt',formatter: 'VILORE_FOODS.util.Formatter.date'}"
			    ],
			    firstStatus: [ 
				"{path: 'LifecycleStatus',formatter: 'VILORE_FOODS.util.Formatter.statusText'}",
				//"{path: 'LifecycleStatus',formatter: 'VILORE_FOODS.util.Formatter.statusState'}"
	]});
		
	////Table content of second Tab
	////  summaryDetailData={"subvariants":[{"currentValue":"","Article":"{PoNumber}","question":"Carpet Installation type"},{"currentValue":"","question":"CarpetQuantity"},{"currentValue":"","Article":"1234568","question":"Underpad type"},{"currentValue":"","question":"UnderpadQuantity"},{"currentValue":false,"Article":"1234568","question":"Rapid Install"}]};
		   
		
         var tabBar = new sap.m.IconTabBar({
        	
	          expanded: !jQuery.device.is.phone,
	          items: [
	            new sap.m.IconTabFilter({
	              icon: "sap-icon://addresses",
	              text: "Vendor",
	              content: new sap.ui.layout.form.SimpleForm(
	            	  		{
	            	  			maxContainerCols: 3,
	            	  			content:[
	            	  					            	  					
	            	  					new sap.ui.core.Title({text:" "}),
	            	  					
	            	  					new sap.ui.commons.Label({text:"Driver Name"}),
	            	  					new sap.ui.commons.TextField({id:'DriverNm',value:''}),           	  					
	            	  					
	            	  					
	            	  					new sap.ui.commons.Label({text:"Driver License"}),
	            	  					new sap.ui.commons.TextField({id:'DriverLicense',value:''}),
	            	  					
	            	  					new sap.ui.commons.Label({text:"Seal"}),
	            	  					new sap.ui.commons.TextField({id:'Seal'}),
	            	  					
	            	  					new sap.ui.core.Title({text:" "}),
	            	  					new sap.ui.commons.Label({text:"Freight Company"}),
	            	  					new sap.ui.commons.TextField({id:"FreightCompany"}),

	            	  					
	            	  					new sap.ui.commons.Label({text:"Trailer"}),
	            	  					new sap.ui.commons.TextField({id:'Trailer'}),
	            	  					
	            	  					new sap.ui.commons.Label({text:"Trailer Plate"}),
	            	  					new sap.ui.commons.TextField({id:'TrailerFlate'}),
	            	  					
	            	  					new sap.ui.core.Title({text:" "}),
	            	  					new sap.ui.commons.Label({text:"Truck"}),
	            	  					new sap.ui.commons.TextField({id:'Truck'}),
	            	  					
	            	  					new sap.ui.commons.Label({text:"Plate"}),
	            	  					new sap.ui.commons.TextField({id:'Plate'}),
	            	  					
	            	  					new sap.ui.core.Title({text:" "}),
	            	  					
	            	  					new sap.ui.commons.Label({text:"Door"}),	            	  					
	            	  					new sap.m.Switch({
	    	  	      	  		 			name : 'door',
	    	  	      	  		 			id : 'door',
	    	  	      	  		 			state: false,
	    	  	      	  		 			type: sap.m.SwitchType.AcceptReject
	    	  	      	  		 		}),  	      	  				
	            	  	      	  		new sap.ui.commons.Label({text:"Tires/Rimns"}),
		            	  	      	  	new  sap.m.Switch({
		    	  	      	  		 		name : 'tires_rimns',
		    	  	      	  		 		id : 'tires_rimns',
			    	  	      	  			state: false,
		    	  	      	  		 		type: sap.m.SwitchType.AcceptReject
		    	  	      	  		 	}),
		    	  	      	  		 	
		    	  	      	  		 	new sap.ui.core.Title({text:" "}),
		    	  	      	  		 	new sap.ui.commons.Label({text:"Chasis"}),
	            	  	      	  		new  sap.m.Switch({
	    	  	      	  		 			name : 'chasis',
	    	  	      	  		 			id : 'chasis',
		    	  	      	  		 		state: false,
	    	  	      	  		 			type: sap.m.SwitchType.AcceptReject
	    	  	      	  		 		}),       	  	      	  					
		       	  	      	  			new sap.ui.commons.Label({text:"Bumper"}),
				       	  	      	  	new sap.m.Switch({
				  	      	  		 		name : 'bumper',
				  	      	  		 		id : 'bumper',
					  	      	  		 	state: false,
				  	      	  		 		type: sap.m.SwitchType.AcceptReject				  	      	  		 			
				  	      	  		 	}),
				  	      	  		 	
				  	      	  		 	new sap.ui.core.Title({text:" "}),
	       	  	      	  				new sap.ui.commons.Label({text:"Hinges"}),
			       	  	      	  		new sap.m.Switch({
			  	      	  		 			name : 'hinges',
			  	      	  		 			id : 'hinges',
				  	      	  		 		state: false,
			  	      	  		 			type: sap.m.SwitchType.AcceptReject			  	      	  		 			
			  	      	  		 		}),	            	  	      	  					
		       	  	      	  			new sap.ui.commons.Label({text:"Fifth Wheel"}),
				       	  	      		new sap.m.Switch({
			    	  	      	  			name : 'fifth_wheel',
			    	  	      	  		 	id : 'fifth_wheel',
				    	  	      	  		state: false,
			    	  	      	  		 	type: sap.m.SwitchType.AcceptReject
	    	  	      	  		 		}),
	    	  	      	  		 	new sap.ui.commons.TextField({
	       	  						id : 'Ebeln',
	       	  						name : "Ebeln",
	       	  						value : '{PoNumber}',	
	       	  						height : "2px",
	       	  						enabled : false,            	  					
	       	  						width : '1px'	  						
	       	  					}),
	           	    	  		
		    	  	      	  		new sap.ui.core.HTML({
	            	  					content : '<input type="text" name="Ebeln" id="Ebeln" onchange="alert();" value={PoNumber}  >' 
	            	  							            	  							
	            	  				}),	            	  					  					
	            	  	      	  	new sap.ui.core.Title({text:"Add Picture"}),	
	            	  	      	  	new sap.ui.commons.FileUploader({
		            		       		uploadUrl : "upload", 
		            		       		id: "PicNm",
		            		       		name: "simpleUploader",   
		            		       		uploadOnChange: true 
		            		      	})
	            	  			]
	            	  		}) 	            
	            }),
	             new sap.m.IconTabFilter({	           
		              icon: "sap-icon://org-chart",
		              text: "",		              
		              content: ''
		            		    		        		    		        
	    		        })            	 
	            ]
	            });

			       var itemtbl = new sap.m.Table({
						  
				          headerText: "Item List",	          
				          columns: [		    		                    
				            new sap.m.Column({
				             // width : "1em",
				              header: new sap.m.Label({text: "Product #"}),
				            text : "{PoNumber}"
				            }),
				            new sap.m.Column({
				              header: new sap.m.Label({text: "Product Description"}),
			//	             minScreenWidth: "Tablet",
				              demandPopin: true
				            }),
				            new sap.m.Column({
				              header: new sap.m.Label({text: "Quantity"}),
				              //hAlign: "Right"
				            }),
				            new sap.m.Column({
				              	header: new sap.m.Label({text: "UM"}),
				              	//hAlign: "Right"
				            }),
				            new sap.m.Column({
				              	header: new sap.m.Label({text: "Material Number"}),
				              	//hAlign: "Right"
				            }),
				            new sap.m.Column({
					              header: new sap.m.Label({text: "Vendor Batch"}),
					              //hAlign: "Right"
					        }),
					        new sap.m.Column({
			      		      header: new sap.m.Label({text: "Receiving Notes"}),
			      		      //hAlign: "Right"
			      		    })
				          ],
				       
			 	  items: [
			         	          new sap.m.ColumnListItem({
			         	        	  selected : true,
			         	        	  cells : [
			         	                       new sap.m.Label({
			         	                    	   id : "PoItem",
			         	                           text : "{PoItem}"  	 
			         	                       }),
			         	                       new sap.m.Label({       	
			         	                    	   id : "ShortText",
			         	                           text : "{ShortText}"  
			         	                       }),
			         	                       new sap.m.Label({
			         	                    	   id : "DispQuan",      
			         	                           text : "{DispQuan}"  
			         	                       }),
			         	                       new sap.m.Label({
			         	                    	   id : "Unit",			
			         	                           text : "{Unit}"  
			         	                       }),
			         	                      new sap.m.Label({
			         	                    	   id : "PurMat",			
			         	                           text : "{PurMat}"  
			         	                       }),
			         	                      
			         	                       new sap.ui.commons.TextField({id:'VendorBatch'}),
			         	                       new sap.ui.commons.TextField({id:'RcvNotes'}),
			         	                   ]
			     	          })
			 	          ]				          
				        });
       
	    var objbtn =  new sap.ui.commons.Button({
	    		text : "Accept",
	    		style: sap.ui.commons.ButtonStyle.Accept,
	    		height : "40px",
				width : "80px",
				press:function(oClick){
					
					// PO Driver Details Read Data				
					////var PicNm =  "PictureName ";//document.getElementById('PicNm-fu').value;
					var Ebeln = document.getElementById('Ebeln').value;					
					var DriverNm =  document.getElementById('DriverNm').value;										
					var Trailer =  document.getElementById('Trailer').value;
					var DriverLicense =  document.getElementById('DriverLicense').value;
					var TrailerFlate =  document.getElementById('TrailerFlate').value;
					var Seal =  document.getElementById('Seal').value;
					var Truck =  document.getElementById('Truck').value;
					var FreightCompany =  document.getElementById('FreightCompany').value;
					var Plate =  document.getElementById('Plate').value;
									
					var Door =  0;
					if(document.getElementById('door-input').value=='On')Door=1;
					
										var Bumper = 0;
					if(document.getElementById('bumper-input').value=='On')Bumper=1;
					
					
					var TiresRimns =  0;
					if(document.getElementById('tires_rimns-input').value=='On')TiresRimns=1;
					
					
					var Chassis = 0;
					if(document.getElementById('chasis-input').value=='On')Chassis=1;
					
										
					var Hinges = 0;
					if(document.getElementById('hinges-input').value=='On')Hinges=1;
					
		
					var FifthWheel = 0;
					if(document.getElementById('fifth_wheel-input').value=='On')FifthWheel=1;
				
				
					//Read PO Item Data
					var Ebelp = document.getElementById('PoItem').innerHTML;
					var Txz01 = document.getElementById('ShortText').innerHTML;
					var Menge = document.getElementById('DispQuan').innerHTML;
					var Meins = document.getElementById('Unit').innerHTML;
					var Matnr = document.getElementById('PurMat').innerHTML;
					
					var VendorBatch = document.getElementById('VendorBatch').value;
					var RcvNotes = document.getElementById('RcvNotes').value;
					
					var POdata = '<entry xml:base="http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/" xmlns="http://www.w3.org/2005/Atom" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices"><id>http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_DATASSet</id>  <title type="text">Z_PO_DATASSet</title> <updated>2014-06-09T03:08:17Z</updated> <category term="ZHR_VF_RCV_SRV.Z_PO_DATAS" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"/> <link href="Z_PO_DATASSet" rel="edit" title="Z_PO_DATAS"/> <content type="text/xml;odata=verbose"><m:properties> <d:PicNm></d:PicNm> <d:Hinges>'+Hinges+'</d:Hinges> <d:Bumper>'+Bumper+'</d:Bumper> <d:TiresRimns>'+TiresRimns+'</d:TiresRimns> <d:FifthWheel>'+FifthWheel+'</d:FifthWheel>  <d:Chassis>'+Chassis+'</d:Chassis><d:Door>'+Door+'</d:Door><d:Plate>'+Plate+'</d:Plate> <d:FreightCompany>'+FreightCompany+'</d:FreightCompany> <d:Truck>'+Truck+'</d:Truck>  <d:Seal>'+Seal+'</d:Seal> <d:TrailerFlate>'+TrailerFlate+'</d:TrailerFlate> <d:DriverLicense>'+DriverLicense+'</d:DriverLicense> <d:Trailer>'+Trailer+'</d:Trailer> <d:DriverNm>'+DriverNm+'</d:DriverNm> <d:Ebeln>'+Ebeln+'</d:Ebeln><d:Ebelp> </d:Ebelp>  </m:properties> </content> </entry>';
					
					var PO_item_data = '<entry xml:base="http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/" xmlns="http://www.w3.org/2005/Atom" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices"><id>http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_DATASSet</id>  <title type="text">Z_PO_DATASSet</title> <updated>2014-06-09T03:08:17Z</updated> <category term="ZHR_VF_RCV_SRV.Z_PO_DATAS" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"/> <link href="Z_PO_DATASSet" rel="edit" title="Z_PO_DATAS"/> <content type="text/xml;odata=verbose"><m:properties><d:RcvNotes>'+RcvNotes+'</d:RcvNotes><d:VendorBatch>'+VendorBatch+'</d:VendorBatch> <d:Matnr>'+Matnr+'</d:Matnr><d:Txz01>'+Txz01+'</d:Txz01><d:Menge>'+Menge+'</d:Menge><d:Meins>'+Meins+'</d:Meins><d:Ebeln>'+Ebeln+'</d:Ebeln><d:Ebelp>'+Ebelp+'</d:Ebelp></m:properties></content></entry>';
//					alert("POdata=>    "+POdata);
//					alert("PO_item_data=>    "+PO_item_data);
										
					//To call Web service GET & POST					
					PostDriverDetail(Ebeln,POdata,PO_item_data);							
				}							
			});
	     
	    
	    var resetbtn =  new sap.ui.commons.Button({
    		text : "Reset",
    		style: sap.ui.commons.ButtonStyle.Reject,
    		height : "40px",
			width : "80px",
			id : 'resbtnid',
			value:'{PoNumber}',	  
			press: function(oClick){
				
			////var PicNm =  "PictureName ";//document.getElementById('PicNm-fu').value;
				
				document.getElementById('DriverNm').value='';
				document.getElementById('Trailer').value='';
				document.getElementById('DriverLicense').value='';
				document.getElementById('TrailerFlate').value='';
				document.getElementById('Seal').value='';
				document.getElementById('Truck').value='';
				document.getElementById('FreightCompany').value='';
				document.getElementById('Plate').value='';
							
				document.getElementById('door-input').value='Off';
				document.getElementById('bumper-input').value='Off';
				document.getElementById('tires_rimns-input').value='Off';				
				document.getElementById('chasis-input').value='Off';
				document.getElementById('hinges-input').value='Off';
				document.getElementById('fifth_wheel-input').value='Off';
				
			}
	    
	    });
			
		  var page = new sap.m.Page({
			      title : 'Details Purchase Order',
			      //set back button on details pages only on smartphones
			      showNavButton : jQuery.device.is.phone,
			                    navButtonTap : function(){},	                    
			      content : [ objHeader, tabBar, itemtbl, objbtn, resetbtn	 ]
			  });
  		  this.addContent(page);
  		
	}
});


function PostDriverDetail(PO_ID,POdata,PO_item_data){
	
			// Obtain session token.
			$.ajax({
			  url:"http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_ITEM_DETAILSet(Ebelp='',Ebeln='"+PO_ID+"')",
			  //url:"http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_DATASSet('"+PO_ID+"')",
			  type:"get",
			  dataType:"text",
			  beforeSend: function (request) {
			        request.setRequestHeader("X-CSRF-Token", "fetch");
			        request.setRequestHeader("sap-user", "efsdemo");	        
			        request.setRequestHeader("sap-password", "efsdemo");
			        //request.send("Ebelp='', Ebeln='"+PO_ID+"'");
			      },
			      error:function (jqXHR, textStatus, errorThrown) {
			    	  //alert("First Ajax=> "+errorThrown);			    	  
			      },
			      success: function (data, status, xmlhthead) {
			    	  //alert("First Successfull => "+(data));			    	  		
				     // Call system connect with session token.
						    $.ajax({
						     url:"http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_ITEM_DETAILSet",
						     type: "POST",
						     dataType: "text",
						     ContentType: "text/xml",
						     data: POdata,
						 				      
						      beforeSend: function (request) {
						    	  request.setRequestHeader("sap-user", "efsdemo");	 
						    	  request.setRequestHeader("sap-password", "efsdemo");
						    	  request.setRequestHeader("X-CSRF-Token", xmlhthead.getResponseHeader('X-CSRF-Token'));			     
							      request.setRequestHeader("Content-type","application/xml");							      
						    	  //request.send("User=DE_BU1@UNIPORT.COM&Banfn=DER0000058&Buzei=00200");						    	
						      },
						      error: function (jqXHR, textStatus, errorThrown) {
						        alert("The PostDriverDetail errorThrown  "+errorThrown);
						        //alert("textStatus "+textStatus);
						        //alert("jqXHR "+jqXHR);
						      },
						      success: function (data) {						    	  
						    	//alert("Got Post Data Successfully");
						    	alert(" The PostDriverDetail Successfully Purchase Order" + PO_ID );
						      }
						    });			    	  
						    PostItemdata(PO_ID,PO_item_data,xmlhthead.getResponseHeader('X-CSRF-Token'));
			      }
			});
    }


function resetfun(){	
	///alert("resetfun");	
}

function PostItemdata(PO_ID,PO_item_data,X_CSRF_Token){
	
	
	$.ajax({
	     url:"http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_ITEM_DETAILSet",
	     type: "POST",
	     dataType: "text",
	     ContentType: "text/xml",
	     data: PO_item_data,
	 				      
	      beforeSend: function (request) {
	    	  request.setRequestHeader("sap-user", "efsdemo");	 
	    	  request.setRequestHeader("sap-password", "efsdemo");
	    	  request.setRequestHeader("X-CSRF-Token", X_CSRF_Token);			     
		      request.setRequestHeader("Content-type","application/xml");
		      
	      },
	      error: function (jqXHR, textStatus, errorThrown) {
	        alert("The errorThrown PostItemdata "+errorThrown);
	        //alert("textStatus "+textStatus);
	        //alert("jqXHR "+jqXHR);
	      },
	      success: function (data) {						    	  
	    	//alert("Got Post Data Successfully");
	    	alert("The PostItemdata Successfully Purchase Order Items " + PO_ID );
	      }
	    });
	
}


