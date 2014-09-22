

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
		  
		var control = new sap.ui.core.Control
	var objHeader =	new sap.m.ObjectHeader({
			title:"{PoNumber}",
				number:"{invoice}",
				numberUnit:"{CurrencyCode}", 
				attributes: [
//                 "{product}",
//"{CreatedBy}",
//"{	path: 'CreatedAt',formatter: 'VILORE_FOODS.util.Formatter.date'}"
			    ],
			    firstStatus: [
"{path: 'LifecycleStatus',formatter: 'VILORE_FOODS.util.Formatter.statusText'}"
//"{path: 'LifecycleStatus',formatter: 'VILORE_FOODS.util.Formatter.statusState'}"
	]});
		
         var tabBar = new sap.m.IconTabBar({
        	
	          expanded: !jQuery.device.is.phone,
	          items: [
	            new sap.m.IconTabFilter({
	              icon: "sap-icon://addresses",
	              text: "Vendor",
	              content: new sap.ui.layout.form.SimpleForm(
	            	  		{
	            	  			maxContainerCols: 2,
	            	  			content:[
	            	  					            	  					
	            	  					new sap.ui.core.Title({text:" "}),
	            	  					
	            	  					new sap.ui.commons.Label({text:"Driver Name"}),
	            	  					new sap.ui.commons.TextField({id:'driver_name'}),
	            	  					
	            	  					new sap.ui.commons.Label({text:"Driver License"}),
	            	  					new sap.ui.commons.TextField({id:'driver_license'}),
	            	  					new sap.ui.commons.Label({text:"Seal"}),
	            	  					new sap.ui.commons.TextField(),
	            	  					new sap.ui.commons.Label({text:"Frieght Company"}),
	            	  					new sap.ui.commons.TextField(),

	            	  					new sap.ui.core.Title({text:" "}),
	            	  					new sap.ui.commons.Label({text:"Trailer"}),
	            	  					new sap.ui.commons.TextField(),
	            	  					new sap.ui.commons.Label({text:"Trailer Plate"}),
	            	  					new sap.ui.commons.TextField(),
	            	  					new sap.ui.commons.Label({text:"Truck"}),
	            	  					new sap.ui.commons.TextField(),
	            	  					new sap.ui.commons.Label({text:"Plate"}),
	            	  					new sap.ui.commons.TextField(),
	            	  		
	            	  					
	            	  					new sap.ui.core.Title({text:" "}),
	            	  					new sap.ui.commons.Label({text:"Door"}),	            	  					
	            	  					new sap.ui.commons.Slider({
            	  	      	  				id : 'Door',
            	  	      	  				tooltip: 'Door',
            	  	      	  				height: '10px',
            	  	      	  				width: '30%',
            	  	      	  				min: 1,
            	  	      	  				max: 2,
            	  	      	  				value: 1,
            	  	      	  				totalUnits: 1,
            	  	      	  				smallStepWidth: 1,
            	  	      	  				stepLabels : true,
            	  	      	  				labels: ["Yes", "No"],
            	  	      	  				style: ""
            	  	      	  				}),            	  	      	  				
	            	  	      	  			new sap.ui.commons.Label({text:"Tire/Trims"}),
	        	  	      	  				new sap.ui.commons.Slider({
	        	  	      	  				id : 'Tire',
	        	  	      	  				tooltip: 'Door',
	        	  	      	  				height: '10px',
	        	  	      	  				width: '30%',
	        	  	      	  				min: 1,
	        	  	      	  				max: 2,
	        	  	      	  				value: 1,
	        	  	      	  				totalUnits: 1,
	        	  	      	  				smallStepWidth: 1,
	        	  	      	  				stepLabels : true,
	        	  	      	  				labels: ["Yes", "No"]
	        	  	      	  				}),
	        	  	      	  				
	        	  	      	  			
            	  	      	  			new sap.ui.commons.Label({text:"Chasis"}),
       	  	      	  				 new sap.ui.commons.Slider({
       	  	      	  					id : 'Chasis',
       	  	      	  					tooltip: 'Door',
       	  	      	  					height: '10px',
       	  	      	  					width: '30%',
       	  	      	  					min: 1,
       	  	      	  					max: 2,
       	  	      	  					value: 1,
       	  	      	  					totalUnits: 1,
       	  	      	  					smallStepWidth: 1,
       	  	      	  					stepLabels : true,
       	  	      	  					labels: ["Yes", "No"]
       	  	      	  					}),
       	  	      	  					
       	  	      	  			new sap.ui.core.Title({text:" "}),
       	  	      	  				new sap.ui.commons.Label({text:"Bumper"}),
       	  	      	  				new sap.ui.commons.Slider({
       	  	      	  				id : 'Bumper',
       	  	      	  				tooltip: 'Door',
       	  	      	  				height: '10px',
       	  	      	  				width: '30%',
       	  	      	  				min: 1,
       	  	      	  				max: 2,
       	  	      	  				value: 1,
       	  	      	  				totalUnits: 1,
       	  	      	  				smallStepWidth: 1,
       	  	      	  				stepLabels : true,
       	  	      	  				labels: ["Yes", "No"]
       	  	      	  				}),
       	  	      	  				
            	  	      	  				
       	  	      	  				new sap.ui.commons.Label({text:"Hinges"}),
	            	  	    		new sap.ui.commons.Slider({
	            	  	      				id : 'Hinges',
	            	  	      	  				tooltip: 'Hinges',
	            	  	      	  				height: '10px',
	            	  	      	  				width: '30%',
	            	  	      	  				min: 1,
	            	  	      	  				max: 2,
	            	  	      	  				value: 1,
	            	  	      	  				totalUnits: 1,
	            	  	      	  				smallStepWidth: 1,
	            	  	      	  				stepLabels : true,
	            	  	      	  				labels: ["Yes", "No"]
	            	  	      	  				}),
	            	  	      	  					
	       	  	      	  					new sap.ui.commons.Label({text:"Fifth Wheel"}),
	            	  	      	  				new sap.ui.commons.Slider({
	            	  	      	  				id : 'Fifthwheel',
	            	  	      	  				tooltip: 'Door',
	            	  	      	  				height: '10px',
	            	  	      	  				width: '30%',
	            	  	      	  				min: 1,
	            	  	      	  				max: 2,
	            	  	      	  				value: 1,
	            	  	      	  				totalUnits: 1,
	            	  	      	  				smallStepWidth: 1,
	            	  	      	  				stepLabels : true,
	            	  	      	  				labels: ["Yes", "No"]
	            	  	      	  				}),
	            	  	      	  				
	            	  	      	  			new sap.ui.core.Title({text:"Add Picture"}),	
	            	  	      	  			new sap.ui.commons.FileUploader({
		            		            		uploadUrl : "../../../../../upload",  
		            		            		name: "simpleUploader",   
		            		            		uploadOnChange: true 
		            		            	})
	            	  					]
	            	  		}) 
	            
	       
	            }),
	             new sap.m.IconTabFilter({
	              icon: "sap-icon://org-chart",
	              text: "",
	              content: 
	            	  
	            	    new sap.m.Table({
//	         	          headerText: "Item List",	         	          
	         	          columns: [
	         	            new sap.m.Column({
	         	             // width : "1em",
	         	              header: new sap.m.Label({text: "Product #"})
	         	            }),
	         	            new sap.m.Column({
		         	             // width : "1em",
		         	              header: new sap.m.Label({text: "Product Description"})
		         	        }),
	         	            new sap.m.Column({
	         	              header: new sap.m.Label({text: "Quantity"}),
//	         	             minScreenWidth: "Tablet",
	         	              //demandPopin: true
	         	            }),
	         	            new sap.m.Column({
	         	              header: new sap.m.Label({text: "UM"}),
	         	              //hAlign: "Right"
	         	            }),
	         	            new sap.m.Column({
	         		              header: new sap.m.Label({text: "Vendor Batch"}),
	         		              //hAlign: "Right"
	         		        }),
	         		        new sap.m.Column({
		         		           header: new sap.m.Label({text: "Recelving Notes"}),
		         		          //hAlign: "Right"
		         		    })
	         	          ]	         	         
	         	        }),

//	            	  new sap.ui.layout.form.SimpleForm(
//	            	  		{
//	            	  			
//	            	  			
//	            	  			maxContainerCols: 3,
//	            	  			content:[
//	            	  			         
	            	  					//new sap.ui.core.Title({text:"  "}),
	            	  					
//	            	  					new sap.ui.commons.Label({text:"Product "}),
//	            	  					new sap.ui.commons.Label({text:"Product Description"}),
//	            	  					new sap.ui.commons.Label({text:"Quantity"}),
//	            	  					new sap.ui.commons.Label({text:"UM"}),
//	            	  					new sap.ui.commons.Label({text:"Vendor Batch"}),
//	            	  					new sap.ui.commons.Label({text:"Recelving Notes"}),
	            	  					
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.TextField(),	            	  					
//	            	  					new sap.ui.commons.TextField()
////	            	  					
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.TextField(),	            	  					
//	            	  					new sap.ui.commons.TextField(),
//	            	  					
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.Label({text:"Driver License"}),
//	            	  					new sap.ui.commons.TextField(),	            	  					
//	            	  					new sap.ui.commons.TextField()
//	            	  					
//	            	  					
//	            	  					]
//	            	  		}) 

	            }),
	  
//	            new sap.m.IconTabFilter({
//		              icon: "sap-icon://org-chart",
//		              text: "Damage Details",
//		              content:  
//
//		            	  new sap.ui.layout.form.SimpleForm(
//		            	  		{
//		            	  			maxContainerCols: 3,
//		            	  			content:	new sap.ui.layout.form.SimpleForm(
//		            	  	      	  		{
//		            	  	      	  			maxContainerCols: 3,
//		            	  	      	  			content:[
//		            	  	      	  			  
//		            	  	    new sap.ui.core.Title({text:" "}),
//								new sap.ui.commons.Label({text:"Door"}),
//		            	  	  	new sap.ui.commons.Slider({
//		            	  	      	  				id : 'Door',
//		            	  	      	  				tooltip: 'Door',
//		            	  	      	  				height: '10px',
//		            	  	      	  				width: '30%',
//		            	  	      	  				min: 1,
//		            	  	      	  				max: 2,
//		            	  	      	  				value: 1,
//		            	  	      	  				totalUnits: 1,
//		            	  	      	  				smallStepWidth: 1,
//		            	  	      	  				stepLabels : true,
//		            	  	      	  				labels: ["yes", "No"],
//		            	  	      	  				style: ""
//		            	  	      	  				}),
//		            	  	      	  				
//		            	  	      	  			new sap.ui.commons.Label({text:"Tire/Trims"}),
//	            	  	      	  				new sap.ui.commons.Slider({
//	            	  	      	  				id : 'Tire',
//	            	  	      	  				tooltip: 'Door',
//	            	  	      	  				height: '10px',
//	            	  	      	  				width: '30%',
//	            	  	      	  				min: 1,
//	            	  	      	  				max: 2,
//	            	  	      	  				value: 1,
//	            	  	      	  				totalUnits: 1,
//	            	  	      	  				smallStepWidth: 1,
//	            	  	      	  				stepLabels : true,
//	            	  	      	  				labels: ["yes", "No"]
//	            	  	      	  				}),
	            	  	      	  				
//	            	  	      	  			new sap.ui.core.Title({text:" "}),
//	            	  	      	  			new sap.ui.commons.Label({text:"Chasis"}),
//           	  	      	  				 new sap.ui.commons.Slider({
//           	  	      	  					id : 'Chasis',
//           	  	      	  					tooltip: 'Door',
//           	  	      	  					height: '10px',
//           	  	      	  					width: '30%',
//           	  	      	  					min: 1,
//           	  	      	  					max: 2,
//           	  	      	  					value: 1,
//           	  	      	  					totalUnits: 1,
//           	  	      	  					smallStepWidth: 1,
//           	  	      	  					stepLabels : true,
//           	  	      	  					labels: ["yes", "No"]
//           	  	      	  					}),
//           	  	      	  					
//           	  	      	  				new sap.ui.commons.Label({text:"Bumper"}),
//           	  	      	  				new sap.ui.commons.Slider({
//           	  	      	  				id : 'Bumper',
//           	  	      	  				tooltip: 'Door',
//           	  	      	  				height: '10px',
//           	  	      	  				width: '30%',
//           	  	      	  				min: 1,
//           	  	      	  				max: 2,
//           	  	      	  				value: 1,
//           	  	      	  				totalUnits: 1,
//           	  	      	  				smallStepWidth: 1,
//           	  	      	  				stepLabels : true,
//           	  	      	  				labels: ["yes", "No"]
//           	  	      	  				}),
//           	  	      	  				
//	            	  	      	  				
//           	  	      	  		new sap.ui.core.Title({text:" "}),		
//		            	  	      	  					new sap.ui.commons.Label({text:"Hinges"}),
//		            	  	      	  				new sap.ui.commons.Slider({
//		            	  	      	  				id : 'Hinges',
//		            	  	      	  				tooltip: 'Hinges',
//		            	  	      	  				height: '10px',
//		            	  	      	  				width: '30%',
//		            	  	      	  				min: 1,
//		            	  	      	  				max: 2,
//		            	  	      	  				value: 1,
//		            	  	      	  				totalUnits: 1,
//		            	  	      	  				smallStepWidth: 1,
//		            	  	      	  				stepLabels : true,
//		            	  	      	  				labels: ["yes", "No"]
//		            	  	      	  				}),
//		            	  	      	  					
//		       	  	      	  					new sap.ui.commons.Label({text:"Fifth Wheel"}),
//		            	  	      	  				new sap.ui.commons.Slider({
//		            	  	      	  				id : 'Fifthwheel',
//		            	  	      	  				tooltip: 'Door',
//		            	  	      	  				height: '10px',
//		            	  	      	  				width: '30%',
//		            	  	      	  				min: 1,
//		            	  	      	  				max: 2,
//		            	  	      	  				value: 1,
//		            	  	      	  				totalUnits: 1,
//		            	  	      	  				smallStepWidth: 1,
//		            	  	      	  				stepLabels : true,
//		            	  	      	  				labels: ["yes", "No"]
//		            	  	      	  				}),
//		            	  	      	  				]
//		            	  	      	  		}) 
//		                        })
//		                  }),

		         
	            
//	            new sap.m.IconTabFilter({
//	                icon: "sap-icon://phone",
//	                text: "Add Picture",
//	                content:  	  new sap.ui.layout.form.SimpleForm(
//	            	  		{
////	            	  			maxContainerCols: 2,
////	            	  			content:[
////	            	  					new sap.ui.core.Title({text:"Invoice, custom documents and driver license are required"}),
////	            	  			     	new sap.ui.commons.FileUploader({
////		            		            		uploadUrl : "../../../../../upload",  
////		            		            		name: "simpleUploader",   
////		            		            		uploadOnChange: true 
////		            		            	})
////	            	  					],
//	            		           
//	            	  		}) 
//
//	            })
 ]
	            });
	 
	     var table = new sap.m.Table({
	          headerText: "Item List",
	          
//	          columns: [
//	            new sap.m.Column({
//	             // width : "1em",
//	              header: new sap.m.Label({text: "Product Description"})
//	            }),
//	            new sap.m.Column({
//	              header: new sap.m.Label({text: "Quantity"}),
////	             minScreenWidth: "Tablet",
//	              demandPopin: true
//	            }),
//	            new sap.m.Column({
//	              header: new sap.m.Label({text: "UM"}),
//	              //hAlign: "Right"
//	            }),
//	            new sap.m.Column({
//		              header: new sap.m.Label({text: "Vendor Batch"}),
//		              //hAlign: "Right"
//		            }),
//	          ],
	         
	        });
	 
//	     var tabletemplate =new sap.m.ColumnListItem({
//	    type: sap.m.ListType.Navigation,
//	            cells: [ new sap.ui.core.Icon({
//	                src: {
//	                path : 'IsCurrent',
////	               type : new sap.ui.model.type.String(),
//	                formatter : function(IsCurrent) {
//	                if (IsCurrent == "true") {
//	                return "sap-icon://unlocked";
//	                } else {
//	                return "sap-icon://locked";
//	                }
//	                }
//	                },
//	                size: (jQuery.device.is.phone) ? "1em" : "1.5em",
//	                color: {
//	                path : 'IsCurrent',
//	                  //               type : new sap.ui.model.type.String(),
//	                                formatter : function(IsCurrent) {
//	                                if (IsCurrent == "true") {
//	                                return "#FD1602";
//	                                } else {
//	                                return "#E1E2E4";
//	                                }
//	                                }
//	                                },
//	                layoutData: new sap.m.FlexItemData({growFactor: 1})
//	              }),
//	 
//	              new sap.m.Text({
//	                text: {
//	  path : 'Validitybegin',
//	  type : this.oTypeDate,
//	  },
//	              }),
//	              new sap.m.Text({
//	                  text: {
//	  path : 'Validityend',
//	  type : this.oTypeDate,
//	  },
//	                }),
//	            ]
//          });
         
         
	    
	     
	    var objbtn =  new sap.ui.commons.Button({
				text:"Approvel",
				height : "45px",
				width : "100px",
				align : "right",
				//data-theme : "b",
				press:function(oClick){
					
					sap.ui.controller.handleApprove();
		    		alert(document.getElementById('driver_name').value);
				}							
			});
	     
	 
  var page = new sap.m.Page({
	      title : 'Details Purchase Order',
	      //set back button on details pages only on smartphones
	      showNavButton : jQuery.device.is.phone,
	                    navButtonTap : function(){alert("This is second button");},	                    
	      content : [ objHeader, tabBar,table, objbtn	 ]
	  });		
		
  this.addContent(page);
	}
});









