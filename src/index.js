// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	var H, Q, D, N, P;
	var text={};
	H=Math.floor(currency/50);
	Q=Math.floor(currency%50/25);
	D=Math.floor(currency%50%25/10);
	N=Math.floor(currency%50%25%10/5);
	P=Math.floor(currency%50%25%10%5);
	
	if(H>0)
	text["H"]=H;
	if(Q>0)
	text["Q"]=Q;
	if(D>0)
	text["D"]=D;
	if(N>0)
	text["N"]=N;
	if(P>0)
	text["P"]=P;
	if(currency>10000)
	text={error: "You are rich, my friend! We don't have so much coins for exchange"};
	if(currency<=0)
	text={};
	return text;
}

