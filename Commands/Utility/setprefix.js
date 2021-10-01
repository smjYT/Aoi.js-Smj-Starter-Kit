module.exports = {
name:"setprefix",
  aliases:['prefix'],
code:` 
$setServerVar[prefix;$get[sm]]
 ✅ **ok! the prefix is now \`$get[sm]\`. Use \`$get[sm]help\` for commands**
 
 $onlyIf[$charCount[$get[sm]]<=12;❌the maximum chars possible in a prefix is ​​ \`12\`!]
 
 $let[sm;$replaceText[$replaceText[$noMentionMessage[1];\\;;#SEMI#];\\$;#CHAR#]]
 $argsCheck[>1;❌you need to say a new prefix!]
 $onlyPerms[admin;❌you need \`admin\` perm to use this command!]`
}