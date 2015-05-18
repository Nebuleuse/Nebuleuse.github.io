# Nebuleuse API
Nebuleuse API is unstable and may change in future versions.  
The API is based off a JSON REST API. All communication except /status must be made using the POST method.  
All data sent to Nebuleuse must be filled in the request's form values and all actions will require you to specify your sessionid. A sessionid can be obtained using the /connect action.  

## Possible return values
For actions not returning any specific data or if an error happened, Nebuleuse will return a standard message containing a Code and Message value. Code will contain the nebuleuse error code and message will contain any response from the server or the error message. The client should always check if the server's response is a standard message before using the response.

## Static values
Nebuleuse has a few static values your client should be aware of, here is a list of such values.
### Error codes
**NebErrorNone 		= 0**  
*No error*  
**NebError 			= 1**  
*Generic error*  
**NebErrorDisconnected = 2**  
*Session is dead, you were disconnected*  
**NebErrorLogin 		= 3**  
*Login failed*  
**NebErrorPartialFail = 4**  
*There were errors during multiple operations*  
**NebErrorAuthFail 	= 5**  
*User is not authorized to do that*  

### User informations mask
**UserMaskBase = 1 << 0**  
*Base user informations*  
**UserMaskOnlyId = 1 << 1**  
*No base user informations*  
**UserMaskAchievements = 1 << 2**  
*Load achievements*  
**UserMaskStats = 1 << 3**  
*Load stats*  
**UserMaskAll = UserMaskStats | UserMaskAchievements**  
*Load everything*

## Actions

### /status
Get server's status informations.  
*Input: none*  
*Output:  Maintenance, NebuleuseVersion, GameVersion, UpdaterVersion, ComplexStatsTable*  

### /connect
Connect to the server and get a sessionid.  
*Input: username, password*  
*Output: SessionId*  
  
### /disconnect
Disconnect from the server and invalidate the sessionid.  
*Input: sessionid*  
*Output: standard message*  

### /getUserInfos
Get user informations. If userid is not provided, gets informations about the caller (session's owner), otherwise gets informations about the userid. The infomask determines what amount of information will be get.  
*Input: sessionid, (userid), infomask*  
*Output: Id(, Username, Rank, Avatar, Achievements, Stats)*  
  
### /setUserAchievements
Updates user achievement information.  
*Input: sessionid, data*  
*Output: standard message*  