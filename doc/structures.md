# Data structures
### Standard message
```
{
	Code 	int
	Message string
}
```

### User
```
{
	Id           int
	Username     string
	Rank         int
	Avatar       string
	Achievements []Achievement
	Stats        []UserStat
}
```

### Achievement
```
{
	Id       int
	Name     string
	Progress uint
	Max      uint
	Icon     string
}
```

### User stats
```
{
	Name  string
	Value int64
}
```

### Complex stat table infos
```
{
	Name      string
	Fields    []{
			Name string
			Type string
			Size int
		}
	AutoCount bool
}
```

### Complex stat
```
{
	Name   string
	Values []{
		Name  string
		Value string
	}
}
```