module.exports = ({
  name: "eval",
  aliases: ['ev','evaluate'],
  code: `$eval[$message]
  $color[YELLOW]
  $argsCheck[>1;I can't eval a code if you don't provide said code]
  
  $onlyForIDs[$botownerid;Only My Developer Smj Use This]`
})