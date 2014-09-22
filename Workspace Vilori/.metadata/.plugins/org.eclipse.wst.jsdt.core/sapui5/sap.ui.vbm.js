
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.ui --------------------------------------------------------------------------


// ---- sap.ui.vbm --------------------------------------------------------------------------


// ---- sap.ui.vbm.VBI --------------------------------------------------------------------------

/**
 * 
 * Constructor for a new VBI.
 * </p><p>
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * </p><p>
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 * </p><p>
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: '800px')</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: '600px')</li>
 * <li>{@link #getConfig config} : object</li>
 * <li>{@link #getPlugin plugin} : boolean (default: false)</li></ul>
 * </li>
 * <li>Aggregations
 * <ul></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.ui.vbm.VBI#event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:render render} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:zoom zoom} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:move move} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:openWindow openWindow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.ui.vbm.VBI#event:closeWindow closeWindow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The VBI control.
 * @extends sap.ui.core.Control
 * @version 1.20.5
 * @constructor   
 * @public
 * 
 */
sap.ui.vbm.VBI = function(sId,mSettings) {};
/**
 * 
 * The event is raised raised before a Visual Business window is closed.
 * </p><p>
 * This function is not supported in plugin mode. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.contentarea Div placeholder for content.
 * @param {string} oControlEvent.getParameters.id ID of the window that is closed.
 * @public
 */
sap.ui.vbm.VBI.prototype.closeWindow = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. The canvas was moved.
 * </p><p>
 * This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into.
 * @public
 */
sap.ui.vbm.VBI.prototype.move = function(oControlEvent) { return null; };

/**
 * 
 * The event is raised raised before a Visual Business window is opened.
 * </p><p>
 * This function is not supported in plugin mode. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.contentarea Div placeholder to render into.
 * @param {string} oControlEvent.getParameters.id ID of the window that is opened.
 * @public
 */
sap.ui.vbm.VBI.prototype.openWindow = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. Rendering of the canvas content is reqested. This event can be used to do custom rendering into the Visual Business overlay canvas.
 * </p><p>
 * This function is not supported in plugin mode. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into. 
 * @public
 */
sap.ui.vbm.VBI.prototype.render = function(oControlEvent) { return null; };

/**
 * 
 * High level API. Submit event is raised. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.data Json or xml string describing the delta state of visual business and the information about the event.
 * @public
 */
sap.ui.vbm.VBI.prototype.submit = function(oControlEvent) { return null; };

/**
 * 
 * Low level API. The canvas is zoomed.
 * </p><p>
 * This function is not supported in plugin mode. 
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into
 * @public
 */
sap.ui.vbm.VBI.prototype.zoom = function(oControlEvent) { return null; };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'closeWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * The event is raised raised before a Visual Business window is closed.
 * </p><p>
 * This function is not supported in plugin mode. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachCloseWindow = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. The canvas was moved.
 * </p><p>
 * This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachMove = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'openWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * The event is raised raised before a Visual Business window is opened.
 * </p><p>
 * This function is not supported in plugin mode. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachOpenWindow = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. Rendering of the canvas content is reqested. This event can be used to do custom rendering into the Visual Business overlay canvas.
 * </p><p>
 * This function is not supported in plugin mode. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachRender = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * High level API. Submit event is raised. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachSubmit = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Attach event handler <code>fnFunction</code> to the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.ui.vbm.VBI</code>.<br/> itself. 
 * </p><p>
 * Low level API. The canvas is zoomed.
 * </p><p>
 * This function is not supported in plugin mode. 
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code>.<br/> itself.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachZoom = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'closeWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachCloseWindow = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'move' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachMove = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'openWindow' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachOpenWindow = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'render' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachRender = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'submit' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachSubmit = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Detach event handler <code>fnFunction</code> from the 'zoom' event of this <code>sap.ui.vbm.VBI</code>.<br/>
 * </p><p>
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachZoom = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Creates a new subclass of class sap.ui.vbm.VBI with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * </p><p>
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.VBI.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * 
 * Fire event closeWindow to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'contentarea' of type <code>object</code> Div placeholder for content.</li>
 * <li>'id' of type <code>string</code> ID of the window that is closed.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireCloseWindow = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event move to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireMove = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event openWindow to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'contentarea' of type <code>object</code> Div placeholder to render into.</li>
 * <li>'id' of type <code>string</code> ID of the window that is opened.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireOpenWindow = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event render to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into. </li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireRender = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event submit to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'data' of type <code>string</code> Json or xml string describing the delta state of visual business and the information about the event.</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireSubmit = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Fire event zoom to attached listeners.
 * </p><p>
 * Expects following event parameters:
 * <ul>
 * <li>'canvas' of type <code>object</code> Canvas object to render into</li>
 * </ul>
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireZoom = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Getter for property <code>config</code>.
 * This is the model configuration. Usually the Visual Business application is provided by this property. Nevertheless the property can be used for data binding to the inner Visual Business data model.
 * </p><p>
 * Default value is empty/<code>undefined</code>
 * @return {object} the value of property <code>config</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getConfig = function() { return new Object(); };

/**
 * 
 * Getter for property <code>height</code>.
 * Set the height of the control.
 * </p><p>
 * Default value is <code>600px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>height</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * Getter for property <code>plugin</code>.
 * When true, the plugin version of Visual Business should be used.
 * </p><p>
 * Default value is <code>false</code>
 * @return {boolean} the value of property <code>plugin</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getPlugin = function() { return false; };

/**
 * 
 * Getter for property <code>width</code>.
 * Set the width of the control.
 * </p><p>
 * Default value is <code>800px</code>
 * @return {sap.ui.core.CSSSize} the value of property <code>width</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * 
 * High level load function. The function accepts a json string or an already parsed json object. This can be a Visual Business application, any delta operations on the application or other hierachical data that can be mapped by the Visual Business data provider to the inner Visual Business data context.
 * @type void
 * @public
 */
sap.ui.vbm.VBI.prototype.load = function() { return null; };

/**
 * 
 * Setter for property <code>config</code>.
 * </p><p>
 * Default value is empty/<code>undefined</code> 
 * @param {object} oConfig  new value for property <code>config</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setConfig = function(oConfig) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>height</code>.
 * </p><p>
 * Default value is <code>600px</code> 
 * @param {sap.ui.core.CSSSize} sHeight  new value for property <code>height</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setHeight = function(sHeight) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>plugin</code>.
 * </p><p>
 * Default value is <code>false</code> 
 * @param {boolean} bPlugin  new value for property <code>plugin</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setPlugin = function(bPlugin) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Setter for property <code>width</code>.
 * </p><p>
 * Default value is <code>800px</code> 
 * @param {sap.ui.core.CSSSize} sWidth  new value for property <code>width</code>
 * @return {sap.ui.vbm.VBI} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setWidth = function(sWidth) { return new sap.ui.vbm.VBI(); };

/**
 * 
 * Zoom to one or multiple geo positions.
 * </p><p>
 * This function works only for the main geo scene in the Visual Business control.
 * @param {float} 
 *         fLon
 *         Longitude in degrees. This can be an array of longitude values.
 * @param {float} 
 *         fLat
 *         Latitude in degrees. This can be an array of latitude values.
 * @param {int} 
 *         iLod
 *         Level of detail, usually between 0 and 20. This will be limited by the map provider capabilities.
 * @type void
 * @public
 */
sap.ui.vbm.VBI.prototype.zoomToGeoPosition = function(fLon,fLat,iLod) { return null; };

// ---- static fields of namespaces ---------------------------------------------------------------------
