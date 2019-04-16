  //|*************************************************************|\\
  //|                                                             |\\
  //|                Audio Player 0.6 by RAF                      |\\
  //|                 www.AudioPlayer.AT.UA                       |\\
  //|    Skype:raf-1994, ICQ:566667065, e-Mail: raf@xaker.ru      |\\
  //|                                                             |\\
  //|*************************************************************|\\
  //|        Уважайте чужой труд! Не убирайте копирайт!           |\\
  //|*************************************************************|\\


    var PlayerID = 'SwfPlayer';
    var PlayerData = './player/uppod.swf';
    var PlayerST = './player/style.txt';
    var PlayerWidth = 330;
    var PlayerHieght = 40;
    var PlayerClass = 'TablePl';
    var Botton = [ 'Close', 'Play', 'Pause', 'Stop', 'Next', 'Prev', 'Download', 'Settings', 'Again', 'Poster' ];
    var BtClick = 'Player';

    var CSSP = ['','50px','28%','15px']
    var html = $('#SwfPlayerv');
    var Text = document.title;
    var iTitle = $('title');
    var htmlClass = '.'+html.attr('class');
    var Again = 0; 
    
    
    function uppodEvent(a, b)
    {

	var c = a - 1,
	    d =+ a + 1;

	$('#'+Botton[5]).click(function ()
			       {
				   $('#'+BtClick+''+d+'').click()
				       });
	$('#'+Botton[0]).click(function ()
			       {
				   $('#'+Botton[3]).click();
				   html.animate({
				       opacity : '0', display : 'none'
				   },
						{
						    queue : false, duration : 350
						});
				   Again = 0;
				   $('title').html(Text)
				       });
	$('#'+Botton[4]).click(function ()
			       {
				   $('#'+BtClick+''+c+'').click();
			       });
	setInterval(function ()
		    {
			if (Again < 1) {
			    $('#Again').click(function () 
					      {
						  Again = 1;
						  $(this).css({opacity : '1'}) 
						      });
			}
			else {
			    $('#'+Botton[8]).click(function () 
						   {
						       Again = 0;
						       $(this).css({opacity : '0.4'}) 
							   });
			}
		    }, 300);
	switch (b)
	{
	    case "end":
		$('#'+Botton[1]).show();
		$('#'+Botton[2]).hide();
		setTimeout(function (){if (Again === 1) uppodSend(PlayerID, 'play'); else if (getCookie('AutoNext')) {alert('Воспроизведения закончилось')} else  if (getCookie('AutoNext2')) $('#'+BtClick+''+d+'').click(); else $('#'+BtClick+''+c+'').click();}, 300);
		break;
		    case "play":
		$('#'+Botton[1]).hide();
		$('#'+Botton[2]).show();
		break;
		    case "stop":
		$('#'+Botton[1]).show();
		$('#'+Botton[2]).hide();
		break;
		    case "pause":
		$('#'+Botton[1]).show();
		$('#'+Botton[2]).hide();
		break;
		    }
    }
    
    function Player(a, b, c, d, e)
    {
	iTitle.html('Играет ' + a);
	html.animate({opacity : '1', display : ''},{queue : false, duration : 350}).html('<table border="0" cellpadding="0" cellspacing="0" height="44"><tr>' +
											 '<td style="padding-right:5px;">' +
											 '<div id="'+Botton[9]+'"><a href="'+b+'" title="'+a+'"><img src="'+e+'" width="44" height="42" alt="'+a+'" title="'+a+'"></a></div>' +
											 '</td><td>' +
											 '<table border="0" cellpadding="0" cellspacing="0" class="'+PlayerClass+'" height="44">' +
											 '<tr>' +
											 '<td><font id="'+Botton[5]+'"></font></td>' +
											 '<td onclick="uppodSend(PlayerID, \'toggle\')"><font id="'+Botton[1]+'"></font><font id="'+Botton[2]+'"></font></td>' +
											 '<td><font id="'+Botton[8]+'"></font></td>' +
											 '<td onclick="uppodSend(PlayerID, \'stop\')"><font id="'+Botton[3]+'"></font></td>' +
											 '<td><font id="'+Botton[4]+'"></font></td>' +
											 '<td><object id="'+PlayerID+'" type="application/x-shockwave-flash" data="'+PlayerData+'" width="'+PlayerWidth+'" height="'+PlayerHieght+'"><param value="#ffffff" />' +
											 '<param name="allowFullScreen" value="true" />' +
											 '<param name="allowScriptAccess" value="always" />' +
											 '<param name="wmode" value="transparent" />' +
											 '<param name="movie" value="'+PlayerData+'" />' +
											 '<param name="flashvars" value="uid='+c+'&comment='+a+'&st='+PlayerST+'&amp;file='+b+'" />' +
											 '</object></td>' +
											 '<td><font id="'+Botton[7]+'" onclick="PlayerSettings();"></font></td>' +
											 '<td><a id="'+Botton[6]+'" href="'+b+'"></a></td>' +
											 '<td><font id="'+Botton[0]+'"></font></td>' +
											 '</tr></table>' +
											 '</td></tr></table>');
	
	if(getCookie('PlayerPG') === 'left'){$(htmlClass).css({left:CSSP[1], right:CSSP[0]})} else 
	    if(getCookie('PlayerPG') === 'center'){$(htmlClass).css({left:CSSP[2], right:CSSP[0]})} else 
		if(getCookie('PlayerPG') === 'right'){$(htmlClass).css({left:CSSP[0], right : CSSP[1]})} else {$(htmlClass).css({left:CSSP[2]})}
	if(getCookie('PlayerPV') === 'top'){$(htmlClass).css({top:CSSP[3], bottom:CSSP[0]})} else 
	    if(getCookie('PlayerPV') === 'bottom'){$(htmlClass).css({top:CSSP[0], bottom:CSSP[3]})} else {$(htmlClass).css({bottom:CSSP[3]})}
	
	if(getCookie('PlayerColor')){$('.'+PlayerClass).css({background:'#'+getCookie('PlayerColor')})}
	if(getCookie('Poster')){$('#'+Botton[9]).hide()}
	$('#'+Botton[9]).css({border:'1px solid #'+getCookie('PlayerColor')})
	    Again=0;
	AddClass();
    }
    
    function AddClass()
    {
	$('#'+Botton[0]).addClass(Botton[0]);
	$('#'+Botton[1]).addClass(Botton[1]);
	$('#'+Botton[2]).addClass(Botton[2]);
	$('#'+Botton[3]).addClass(Botton[3]);
	$('#'+Botton[4]).addClass(Botton[4]);
	$('#'+Botton[5]).addClass(Botton[5]);
	$('#'+Botton[6]).addClass(Botton[6]);
	$('#'+Botton[7]).addClass(Botton[7]);
	$('#'+Botton[8]).addClass(Botton[8]);
	$('#'+Botton[9]).addClass(Botton[9]);
    }
    
    
    $(function() {
	$("#Modal").html('<div class="Window"><div class="WinTitle">Настройки плеера</div>' +
			 '<a class="WinClose" onclick="$(\'#Modal\').fadeToggle(500);">Закрыть</a><div class="WinContent">' +
			 '<table border="0" cellpadding="0" width="100%" cellspacing="0" class="AjaxOptions">' +
			 '<tr class="AjaxOpt">' +
			 '<td align="left" width="200" valign="top" style="padding:5px;">Цвет плеера:</td>' +
			 '<td style="padding:5px;">' +
			 '<div id="red"></div><div id="green"></div><div id="blue"></div><div id="swatch" class="ui-widget-content ui-corner-all"></div>' +
			 '</td>' +
			 '</tr>' +
			 '<tr class="AjaxOpt">' +
			 '<td align="left" style="padding:5px;">Показать постер?</td>' +
			 '<td style="padding:5px;"><span class="toggle-bg">' +
			 '<input onclick="Setting(\'PPoster\',\'Yes\');" id="PPoster1" class="PPoster" name="PPoster" type="radio">' +
			 '<input onclick="Setting(\'PPoster\',\'No\');" id="PPoster2" class="PPoster" name="PPoster" type="radio">' +
			 '<span class="switch"></span></span></td>' +
			 '</tr>' +
			 '<tr class="AjaxOpt">' +
			 '<td align="left" style="padding:5px;">Переключать в конце?</td>' +
			 '<td style="padding:5px;"><span class="toggle-bg">' +
			 '<input onclick="Setting(\'PNext\',\'Yes\');" id="PNext1" class="PNext" name="PNext" type="radio">' +
			 '<input onclick="Setting(\'PNext\',\'No\');" id="PNext2" class="PNext" name="PNext" type="radio">' +
			 '<span class="switch"></span></span></td>' +
			 '</tr>' +
			 '<tr class="AjaxOpt" id="PNext34">' +
			 '<td align="left" style="padding:5px;">Переключать вперед или назад?</td>' +
			 '<td style="padding:5px;"><span class="toggle-bg">' +
			 '<input onclick="Setting(\'PNext2\',\'Next\');" id="PNext3" class="PNext1" name="PNext1" type="radio">' +
			 '<input onclick="Setting(\'PNext2\',\'Prev\');" id="PNext4" class="PNext1" name="PNext1" type="radio">' +
			 '<span class="switch"></span></span></td>' +
			 '</tr>' +
			 '<tr class="AjaxOpt">' +
			 '<td align="left" valign="top" style="padding:5px;">Положения:</td>' +
			 '<td>' +
			 '<table border="0" cellpadding="0" width="200px" cellspacing="0"><tr><td valign="top">' +
			 '<label><input onclick="Setting(\'PPosition\',\'top\');" id="PPtop" class="PPositionV" name="PPositionV" type="radio"> Сверху</label><br>' +
			 '<label><input onclick="Setting(\'PPosition\',\'bottom\');" id="PPbottom" class="PPositionV" name="PPositionV" type="radio"> Снизу</label>' +
			 '</td><td>' +
			 '<label><input onclick="Setting(\'PPosition\',\'left\');" id="PPleft" class="PPosition" name="PPosition" type="radio"> Слева</label><br>' +
			 '<label><input onclick="Setting(\'PPosition\',\'center\');" id="PPcenter" class="PPosition" name="PPosition" type="radio"> По центру</label><br>' +
			 '<label><input onclick="Setting(\'PPosition\',\'right\');" id="PPright" class="PPosition" name="PPosition" type="radio"> Справа</label>' +
			 '</td></tr></table></td></tr></table></div></div>');	
    });
    
    
    
    function PlayerSettings()
    {    
	if (getCookie('AutoNext')) {$('#PNext2').attr('CHECKED','CHECKED');$('#PNext34').hide();} else {$('#PNext1').attr('CHECKED','CHECKED');$('#PNext34').show();}
        if (getCookie('AutoNext2')) {$('#PNext4').attr('CHECKED','CHECKED')} else {$('#PNext3').attr('CHECKED','CHECKED')}
	if (getCookie('Poster')) {$('#PPoster2').attr('CHECKED','CHECKED')} else {$('#PPoster1').attr('CHECKED','CHECKED')}
	if (getCookie('PlayerPG')) {$('#PP'+getCookie('PlayerPG')).attr('CHECKED','CHECKED')} else {$('#PPcenter').attr('CHECKED','CHECKED')}
        if (getCookie('PlayerPV')) {$('#PP'+getCookie('PlayerPV')).attr('CHECKED','CHECKED')} else {$('#PPbottom').attr('CHECKED','CHECKED')}
        $('#Modal').stop().fadeToggle(500);
    }    
    
    function hexFromRGB(r, g, b) {
	var hex = [
	    r.toString( 16 ),
	    g.toString( 16 ),
	    b.toString( 16 )
	];
	$.each( hex, function( nr, val ) {
	    if ( val.length === 1 ) {
		hex[ nr ] = "0" + val;
	    }
	});
	return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
	var red = $( "#red" ).slider( "value" ),
	    green = $( "#green" ).slider( "value" ),
	    blue = $( "#blue" ).slider( "value" ),
	    hex = hexFromRGB( red, green, blue );
	$( "#swatch" ).css( "background-color", "#" + hex );
	$('.'+PlayerClass).css({background:'#' + hex });
	$('#'+Botton[9]).css({border:'1px solid #' + hex });
	setCookie('PlayerColorRed', red, 365);
	setCookie('PlayerColorGreen', green, 365);
	setCookie('PlayerColorBlue', blue, 365);
	setCookie('PlayerColor', hex, 365);
    }
    $(function() {
	$( "#red, #green, #blue" ).slider({
	    orientation: "horizontal",
	    range: "min",
            min: 30,
	    max: 200,
	    value: 127,
	    slide: refreshSwatch,
	    change: refreshSwatch
	});
	if (getCookie('PlayerColorRed')) {
	    var red = getCookie('PlayerColorRed'),
		green = getCookie('PlayerColorGreen'),
		blue = getCookie('PlayerColorBlue');
	} else { 
	    var red = 1,
		green = 2,
		blue = 3;
	}
	$( "#red" ).slider( "value", red );
	$( "#green" ).slider( "value", green );
	$( "#blue" ).slider( "value", blue );
    });
    
    function Setting(a,b,c){
	if (a === 'PColorSTN') {
	    $('.' + PlayerClass).css({
		background : '#000'
	    });
	    $('#'+Botton[9]).css({
		border : '1px solid #000'
	    });
	} else if (a === 'PPoster') {
	    if (b === 'Yes'){
		$('#'+Botton[9]).show();
		setCookie('Poster', b, - 1);
	    } else if (b === 'No'){
		$('#'+Botton[9]).hide();
		setCookie('Poster', b, 365);
	    }
	} else if (a === 'PPosition'){
	    if (b === 'top'){
		$(htmlClass).css({top : CSSP[3], bottom : CSSP[0]});
		setCookie('PlayerPV', b, 365);
	    } else if (b === 'bottom'){
		$(htmlClass).css({top : CSSP[0], bottom : CSSP[3]});
		setCookie('PlayerPV', b, 365);
	    } else if (b === 'left'){
		$(htmlClass).css({left : CSSP[1], right : CSSP[0]});
		setCookie('PlayerPG', b, 365);
	    } else if (b === 'center'){
		$(htmlClass).css({left : CSSP[2], right : CSSP[0]});
		setCookie('PlayerPG', b, 365);
	    } else if (b === 'right'){
		$(htmlClass).css({left : CSSP[0], right : CSSP[1]});
		setCookie('PlayerPG', b, 365);
	    }
	} else if (a === 'PNext') {
	    if (b === 'Yes') {
		setCookie('AutoNext', b, - 1);
                $('#PNext34').fadeIn(300);
	    } else if (b === 'No') {
		setCookie('AutoNext', b, 365);
                $('#PNext34').fadeOut(300); 
	    }
	} else if (a === 'PNext2') {
	    if (b === 'Next') {
		setCookie('AutoNext2', b, - 1);
	    } else if (b === 'Prev') {
		setCookie('AutoNext2', b, 365);
	    }
	}
	
    }


  //|*************************************************************|\\
  //|                                                             |\\
  //|                Audio Player 0.6 by RAF                      |\\
  //|                 www.AudioPlayer.AT.UA                       |\\
  //|    Skype:raf-1994, ICQ:566667065, e-Mail: raf@xaker.ru      |\\
  //|                                                             |\\
  //|*************************************************************|\\
  //|        Уважайте чужой труд! Не убирайте копирайт!           |\\
  //|*************************************************************|\\