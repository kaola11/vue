import Vue from 'vue'
import { mapState } from 'vuex';
//import LISTS from '@/common/index.js'




export default {
  data(){
    return {
      listList:listList,
      lists:{},
    }
  },
  mounted(){
  	var str=location.href.split("/")[5];
    this.listList.map((item,i)=>{
    	if(item.productId==str){ 
    		this.lists=item;
//  		console.log(this.lists);
    	}
    })
  },
  methods:{
    
    
  },
  computed:{
    newMsg(){},
  	...mapState({
  		listList:"listList",
  	})
  },
  components:{
    
  },
  watch:{
    
  }
}
