# Nebuleuse API
Nebuleuse API is unstable and may change in future versions.  
The API is based off a JSON REST API. All communication except /status must be made using the POST method.  
All data sent to nebuleuse must be filled in the request's form values and most actions will require you to specify your sessionid. A sessionid can be obtained using the /connect action.  

# Possible return values
For actions not returning any specific data or if an error happened, Nebuleuse will return a standard message containing Code and Message. Code will contain the nebuleuse error code and message will contain any response from the server or the error message.

### /status 
Method: GET
Input: none  
Output:  Maintenance, NebuleuseVersion, GameVersion, UpdaterVersion, ComplexStatsTable  

### /connect
Input: username, password  
Output: SessionId  
  
### /disconnect
Input: sessionid  
Output: standard message  

### /getUserInfos
Input: sessionid, (userid), infomask  
Output: User informations  
  
### /setUserAchievements
Input: sessionid, data  
Output: standard message  