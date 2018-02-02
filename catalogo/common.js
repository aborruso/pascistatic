function add_new(){
	addnew = window.open('add_new.php','Nuovo','width=550,height=200,resizable=no,scrollbars=no,toolbar=no,menubar=no');
	addnew.focus();
}

function stampa(){
	if (document.dati.ids.value) {
		pr = window.open('print.php?ids='+document.dati.ids.options[document.dati.ids.selectedIndex].value, 'Stampa');
		pr.focus();
	} else alert('Selezionare uno strumento!');
}

function canc(){
	if (document.dati.ids.selectedIndex>=0) {
		if (confirm('Sei sicuro di volere eliminare la scheda?')) 
		del = window.open('canc.php?ids='+document.dati.ids.options[document.dati.ids.selectedIndex].value,'Cancella','width=550,height=200,resizable=no,scrollbars=no,toolbar=no,menubar=no');
		del.focus();
	} else alert('Selezionare uno strumento!');
}

var old_i = 0;
function tip_aut(inp) {
	sel = document.dati.ids;
	val = inp.value.toLowerCase();
	sel.options[old_i].selected = false;
	for (i=0;i<sel.length;i++) {
		if (val==sel.options[i].text.substr(6, val.length).toLowerCase()) {
			sel.options[i].selected = true;
			old_i = i;
			break;
		}
	}
}
function dbl_clic(obj) {
	if (obj.value) document.dati.submit();
}

function submit_form(){
	msg = false;
	if (document.dati.ids.value) msg = true;
	if (!msg) alert('Selezionare uno strumento!');
	else document.dati.submit();
}
