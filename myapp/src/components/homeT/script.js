import Vue from 'vue'

import axios from "axios"
import { SOU_LIST } from '@/common/index.js'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data(){
    return {
      "list":[],
    }
  },
  mounted(){
    var url=SOU_LIST;
    var that=this;
    axios.get(url)
    .then((response)=>{
    	that.list=response.data.searchFindList;
    }).catch((error) => {
      console.log(error)
    })
  },
  methods:{
    
  },
  computed:{
  	
  },
  components:{
    
  },
  watch:{
    
  }
}
