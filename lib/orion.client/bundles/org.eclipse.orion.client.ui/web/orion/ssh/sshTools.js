/*******************************************************************************
 * @license
 * Copyright (c) 2011, 2013 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/
/*global define localStorage*/
/** @namespace The global container for eclipse APIs. */

define(['orion/Deferred'], function(Deferred){

	var eclipse = eclipse || {};
	eclipse.SshService = (function() {
		function SshService(serviceRegistry) {
			if (serviceRegistry) {
				this._serviceRegistry = serviceRegistry;
				this._authService = serviceRegistry.getService("orion.core.auth"); //$NON-NLS-0$
				this._serviceRegistration = serviceRegistry.registerService("orion.net.ssh", this); //$NON-NLS-0$
			}
		}
		
		/** @lends eclipse.SshService.prototype */
		SshService.prototype = {
			KNOWN_HOSTS: "knownHosts", //$NON-NLS-0$
			
			addKnownHost: function(options){
				options = options || {};
				var deferred = new Deferred();
				var self = this;
				
				var host = options.host,
					keyType = options.keyType,
					hostKey = options.hostKey,
					port = options.port || 22;
					
				if(!host || !keyType || !hostKey || !port){
					/* required parameters missing, fail */
					deferred.reject();
					return deferred;
				}
					
				this._authService.getUser().then(function(user){
					var currKnownHosts = localStorage.getItem(user.login + "/" + self.KNOWN_HOSTS); //$NON-NLS-0$
					currKnownHosts = currKnownHosts ? JSON.parse(currKnownHosts) : [];
					
					for(var i=0; i<currKnownHosts.length; ++i){
						var entry = currKnownHosts[i];
						if(entry.host === host && entry.port === port){
							/* already known host */
							deferred.resolve(entry.host + " " + entry.keyType + " " + entry.hostKey);
							return;
						}
					}
					
					/* new host entry */
					var entry = {
						host : host,
						port : port,
						keyType : keyType,
						hostKey : hostKey
					};
					
					/* flush to ls */
					currKnownHosts.push(entry);
					localStorage.setItem(user.login + "/" + self.KNOWN_HOSTS, JSON.stringify(currKnownHosts));
					deferred.resolve(entry.host + " " + entry.keyType + " " + entry.hostKey);
					
				}, function(error){
					deferred.reject(error);
				});
				
				return deferred;
			},
			
			clearKnownHosts : function(){
				var deferred = new Deferred();
				var self = this;
				
				this._authService.getUser().then(function(user){
					var currKnownHosts = localStorage.getItem(user.login + "/" + self.KNOWN_HOSTS); //$NON-NLS-0$
					currKnownHosts = currKnownHosts ? JSON.parse(currKnownHosts) : [];
					
					localStorage.removeItem(user.login + "/" + self.KNOWN_HOSTS); //$NON-NLS-0$
					deferred.resolve(currKnownHosts);
				}, function(error){
					deferred.reject(error);
				});
				
				return deferred;
			},
			
			getKnownHostCredentials : function(host, port){
				var deferred = new Deferred();
				var self = this;
				
				/* default ssh port */
				port = port || 22;
				
				if(!host || !port){
					/* required parameters missing, fail */
					deferred.reject();
					return deferred;
				}
				
				this._authService.getUser().then(function(user){
					var currKnownHosts = localStorage.getItem(user.login + "/" + self.KNOWN_HOSTS); //$NON-NLS-0$
					currKnownHosts = currKnownHosts ? JSON.parse(currKnownHosts) : [];
					
					for(var i=0; i<currKnownHosts.length; ++i){
						var entry = currKnownHosts[i];
						if(entry.host === host && entry.port === port){
							deferred.resolve(entry.host + " " + entry.keyType + " " + entry.hostKey);
							return;
						}
					}
					
					/* not found */
					deferred.resolve("");
				}, function(error){
					deferred.reject(error);
				});
				
				return deferred;
			}
		};
		
		return SshService;
	}());
	
	return eclipse;
});