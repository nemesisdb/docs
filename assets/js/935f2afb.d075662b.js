"use strict";(self.webpackChunknemesisdb=self.webpackChunknemesisdb||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Sessions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is a Session","href":"/docs-deploy/tutorials/sessions/what-is-a-session","docId":"tutorials/sessions/what-is-a-session"},{"type":"link","label":"Create Session","href":"/docs-deploy/tutorials/sessions/create-session","docId":"tutorials/sessions/create-session"},{"type":"link","label":"End Session","href":"/docs-deploy/tutorials/sessions/end-session","docId":"tutorials/sessions/end-session"},{"type":"link","label":"Shared Session","href":"/docs-deploy/tutorials/sessions/shared-sessions","docId":"tutorials/sessions/shared-sessions"}],"href":"/docs-deploy/category/sessions"},{"type":"category","label":"First Steps","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Setup","href":"/docs-deploy/tutorials/first-steps/setup","docId":"tutorials/first-steps/setup"},{"type":"link","label":"Create Session","href":"/docs-deploy/tutorials/first-steps/new-session","docId":"tutorials/first-steps/new-session"},{"type":"link","label":"Set and Get","href":"/docs-deploy/tutorials/first-steps/setandget","docId":"tutorials/first-steps/setandget"}],"href":"/docs-deploy/category/first-steps"}],"apiSidebar":[{"type":"link","label":"Overview","href":"/docs-deploy/api/Overview","docId":"api/Overview"},{"type":"link","label":"Response Status Values","href":"/docs-deploy/api/Statuses","docId":"api/Statuses"},{"type":"category","label":"Sessions","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"SH_NEW","href":"/docs-deploy/api/sessions/sh-new","docId":"api/sessions/sh-new"},{"type":"link","label":"SH_END","href":"/docs-deploy/api/sessions/sh-end","docId":"api/sessions/sh-end"},{"type":"link","label":"SH_OPEN","href":"/docs-deploy/api/sessions/sh-open","docId":"api/sessions/sh-open"},{"type":"link","label":"SH_INFO","href":"/docs-deploy/api/sessions/sh-info","docId":"api/sessions/sh-info"},{"type":"link","label":"SH_INFO_ALL","href":"/docs-deploy/api/sessions/sh-info-all","docId":"api/sessions/sh-info-all"}],"href":"/docs-deploy/category/sessions-1"},{"type":"category","label":"Key Value","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"KV_SET","href":"/docs-deploy/api/kv/kv-set","docId":"api/kv/kv-set"},{"type":"link","label":"KV_SETQ","href":"/docs-deploy/api/kv/kv-setq","docId":"api/kv/kv-setq"},{"type":"link","label":"KV_ADD","href":"/docs-deploy/api/kv/kv-add","docId":"api/kv/kv-add"},{"type":"link","label":"KV_ADDQ","href":"/docs-deploy/api/kv/kv-addq","docId":"api/kv/kv-addq"},{"type":"link","label":"KV_GET","href":"/docs-deploy/api/kv/kv-get","docId":"api/kv/kv-get"},{"type":"link","label":"KV_CONTAINS","href":"/docs-deploy/api/kv/kv-contains","docId":"api/kv/kv-contains"},{"type":"link","label":"KV_RMV","href":"/docs-deploy/api/kv/kv-rmv","docId":"api/kv/kv-rmv"},{"type":"link","label":"KV_CLEAR","href":"/docs-deploy/api/kv/kv-clear","docId":"api/kv/kv-clear"},{"type":"link","label":"KV_COUNT","href":"/docs-deploy/api/kv/kv-count","docId":"api/kv/kv-count"},{"type":"link","label":"KV_APPEND","href":"/docs-deploy/api/kv/kv-append","docId":"api/kv/kv-append"},{"type":"link","label":"KV_UPDATE","href":"/docs-deploy/api/kv/kv-update","docId":"api/kv/kv-update"}],"href":"/docs-deploy/category/key-value"}]},"docs":{"api/kv/kv-add":{"id":"api/kv/kv-add","title":"KV_ADD","description":"Stores data. This command is the same as KV_SET but it will not overwrite an existing key, it is \\"store this key if it doesn\'t exist\\".","sidebar":"apiSidebar"},"api/kv/kv-addq":{"id":"api/kv/kv-addq","title":"KV_ADDQ","description":"Stores data. This command is the same as KV_ADD but it will only response on an error (i.e. the key already exists).","sidebar":"apiSidebar"},"api/kv/kv-append":{"id":"api/kv/kv-append","title":"KV_APPEND","description":"This appends a value to an existing object, array or string value.","sidebar":"apiSidebar"},"api/kv/kv-clear":{"id":"api/kv/kv-clear","title":"KV_CLEAR","description":"Removes all keys from the session. If you want to remove keys individually, use KV_RMV.","sidebar":"apiSidebar"},"api/kv/kv-contains":{"id":"api/kv/kv-contains","title":"KV_CONTAINS","description":"Check if a key exists.","sidebar":"apiSidebar"},"api/kv/kv-count":{"id":"api/kv/kv-count","title":"KV_COUNT","description":"Returns how many keys are in a session.","sidebar":"apiSidebar"},"api/kv/kv-get":{"id":"api/kv/kv-get","title":"KV_GET","description":"Get one or multiple keys.","sidebar":"apiSidebar"},"api/kv/kv-rmv":{"id":"api/kv/kv-rmv","title":"KV_RMV","description":"Removes one or multiple keys. If you want to remove all keys, use KV_CLEAR.","sidebar":"apiSidebar"},"api/kv/kv-set":{"id":"api/kv/kv-set","title":"KV_SET","description":"Stores data. This command always returns a response. If you don\'t require a response you can use KV_SETQ which sends a response on failure.","sidebar":"apiSidebar"},"api/kv/kv-setq":{"id":"api/kv/kv-setq","title":"KV_SETQ","description":"Stores data. This is identical to KV_SET but it only sends a response on failure.","sidebar":"apiSidebar"},"api/kv/kv-update":{"id":"api/kv/kv-update","title":"KV_UPDATE","description":"This updates a value inside an object or array.","sidebar":"apiSidebar"},"api/Overview":{"id":"api/Overview","title":"Overview","description":"There are two APIs: Session and KeyValue.","sidebar":"apiSidebar"},"api/sessions/sh-end":{"id":"api/sessions/sh-end","title":"SH_END","description":"Ends a session, deleting the session data.","sidebar":"apiSidebar"},"api/sessions/sh-info":{"id":"api/sessions/sh-info","title":"SH_INFO","description":"Get session information.","sidebar":"apiSidebar"},"api/sessions/sh-info-all":{"id":"api/sessions/sh-info-all","title":"SH_INFO_ALL","description":"Get information on all sessions.","sidebar":"apiSidebar"},"api/sessions/sh-new":{"id":"api/sessions/sh-new","title":"SH_NEW","description":"Creates a new session.","sidebar":"apiSidebar"},"api/sessions/sh-open":{"id":"api/sessions/sh-open","title":"SH_OPEN","description":"Opens a shared session from the session name.","sidebar":"apiSidebar"},"api/Statuses":{"id":"api/Statuses","title":"Response Status Values","description":"Many commands return a status (st) value which is an unsigned integer.","sidebar":"apiSidebar"},"intro":{"id":"intro","title":"NemesisDB","description":"NemesisDB is a session based JSON store. At the moment it is in-memory storage only, a future release will include saving data to disk."},"tutorials/first-steps/new-session":{"id":"tutorials/first-steps/new-session","title":"Create Session","description":"This shows how to create a session, store data and then get that data. It also briefly shows how to create an expiring session.","sidebar":"tutorialSidebar"},"tutorials/first-steps/setandget":{"id":"tutorials/first-steps/setandget","title":"Set and Get","description":"We\'ll store data of different types. With data types part of the JSON syntax, we don\'t have to care about types, only that the JSON is valid.","sidebar":"tutorialSidebar"},"tutorials/first-steps/setup":{"id":"tutorials/first-steps/setup","title":"Setup","description":"Install Postman","sidebar":"tutorialSidebar"},"tutorials/sessions/create-session":{"id":"tutorials/sessions/create-session","title":"Create Session","description":"A session is created with the SH_NEW command.","sidebar":"tutorialSidebar"},"tutorials/sessions/end-session":{"id":"tutorials/sessions/end-session","title":"End Session","description":"A session ends when it expires or when commanded by SH_END.","sidebar":"tutorialSidebar"},"tutorials/sessions/shared-sessions":{"id":"tutorials/sessions/shared-sessions","title":"Shared Session","description":"Shared sessions let different services access the same session without knowing the token. This is useful if there are multiple independent backend services that require access to the same session whilst avoiding having to distribute the session token to each service.","sidebar":"tutorialSidebar"},"tutorials/sessions/what-is-a-session":{"id":"tutorials/sessions/what-is-a-session","title":"What is a Session","description":"In typical caches and databases all data are lumped together, although some may split this into regions called memory pools to reduce memory fragementation.","sidebar":"tutorialSidebar"}}}')}}]);