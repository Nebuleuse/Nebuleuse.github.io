# Nebuleuse API
Nebuleuse API is unstable and may change in future versions. The API is based off a JSON REST API meaning all responses will be formated in JSON. All communication except /status must be made using the POST method. All input sent to Nebuleuse must be filled in the request's form values and most actions will require you to specify your sessionid. Data fields must be in JSON following the format specified.

## Possible return values
For actions not returning any specific data or if an error happened, Nebuleuse will return a standard message containing a Code and Message value. Code will contain the nebuleuse error code and message will contain any response from the server or the error message. The client should always check if the server's response is a standard message before using the response.

## Static values
Nebuleuse has a few static values your client should be aware of, here is a list of such values.
### Error codes
**NebErrorNone 		= 0**  
*No error, 200*  
**NebError 			= 1**  
*Generic error, 400/500*  
**NebErrorDisconnected = 2**  
*Session is dead, you were disconnected, 401*  
**NebErrorLogin 		= 3**  
*Login failed, 401*  
**NebErrorPartialFail = 4**  
*There were errors during multiple operations, 400*  
**NebErrorAuthFail 	= 5**  
*User is not authorized to do that, 401*  

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
Gets server's status informations.  
*Input: none*  
*Output:  {Maintenance bool, NebuleuseVersion int, GameVersion int, UpdaterVersion int, ComplexStatsTable []ComplexStatsTable}*  

### /connect
Connect to the server and get a sessionid.  
*Input: username, password*  
*Output: SessionId*  
  
### /disconnect
Disconnect from the server and invalidate the sessionid.  
*Input: sessionid*  
*Output: standard message*  

### /getUserInfos
Gets user informations. If userid is not provided, gets informations about the caller (session's owner), otherwise gets informations about the userid. The infomask determines what amount of information will be get.  
*Input: sessionid, (userid), infomask*  
*Output: User*  
  
### /setUserAchievements
Updates user achievements information.  
*Input: sessionid, data*  
*Output: standard message*  
*Data format: []{Id int, value string}*  

### /setUserStats
Updates user stats informations  
*Input: sessionid, data*  
*Output: standard message*  
*Data format: {Stats []UserStat}*  

### /addComplexStats
Adds a complex stat  
*Input: sessionid, data*  
*Output: standard message*  
*Data format: {Stats []ComplexStat}*  


### /getMessages
Fetches messages adressed to the user  
*Input: sessionid*  
*Output: {Channel string, Message {}}*  


### /sendMessage
Sends a message to the specified channel  
*Input: sessionid, channel, message*  
*Output: standard message*  

### /subscribeTo
Subscribes to recieve messages over the specified channel  
*Input: sessionid, channel*  
*Output: standard message*  

### /unSubscribeTo
Unsubscribes to messages over the specified channel  
*Input: sessionid, channel*  
*Output: standard message*  

### /getStatTables
Gets stat tables list  
*Input: sessionid*  
*Output: []ComplexStatTableInfo*  

### /getStatTable
Gets stat table informations  
*Input: sessionid, name*  
*Output: ComplexStatTableInfo*  

## Admin rights required actions

### /getDashboardInfos
Gets informatinos to display on the administration dashboard  
*Input: sessionid*  
*Output: {UserCount int, OnlineUsers int, UpdateCount int}*  

### /getLogs
Gets past logs from the server  
*Input: sessionid*  
*Output: logs lines*  

### /getUsersInfos
Gets multiple users informations  
*Input: sessionid, infomask, page*  
*Output: []User*  

### /getAchievements
Gets achievements list  
*Input: sessionid*  
*Output: []Achievement*  

### /getAchievement
Gets achievement information  
*Input: sessionid, achievementid*  
*Output: Achievement*  

### /setAchievement
Updates achievement information  
*Input: sessionid, achievementid, data*  
*Output: standard message*  

### /addAchievement
Adds new achievement  
*Input: sessionid, data*  
*Output: standard message*  

### /deleteAchievement
Deletes an achievement  
*Input: sessionid, achievementid*  
*Output: standard message*  

### /setStatTable
Updates stat table informations  
*Input: sessionid, data*  
*Output: standard message*  

### /addStatTables
Adds new stat table  
*Input: sessionid, data*  
*Output: standard message*  

### /deleteStatTables
Deletes specified stat table. Completely removes the informations stored for this table from database.  
*Input: sessionid, name*  
*Output: standard message*  

### /setUsersStatFields
Sets users stat fields  
*Input: sessionid, fields*  
*Output: standard message*  