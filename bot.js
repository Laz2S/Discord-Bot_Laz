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
                    message: '\***Comandos-CS***\n1csnade\n---------------\n***Comandos-LoL***\n1lolbuild\n1lolprofile\n---------------\n***Aleatorio***\n1elogio\n1motivacao\n1carlos\n1key\nmadu\n1clima\n1stream\n1falabot\n1ping\n1rage\n1say\n1random\n1giria'
                });
            break;
		case 'falabot':
		var botR = Math.floor((Math.random() * 5) + 1);
		switch(botR){
				case 1:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Fala tu '+user
                		});
			    break;
				case 2:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'kk eae '+user
                		});
			    break;
				case 3:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Voce vem sempre aqui '+user+' ?'
                		});
			    break;
				case 4:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Vamos ser amigos '+user+' !'
                		});
			    break;
				case 5:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Estou feliz em te ver aqui '+user
                		});
			    break;
                }
            break;
		case 'elogio':
		var botR = Math.floor((Math.random() * 1) + 1);
		switch(botR){
				case 1:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Voce eh lindo como um girassol'
                		});
			    break;
                }
            break;
		case 'motivacao':
		var botR = Math.floor((Math.random() * 6) + 1);
		switch(botR){
				case 1:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Voce vai conseguir'
                		});
			    break;
				case 2:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Eu acredito no seu potencial'
                		});
			    break;
				case 3:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Nao desista no primeiro erro'
                		});
			    break;
				case 4:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Voce nao estah sozinho'
                		});
			    break;
				case 5:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Estou aqui por voce'
                		});
			    break;
				case 6:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Todos erram'
                		});
			    break;
                }
            break;
		case 'carlos':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'Eu te amo Carlos'
                	});

            break;
		case 'key':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'Voce ja pensou em um comando ?'
                	});

            break;
		case 'madu':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'Fale mais frases ai tmj eh nois'
                	});

            break;
		case 'stream':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
			if(cmdbuild==null)
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'Entre com o nome do streammer'
			});
			}else
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'https://www.twitch.tv/'+cmdbuild
                	});
			}
            break;
		case 'csnade':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
			if(cmdbuild==null)
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'Entre com o nome do mapa'
			});
			}else
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'http://www.thewarmup.net/map/'+cmdbuild
                	});
			}

            break;
		case 'lolbuild':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
			if(cmdbuild==null)
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'Entre com o nome do campeao'
			});
			}else
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'http://champion.gg/champion/'+cmdbuild
                	});
			}

            break;
		case 'lolprofile':
			var argsbuild = message.substring(1).split(' ');
			var cmdbuild = args[0];
			if(cmdbuild==null)
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'Entre com o nome da conta'
			});
			}else
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'http://br.op.gg/summoner/champions/userName='+cmdbuild
                	});
			}

            break;
                case 'clima':
		var argsbuild = message.substring(1).split(' ');
		var cmdbuild = args[0];
			if(cmdbuild==null)
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'Entre com o estado e nome da cidade\nExemplo sp/saopaulo'
			});
			}else
			{
    	    		bot.sendMessage({
                    		to: channelID,
                    		message: 'http://tempo.clic.com.br/'+cmdbuild
                	});
			}                

            break;
                case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong'
                });
            break;
	        case 'rage':
		var botR = Math.floor((Math.random() * 5) + 1);
		switch(botR){
				case 1:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Sai daqui boboca'
                		});
			    break;
				case 2:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Cala boca, por favor'
                		});
			    break;
				case 3:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Com todo respeito, voce eh chato pra caramba'
                		});
			    break;
				case 4:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Voce eh um bobalhao'
                		});
			    break;
				case 5:
                		bot.sendMessage({
                    		to: channelID,
                    		message: 'Se retire por gentileza'
                		});
			    break;
		}
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
		var botG = Math.floor((Math.random() * 12) + 1);
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
				case 12:
				bot.sendMessage({
                    			to: channelID,
                    			message: 'Suave na nave'
               			});
			break;
		}
         }
     }
});