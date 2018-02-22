var Discord = require('discord.io');
var auth = require('./auth.json');
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `1`
    if (message.substring(0, 1) == '1') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
		case 'comandos':
                bot.sendMessage({
                    to: channelID,
                    message: '\nComandos-CS\n1csnade\n---------------\nComandos-LoL\n1lolbuild\n1lolprofile\n---------------\nAleatorio\n1stream\n1falabot\n1ping\n1rage\n1say\n1random\n1giria'
                });
            break;
		case 'falabot':
                bot.sendMessage({
                    to: channelID,
                    message: 'Fala tu '+ user
                });
            break;
		case 'stream':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'https://www.twitch.tv/'+cmdbuild
                	});

            break;
		case 'csnade':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'http://www.thewarmup.net/map/'+cmdbuild
                	});

            break;
		case 'lolbuild':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'http://champion.gg/champion/'+cmdbuild
                	});

            break;
		case 'lolprofile':
			var argsbuild = message.substring(9).split(' ');
			var cmdbuild = args[0];
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'http://br.op.gg/summoner/champions/userName='+cmdbuild
                	});

            break;
/*
		default:
		if(message.substring(0,2) instanceof Number)
		{
                bot.sendMessage({
                    to: channelID,
                    message: 'teste'
                });
		}
            break;
*/
                case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong'
                });
            break;
	        case 'rage':
                bot.sendMessage({
                    to: channelID,
                    message: 'Sai daqui boboca'
                });
            break;
            	case 'say':
    	    	const sayMessage = args.join(" ");
    	    	bot.sendMessage({
                    to: channelID,
                    message: sayMessage
                });
	    break;
	        case 'random':
                bot.sendMessage({
                    to: channelID,
                    message: Math.floor((Math.random() * 10) + 1)
                });
            break;
                case 'giria':
		var botG = Math.floor((Math.random() * 11) + 1);
		switch(botG){
				case 1:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Hiiiiiiii'
               			});
			break;
				case 2:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Xesquedele'
               			});
			break;
				case 3:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Cansadissimo'
               			});
			break;
				case 4:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Dereguejhonson'
               			});
			break;
				case 5:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Lago Aqui Lago Ai?'
               			});
			break;
				case 6:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Fon'
               			});
			break;
				case 7:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Trab'
               			});
			break;
				case 8:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Ta mec'
               			});
			break;
				case 9:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Disney'
               			});
			break;
				case 10:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Eoq'
               			});
			break;
				case 11:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Abreize'
               			});
			break;
		}
         }
     }
});