sap.ui.jsview("view.Appview", {

      getControllerName : function() {
         return "view.Appview";
      },

      createContent : function(oController) {
          return new sap.m.Page({
              title: "Title",
              content: [
              ]
          });
      }

});