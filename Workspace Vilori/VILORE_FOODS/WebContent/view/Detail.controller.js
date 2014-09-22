jQuery.sap.require("VILORE_FOODS.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("VILORE_FOODS.view.Detail", {
	
	
	
	init : function(){
		//alert("init");
		var url = "http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_PO_SRV_01/PurchaseOrders('4500000198')";
	    var oModel = new sap.ui.model.odata.ODataModel(url, true, "efsdemo", "efsdemo");
		this.setModel(oModel);
	},	
	
	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},

	onBeforeRendering:function(){
	//	this.byId("SupplierForm").bindElement("PurchaseOrderItems");		 
	},
	
	handleApprove : function (evt) {
		
		
		
		//For First
		var Ebeln = document.getElementById('__header0-titleText-inner').innerHTML;
		var DriverNm =  document.getElementById('Detail--DriverNm-inner').value;										
		var Trailer =  document.getElementById('Detail--Trailer-inner').value;
		var DriverLicense =  document.getElementById('Detail--DriverLicense-inner').value;		
		var TrailerFlate =  document.getElementById('Detail--TrailerPlate-inner').value;		
		var Seal =  document.getElementById('Detail--Seal-inner').value;		
		var Truck =  document.getElementById('Detail--Truck-inner').value;		
		var FreightCompany =  document.getElementById('Detail--FreightCompany-inner').value;
		var Plate =  document.getElementById('Detail--Plate-inner').value;
	
		
		var Door =  0;
		if(document.getElementById('Detail--door-input').value=='On')Door=1;
		
		var Bumper = 0;
		if(document.getElementById('Detail--bumper-input').value=='On')Bumper=1;
		
		
		var TiresRimns =  0;
		if(document.getElementById('Detail--tiri-input').value=='On')TiresRimns=1;
		
		
		var Chassis = 0;
		if(document.getElementById('Detail--chasis-input').value=='On')Chassis=1;
		
	
							
		var Hinges = 0;
		if(document.getElementById('Detail--hinges-input').value=='On')Hinges=1;
	
		
		var FifthWheel = 0;
		if(document.getElementById('Detail--fifth_wheel-input').value=='On')FifthWheel=1;
		
		
		var POdata = '<entry xml:base="http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/" xmlns="http://www.w3.org/2005/Atom" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices"><id>http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_DATASSet</id>  <title type="text">Z_PO_DATASSet</title> <updated>2014-06-09T03:08:17Z</updated> <category term="ZHR_VF_RCV_SRV.Z_PO_DATAS" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"/> <link href="Z_PO_DATASSet" rel="edit" title="Z_PO_DATAS"/> <content type="text/xml;odata=verbose"><m:properties> <d:PicNm></d:PicNm> <d:Hinges>'+Hinges+'</d:Hinges> <d:Bumper>'+Bumper+'</d:Bumper> <d:TiresRimns>'+TiresRimns+'</d:TiresRimns> <d:FifthWheel>'+FifthWheel+'</d:FifthWheel>  <d:Chassis>'+Chassis+'</d:Chassis><d:Door>'+Door+'</d:Door><d:Plate>'+Plate+'</d:Plate> <d:FreightCompany>'+FreightCompany+'</d:FreightCompany> <d:Truck>'+Truck+'</d:Truck>  <d:Seal>'+Seal+'</d:Seal> <d:TrailerFlate>'+TrailerFlate+'</d:TrailerFlate> <d:DriverLicense>'+DriverLicense+'</d:DriverLicense> <d:Trailer>'+Trailer+'</d:Trailer> <d:DriverNm>'+DriverNm+'</d:DriverNm> <d:Ebeln>'+Ebeln+'</d:Ebeln><d:Ebelp> </d:Ebelp>  </m:properties> </content> </entry>';
				
		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(
			bundle.getText("ApproveDialogMsg"),
			function (oAction) {
				if (sap.m.MessageBox.Action.OK === oAction) {
					
					
					
					//To Call Ajax function  for Insert Driver Details into Z-Table
					
					//alert(POdata);
					PostDriverDetail(Ebeln,POdata);
					
					
					
					// notify user
					var successMsg = bundle.getText("ApproveDialogSuccessMsg");
					sap.m.MessageToast.show(successMsg);
					// TODO call proper service method and update model (not part of this session)
				}
			},
			
			bundle.getText("ApproveDialogTitle")
		);
	},
	
	handleLineItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("LineItem", context);
	}
});



function PostDriverDetail(PO_ID,POdata,PO_item_data){
	
	// Obtain session token.
	$.ajax({
	  url:"http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_ITEM_DETAILSet(Ebelp='',Ebeln='"+PO_ID+"')",
	  
	  type:"get",
	  dataType:"text",
	  beforeSend: function (request) {
	        request.setRequestHeader("X-CSRF-Token", "fetch");
	        request.setRequestHeader("sap-user", "efsdemo");	        
	        request.setRequestHeader("sap-password", "efsdemo");
	        //request.send("Ebelp='', Ebeln='"+PO_ID+"'");
	      },
	      error:function (jqXHR, textStatus, errorThrown) {
	    	  //alert("First read Ajax=> "+errorThrown);			    	  
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
				    	//alert(" The PostDriverDetail Successfully Purchase Order" + PO_ID );
				      }
				    });			    	  
				    var X_CSRF_Token = xmlhthead.getResponseHeader('X-CSRF-Token');
				    
				    
				    
				    /// Inserting Multipale Item Data 
				  
				   //alert($('#__table0-tblBody').children().length);
					//alert($('#__table0-tblBody').children('tr').length);
					//alert(document.getElementById("__table0-tblBody").getElementsByTagName("tr").length);
					
				   var NumRecCount =$('#__table3-tblBody').children('tr').length ;
				  			
					var Ebelp;	
					var Txz01;
					var Menge;
					var VendorBatch;
					var RcvNotes;
					var NC;
					var Ebeln = document.getElementById('__header0-titleText-inner').innerHTML;
					 
					
				    /// reading data for Item Table 				    
				    for (NC = 0; NC < NumRecCount; NC++) {				    	
				    	 					
						 Ebelp = document.getElementById('Detail--PoItem-__table3-'+NC).innerHTML;						 
						 Txz01 = document.getElementById('Detail--ShortText-__table3-'+NC).innerHTML;					 
						 Menge = document.getElementById('Detail--DispQuan-__table3-'+NC).innerHTML;					 
						 VendorBatch = document.getElementById('Detail--vb-__table3-'+NC+'-inner').value;
						 RcvNotes = document.getElementById('Detail--rn-__table3-'+NC+'-inner').value;
						
						var Meins = document.getElementById('Detail--Unit-__table3-'+NC).innerHTML;
						var Matnr = document.getElementById('Detail--PurMat-__table3-'+NC).innerHTML;
						
						
						
						//wraping data 
						var PO_item_data = '<entry xml:base="http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/" xmlns="http://www.w3.org/2005/Atom" xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices"><id>http://192.168.15.170:8001/sap/opu/odata/sap/ZHR_VF_RCV_SRV/Z_PO_DATASSet</id>  <title type="text">Z_PO_DATASSet</title> <updated>2014-06-09T03:08:17Z</updated> <category term="ZHR_VF_RCV_SRV.Z_PO_DATAS" scheme="http://schemas.microsoft.com/ado/2007/08/dataservices/scheme"/> <link href="Z_PO_DATASSet" rel="edit" title="Z_PO_DATAS"/> <content type="text/xml;odata=verbose"><m:properties><d:RcvNotes>'+RcvNotes+'</d:RcvNotes><d:VendorBatch>'+VendorBatch+'</d:VendorBatch> <d:Matnr>'+Matnr+'</d:Matnr><d:Txz01>'+Txz01+'</d:Txz01><d:Menge>'+Menge+'</d:Menge><d:Meins>'+Meins+'</d:Meins><d:Ebeln>'+Ebeln+'</d:Ebeln><d:Ebelp>'+Ebelp+'</d:Ebelp></m:properties></content></entry>';
						
						
						///calling function for inserting Item Data with POItem id
						PostItemdata(Ebeln,PO_item_data,X_CSRF_Token);
				    	
				    }
				    resetfun();
				    
	      }
	});
	
	
}


function resetfun(){	
///alert("resetfun");	
	
	
	
	 document.getElementById('Detail--DriverNm-inner').value = '';										
	  document.getElementById('Detail--Trailer-inner').value = '';
	  document.getElementById('Detail--DriverLicense-inner').value = '';		
	 document.getElementById('Detail--TrailerPlate-inner').value = '';
	  document.getElementById('Detail--Seal-inner').value = '';
	document.getElementById('Detail--Truck-inner').value = '';	
	  document.getElementById('Detail--FreightCompany-inner').value = '';
	  document.getElementById('Detail--Plate-inner').value = '';

	
	
	document.getElementById('Detail--door-input').value=='Off';
	document.getElementById('Detail--bumper-input').value=='Off';
	document.getElementById('Detail--tiri-input').value=='Off';
	document.getElementById('Detail--chasis-input').value=='Off';
	document.getElementById('Detail--hinges-input').value=='Off';
	document.getElementById('Detail--fifth_wheel-input').value=='Off';
	
	  var NumRecCount =$('#__table3-tblBody').children('tr').length ;
	  var NCV;
	  for (NCV = 0; NCV < NumRecCount; NCV++) {
	  	document.getElementById('Detail--vb-__table3-'+NCV+'-inner').value = '';
	  	document.getElementById('Detail--rn-__table3-'+NCV+'-inner').value = '';
	  }
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
    //alert("The errorThrown PostItemdata "+errorThrown);
    //alert("textStatus "+textStatus);
    //alert("jqXHR "+jqXHR);
  },
  success: function (data) {						    	  
	//alert("Got Post Data Successfully");
	//alert("The PostItemdata Successfully Purchase Order Items " + PO_ID );
  }
});

}