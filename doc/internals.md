# Internal structure
## Core and Handlers
Nebuleuse is divided in two sub packages. Core contains all the functions used by Handlers to respond to requests. You should add new actions in the Handler package and make it call Core functions to operate on Nebuleuse.
## Middlewares
Nebuleuse has a few middlewares used to simplify handlers construction. They can be chained directly when registering the handler.  
**userBySession** : 		Populates the context with the user struct using the request sessionId  
**verifyFormValuesExist** : Verifies the existence of specified form fields  
**mustBeAdmin** : 			Verifies context's requester rank for auth level, userBySession must have been called before this  
