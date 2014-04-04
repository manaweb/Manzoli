$('.carousel').carousel({
	interval: 5000
});

$('.btn-esquerda').click(function() {
	$('.carousel').carousel('prev');
});
$('.btn-direita').click(function() {
	$('.carousel').carousel('next');
});