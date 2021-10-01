module.exports = ({
name: "ping",
code: `
$if[$ping<50]
$author[Bot Ping;$userAvatar[$clientid]]
$image[https://somlicab.sirv.com/New%20Projects.png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[GREEN]

$elseif[$ping<250]
$author[Bot Ping;$userAvatar[$clientid]]
$image[https://somlicab.sirv.com/New%20Project%20(2).png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[YELLOW]
$endelseif


$elseif[$ping<350]
$author[Bot Ping;$userAvatar[$clientid]]
$image[https://somlicab.sirv.com/New%20Project%20(1).png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[ORANGE]
$endelseif


$elseif[$ping<600]
$author[Bot Ping;$userAvatar[$clientid]]
$image[https://somlicab.sirv.com/New%20Project.png?text.0.text=$pingms&text.0.position.gravity=north&text.0.position.x=10%25&text.0.position.y=30%25&text.0.size=44]
$color[RED]
$endelseif
$endif

$onlybotperms[embedlinks;I Dont Have Permission Of Embed Links]
 `
});