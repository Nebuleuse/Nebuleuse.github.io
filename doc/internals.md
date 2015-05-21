# Internals
## Middlewares
Nebuleuse has a few middlewares used to simplify handlers construction. They can be chained directly when registering the handler.  
**userBySession** : 		Populates the context with the user struct using the request sessionId  
**verifyFormValuesExist** : Verifies the existence of specified form fields  
**mustBeAdmin** : 			Verifies context's requester rank for auth level, userBySession must have been called before this  
