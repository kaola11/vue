import Vue from 'vue'
import { mapState } from 'vuex'
import { KIND_LIST } from '@/common'

import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

export default {
  data(){
    return {
    	props:["classID"],
    	active:"",
    	i:"",
    }
  },
  mounted(){
  	var str=location.href.split("kindList/")[1];
  	this.i=str;
//	this.i.push(str);
  	console.log(this.i);
  	var url=KIND_LIST+"/kind";
    var that=this;
    this.$store.dispatch("actionKindList", url);
    var classID = this.$route.params.classID
		this.getData(classID)
  },
  methods:{
  	getData (classID) {
      
    }
  },
  computed:{
  	newMsg(){},
  	...mapState({
  		kindList:"kindList",
  	})
  },
  components:{
    
  },
  watch:{
  	
  }
}
