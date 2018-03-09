import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Cart from '@/components/cart'
import CartHeader from '@/components/cartHeader'
import Home from '@/components/home'
import HomeHeader from '@/components/homeHeader'
import Daily from '@/components/daily'
import DailyHeader from '@/components/dailyHeader'
import Kind from '@/components/kind'
import User from '@/components/user'
import Footer from '@/components/footer'
import HomeHeaderT from '@/components/homeHeader2'
import HomeT from '@/components/homeT'
import List from '@/components/list'
import Register from '@/components/register'
import RegisterHeader from '@/components/registerHeader'
import Lists from '@/components/lists'
import ListsHeader from '@/components/listsHeader'
import Details from '@/components/details'
import DetailsHeader from '@/components/detailsHeader'
import DetailFooter from '@/components/detailFooter'



import Login from '@/components/login'
import LoginHeader from '@/components/loginHeader'

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {
    	path:'/lists',
    	name:'lists',
    	components:{
    		header:ListsHeader,
    		content:Lists,
    	}
    },
    {
    	path:'/detail/:classID',
    	name:'listslist',
    	components:{
    		header:DetailsHeader,
    		content:Details,
    		footer:DetailFooter
    	},
    	props: {
        header:false,
        content:true,
        footer:false
      }
    },
    {
    	path:'/register',
    	name:'register',
    	components:{
    		header:RegisterHeader,
    		content:Register,
    	}
    },
    {
    	path:'/list',
    	name:'list',
    	components:{
    		header:HomeHeader,
    		content:List,
    		footer:Footer
    	}
    },
    {
    	path:'/home',
    	name:'home',
    	components:{
    		header:HomeHeader,
    		content:Home,
    		footer:Footer
    	}
    },
    {
    	path:'/homeT',
    	name:'homeT',
    	components:{
    		header:HomeHeaderT,
    		content:HomeT,
    		
    	}
    },
    {
    	path:'/cart',
    	name:'cart',
    	components:{
    		header:CartHeader,
    		content:Cart,
    		footer:Footer
    	}
    },
    {
    	path:'/daily',
    	name:'daily',
    	components:{
    		header:DailyHeader,
    		content:Daily,
    		footer:Footer
    	}
    },
    {
    	path:'/kind',
    	name:'kind',
    	components:{
    		header:HomeHeaderT, 
    		content:Kind,
    		footer:Footer 
    	}
    },
    {
      path: '/kindList/:classID',
      name: 'kindList',
      components:{
	    		header:HomeHeaderT, 
	    		content:Kind,
	    		footer:Footer 
	    	},
    	props: {
        header:false,
        content:true,
        footer:false
      }
    },
    
    {
    	path:'/user',
    	name:'user',
    	components:{
    		content:User,
    		footer:Footer
    	}
    },
    {
    	path:'/login',
    	name:'login',
    	components:{
    		header:LoginHeader,
    		content:Login,
    	}
    },
  ]
})
