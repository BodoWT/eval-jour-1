let operateur,a,b,n,mr,ms,point=1;
let Clic=false;
let leCalcul = document.getElementsByName('calculs')[0];
let leResultat = document.getElementsByName('resultat')[0];
let converti = parseFloat(leCalcul.value);
let operationAffichee = "";

function saisie(e) {
    if (Clic) {
        leResultat.value = "";
        Clic = false;
    }
    leResultat.value += e;
}

function effacer() {
    leResultat.value = "";
    operationAffichee = "";
}

function inverse(){
   document.calculs.resultat.value=(parseFloat(document.calculs.resultat.value) * -1).toString()
}

function signe(ope) {
    a = parseFloat(leResultat.value);
    operateur = ope;
    operationAffichee = a + operateur  ;
    leResultat.value = operationAffichee;
}

function calcul() {
    if (operateur == 'Pui') {
        leResultat.value = Math.pow(a, parseFloat(leResultat.value));
    } else {
        b = parseFloat(leResultat.value);
        operationAffichee += b;
        leResultat.value = eval(operationAffichee);
        Clic = false;
    }
    operationAffichee = "";
}
function scientific(z)
{
	a = parseFloat(leResultat.value);

	switch (z)
	{ 
		case 1:document.calculs.resultat.value = Math.sqrt(a); break;
		case 2:document.calculs.resultat.value = Math.abs(a); break;
		case 3:document.calculs.resultat.value = Math.PI; break;
		case 4:document.calculs.resultat.value = Math.sin(a); break;
		case 5:document.calculs.resultat.value = Math.cos(a); break;
		case 6:document.calculs.resultat.value = Math.tan(a); break;
		case 7:document.calculs.resultat.value = Math.log(a); break;
		case 8:document.calculs.resultat.value = Math.exp(a); break;
		case 9:document.calculs.resultat.value = Math.LN2; break;
		case 10:document.calculs.resultat.value = Math.LN10; break;
		case 11:document.calculs.resultat.value = Math.asin(a); break;
		case 12:document.calculs.resultat.value = Math.acos(a); break;
		case 13:document.calculs.resultat.value = Math.atan(a); break;
	}
}
function memoire(z)
{
	switch (z)
	{
		case 1:
            if(document.calculs.resultat.value.lenght > 0){
             ms=parseFloat(document.calculs.resultat.value);
             document.calculs.resultat.value=ms; }
             break; 
             case 2:
                if(document.calculs.resultat.value.lenght > 0){
                mr=parseFloat(document.calculs.resultat.value);
                document.calculs.resultat.value=mr; }
                break; 
	}
}