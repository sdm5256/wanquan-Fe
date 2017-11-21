"use strict";
//$(function(){  
  	var vue = new Vue({
	 	el: '#index',
	  	data:{
	  		searchTypeLts:['论文','新闻资料','视频','全部','论文','新闻资料','视频']

	  	}
	});
	var tylts = $('.search-type li');
	var length = $('.search-type li').length;
	var allWidth = $('.search-type ul')[0].scrollWidth;
	var tyNum = 0;
	if(tylts[length-1].offsetLeft<500){
		$('.type-more').hide();
	}
  	$('.type-more').bind('click',function(){
  		++tyNum ;
  		if(allWidth-tylts[tyNum].offsetLeft>500){
  			$('.search-type').animate({ 
  				left: '-' + tylts[tyNum].offsetLeft + 'px',
  				width: 500 + tylts[tyNum].offsetLeft + 'px'
  			});
  		}	
  	})
  	console.log($('.search-type ul')[0].scrollWidth)
  	console.log($('.search-type ul li'))
//}); 