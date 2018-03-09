import Vue from 'vue'
import { Cell } from 'mint-ui';
import Scroll from '@/common/iscroll-probe.js'


Vue.component(Cell.name, Cell);
export default {
  data(){
    return {
      userList:[
      {name:"待付款",icon:"icon-wodedaifukuan",path:""},
      {name:"待发货",icon:"icon-hezi101",path:""},
      {name:"待收货",icon:"icon-che",path:""},
      {name:"待评价",icon:"icon-liaotian",path:""},
      {name:"退货/售后",icon:"icon-tuikuanshouhou",path:""}
      ]
    }
  },
  mounted(){
    
  },
  methods:{
    loaded () {
			var myScroll = new IScroll('#wrapper', { 
				scrollX: true, freeScroll: true 
			});
		}
		/*document.addEventListener('touchmove', function (e) { 			e.preventDefault(); 
		}, false);*/
  },
  computed:{
    
  },
  components:{
    Scroll
  },
  watch:{
    
  }
}
