(function(){
//inicio
var app = angular.module('template',['ngSanitize']);

app.directive('topBlock', function(){  
	return {
		restrict: 'E',
		templateUrl: 'blocks/menu-header.html',
		controller:function(){ 
				this.menu = elements.menu;
				this.items = this.menu.items;
				this.brands = elements.brands;
		} ,
		controllerAs:'head'
	};
});

app.directive('sliderBlock', function(){
	return{
		restrict: 'E',
		templateUrl: 'blocks/carousel.html',
		controller:function(){
			this.carousel =  elements.carousel;
		},
		controllerAs:'carouselCtrl'

	};
});

app.directive('mainContent', function(){
	return{
		restrict: 'E',
		templateUrl: 'blocks/articles.html',
		controller:function(){
			this.articles = elements.articles;
		},
		controllerAs:'articlesCtrl'

	};
});

app.directive('footerBlock',function(){
	return{
		restrict: 'E',
		templateUrl: 'blocks/footer.html',
		controller:function(){
			this.element = elements.footer;
		},
		controllerAs:'footerCtrl'

	};

});


/*json*/
var elements = {
	footer:{
		links:[
		{
			name:"REPORT DAMAGED PRODUCT",
			link:"#",
		},
		{
			name:"AWARD AND RECOGNITION",
			link:"#",	
		},
		],
		copyright:"© 2013 FRITO-LAY </br> NORTH AMERICA, INC.",

	},
	articles:[
			{
				image:"images/content_1.png",
				title:"",
				text:"",
				video:"",
			},
			{
				image:"images/content_2.png",
				title:"",
				text:"",
				video:"",
			},

	],
	carousel:{
		slides:[
		{
			slideClass:'item',
			blocks:[
				{
					imgBlock:"images/slides/slide1_01.png",
				},
				{
					imgBlock:"images/slides/slide1_02.png",
				}
			],

		},
		{
			slideClass:'item',
			blocks:[
				{
					imgBlock:"images/slides/slide2_01.png",
				},
				{
					imgBlock:"images/slides/slide2_02.png",
				}
			],

		},
		{
			slideClass:'item',
			blocks:[
				{
					imgBlock:"images/slides/slide3_01.png",
				},
				{
					imgBlock:"images/slides/slide3_02.png",
				}
			],

		},
		{
			slideClass:'item',
			blocks:[
				{
					imgBlock:"images/slides/slide4_01.png",
				},
				{
					imgBlock:"images/slides/slide4_02.png",
				}
			],

		},
		{
			slideClass:'item',
			blocks:[
				{
					imgBlock:"images/slides/slide5_01.png",
				},
				{
					imgBlock:"images/slides/slide5_02.png",
				}
			],

		},
		],
	},
	brands:[
		{
			brandSrc:"images/subwaybrand.png",
			brandLink:"#",
			brandClass:"navbar-brand",
		},
		{
			brandSrc:"images/fritolaybrand.png",
			brandLink:"#",
			brandClass:"navbar-brand",
		}
	],
	menu:{
		title: "Main Menu",
		items:[
		{
			name:"",
			urlLink:"#",
			submenu:[],
			iconSrc:["images/homeicon.png","images/homeiconhover.png"],
			itemClass:'home'

		},
		{
			name:"national promotions",
			urlLink:"#",
			submenu:[
				{
					name:"Action",
					urlLink:"#",
					iconSrc:[],
					itemClass:'subItem',
					header:false,
					separator:false
				},
				{
					name:"another Action",
					urlLink:"#",
					iconSrc:[],
					itemClass:'subItem',
					header:false,
					separator:false
				},
				{
					name:"Something else here",
					urlLink:"#",
					iconSrc:[],
					itemClass:'subItem',
					header:false,
					separator:false
				},
				{
					name:"",
					urlLink:"#",
					iconSrc:[],
					itemClass:'divider',
					header:false,
					separator:true,
					attr:"separator",
				},
				{
					name:"Nav header",
					urlLink:"#",
					iconSrc:[],
					itemClass:'dropdown-header',
					header:true,
					separator:false
				},
				{
					name:"Separated link",
					urlLink:"#",
					iconSrc:[],
					itemClass:'subItem',
					header:false,
					separator:false
				},
				{
					name:"One more separated link",
					urlLink:"#",
					iconSrc:[],
					itemClass:'subItem',
					header:false,
					separator:false
				}
				
			],
			iconSrc:[],
			itemClass:'dropDown'			

		},
		{
			name:"order equipment",
			urlLink:"#",
			submenu:[],
			iconSrc:[],
			itemClass:'item'			

		},
		{
			name:"instructional videos",
			urlLink:"#",
			submenu:[],
			iconSrc:[],
			itemClass:'item'			

		},
		{
			name:"find your planogram",
			urlLink:"#",
			submenu:[],
			iconSrc:[],
			itemClass:'item'			

		},
		{
			name:"increase sales",
			urlLink:"#",
			submenu:[],
			iconSrc:[],
			itemClass:'item'			

		},
		{
			name:"key contact",
			urlLink:"#",
			submenu:[],
			iconSrc:[],
			itemClass:'item'			

		},

		//fin items
		],
	//fin menu
	},
	
//fin elements
};



//final
})();

